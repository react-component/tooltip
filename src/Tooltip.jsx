import React from 'react';
import rcUtil, {createChainedFunction} from 'rc-util';
import Popup from './Popup';

class Tooltip extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: !!props.defaultVisible,
    };
    if ('visible' in props) {
      this.state.visible = !!props.visible;
    }
    ['onClick', 'onMouseEnter',
      'onMouseDown', 'onTouchStart',
      'onMouseLeave', 'onFocus',
      'onBlur', 'onDocumentClick'].forEach((m)=> {
        this[m] = this[m].bind(this);
      });
  }

  componentDidMount() {
    this.componentDidUpdate();
  }

  componentWillReceiveProps(nextProps) {
    if ('visible' in nextProps) {
      this.setState({
        visible: !!nextProps.visible,
      });
    }
  }

  componentDidUpdate() {
    if (!this.popupRendered) {
      return;
    }
    if (this.props.renderPopupToBody) {
      this.popupInstance = React.render(this.getPopupElement(), this.getTipContainer());
    }
    const props = this.props;
    if (props.trigger.indexOf('click') !== -1) {
      if (this.state.visible) {
        if (!this.clickOutsideHandler) {
          this.clickOutsideHandler = rcUtil.Dom.addEventListener(document, 'mousedown', this.onDocumentClick);
          this.touchOutsideHandler = rcUtil.Dom.addEventListener(document, 'touchstart', this.onDocumentClick);
        }
        return;
      }
    }
    if (this.clickOutsideHandler) {
      this.clickOutsideHandler.remove();
      this.touchOutsideHandler.remove();
      this.clickOutsideHandler = null;
      this.touchOutsideHandler = null;
    }
  }

  componentWillUnmount() {
    const tipContainer = this.tipContainer;
    if (tipContainer) {
      React.unmountComponentAtNode(tipContainer);
      document.body.removeChild(tipContainer);
      this.tipContainer = null;
    }
    if (this.delayTimer) {
      clearTimeout(this.delayTimer);
      this.delayTimer = null;
    }
    if (this.clickOutsideHandler) {
      this.clickOutsideHandler.remove();
      this.touchOutsideHandler.remove();
      this.clickOutsideHandler = null;
      this.touchOutsideHandler = null;
    }
  }

  onMouseEnter() {
    this.delaySetVisible(true);
  }

  onMouseLeave() {
    this.delaySetVisible(false);
  }

  onFocus() {
    this.focusTime = Date.now();
    this.setVisible(true);
  }

  onMouseDown() {
    this.preClickTime = Date.now();
  }

  onTouchStart() {
    this.preTouchTime = Date.now();
  }

  onBlur() {
    this.setVisible(false);
  }

  onClick(e) {
    // focus will trigger click
    if (this.focusTime) {
      let preTime;
      if (this.preClickTime && this.preTouchTime) {
        preTime = Math.min(this.preClickTime, this.preTouchTime);
      } else if (this.preClickTime) {
        preTime = this.preClickTime;
      } else if (this.preTouchTime) {
        preTime = this.preTouchTime;
      }
      if (Math.abs(preTime - this.focusTime) < 20) {
        return;
      }
      this.focusTime = 0;
    }
    this.preClickTime = 0;
    this.preTouchTime = 0;
    e.preventDefault();
    if (this.state.visible) {
      this.setVisible(false);
    } else {
      this.setVisible(true);
    }
  }

  onDocumentClick(e) {
    const target = e.target;
    const root = React.findDOMNode(this);
    const popupNode = this.getPopupDomNode();
    if (!rcUtil.Dom.contains(root, target) && !rcUtil.Dom.contains(popupNode, target)) {
      this.setVisible(false);
    }
  }

  getPopupDomNode() {
    // for test
    return this.refs.popup ? this.refs.popup.getPopupDomNode() : this.popupInstance.getPopupDomNode();
  }

  getTipContainer() {
    if (!this.tipContainer) {
      this.tipContainer = document.createElement('div');
      document.body.appendChild(this.tipContainer);
    }
    return this.tipContainer;
  }

  getPopupElement() {
    if (!this.popupRendered) {
      return null;
    }
    const props = this.props;
    const state = this.state;
    const ref = {};
    if (!props.renderPopupToBody) {
      ref.ref = 'popup';
    }
    return (<Popup prefixCls={props.prefixCls}
      {...ref}
                   visible={state.visible}
                   trigger={props.trigger}
                   placement={props.placement}
                   animation={props.animation}
                   wrap={this}
                   style={props.overlayStyle}
                   transitionName={props.transitionName}>
      {props.overlay}
    </Popup>);
  }

  render() {
    if (this.state.visible) {
      this.popupRendered = true;
    }
    const props = this.props;
    const children = props.children;
    const child = React.Children.only(children);
    const childProps = child.props || {};
    const newChildProps = {};
    const trigger = props.trigger;
    const mouseProps = {};
    if (trigger.indexOf('click') !== -1) {
      newChildProps.onClick = createChainedFunction(this.onClick, childProps.onClick);
      newChildProps.onMouseDown = createChainedFunction(this.onMouseDown, childProps.onMouseDown);
      newChildProps.onTouchStart = createChainedFunction(this.onTouchStart, childProps.onTouchStart);
    }
    if (trigger.indexOf('hover') !== -1) {
      mouseProps.onMouseEnter = createChainedFunction(this.onMouseEnter, childProps.onMouseEnter);
      mouseProps.onMouseLeave = createChainedFunction(this.onMouseLeave, childProps.onMouseLeave);
    }
    if (trigger.indexOf('focus') !== -1) {
      newChildProps.onFocus = createChainedFunction(this.onFocus, childProps.onFocus);
      newChildProps.onBlur = createChainedFunction(this.onBlur, childProps.onBlur);
    }

    const popupElement = props.renderPopupToBody ? null : this.getPopupElement();
    let className = `${props.prefixCls}-wrap`;

    if (this.state.visible) {
      className += ` ${props.prefixCls}-wrap-open`;
    }

    return (<span className={className} {...mouseProps} style={props.wrapStyle}>
    {rcUtil.Children.mapSelf([React.cloneElement(child, newChildProps), popupElement])}
    </span>);
  }

  setVisible(visible) {
    if (!('visible' in this.props)) {
      this.setState({
        visible: visible,
      });
    }
    this.props.onVisibleChange(visible);
  }

  delaySetVisible(visible) {
    const delay = this.props.delay * 1000;
    if (delay) {
      if (this.delayTimer) {
        clearTimeout(this.delayTimer);
      }
      this.delayTimer = setTimeout(() => {
        this.setVisible(visible);
        this.delayTimer = null;
      }, delay);
    } else {
      this.setVisible(visible);
    }
  }
}

Tooltip.propTypes = {
  trigger: React.PropTypes.any,
  placement: React.PropTypes.any,
  onVisibleChange: React.PropTypes.func,
  renderPopupToBody: React.PropTypes.bool,
  overlay: React.PropTypes.node.isRequired,
  overlayStyle: React.PropTypes.object,
  wrapStyle: React.PropTypes.object,
  delay: React.PropTypes.number,
};

Tooltip.defaultProps = {
  prefixCls: 'rc-tooltip',
  renderPopupToBody: true,
  onVisibleChange() {
  },
  delay: 0.1,
  overlayStyle: {},
  wrapStyle: {},
  placement: 'right',
  trigger: ['hover'],
};

export default Tooltip;
