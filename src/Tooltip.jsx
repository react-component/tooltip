import React from 'react';
import ReactDOM from 'react-dom';
import {createChainedFunction, Dom} from 'rc-util';
import Popup from './Popup';

const Tooltip = React.createClass({
  propTypes: {
    trigger: React.PropTypes.any,
    placement: React.PropTypes.any,
    onVisibleChange: React.PropTypes.func,
    afterVisibleChange: React.PropTypes.func,
    overlay: React.PropTypes.node.isRequired,
    overlayStyle: React.PropTypes.object,
    overlayClassName: React.PropTypes.string,
    wrapStyle: React.PropTypes.object,
    mouseEnterDelay: React.PropTypes.number,
    mouseLeaveDelay: React.PropTypes.number,
    getTooltipContainer: React.PropTypes.func,
  },

  getDefaultProps() {
    return {
      prefixCls: 'rc-tooltip',
      onVisibleChange() {
      },
      afterVisibleChange() {
      },
      mouseEnterDelay: 0,
      mouseLeaveDelay: 0.1,
      overlayStyle: {},
      wrapStyle: {},
      placement: 'right',
      trigger: ['hover'],
    };
  },

  getInitialState() {
    const props = this.props;
    let visible;
    if ('visible' in props) {
      visible = props.visible;
    } else {
      visible = props.defaultVisible;
    }
    return {visible};
  },

  componentDidMount() {
    this.componentDidUpdate(this.props, this.state);
  },

  componentWillReceiveProps(nextProps) {
    if ('visible' in nextProps) {
      this.setState({
        visible: !!nextProps.visible,
      });
    }
  },

  componentDidUpdate(prevProps, prevState) {
    const props = this.props;
    const state = this.state;
    if (this.popupRendered) {
      const self = this;
      ReactDOM.unstable_renderSubtreeIntoContainer(this, this.getPopupElement(), this.getTipContainer(), function renderPopup() {
        self.popupDomNode = ReactDOM.findDOMNode(this);
        if (prevState.visible !== state.visible) {
          props.afterVisibleChange(state.visible);
        }
      });
      if (props.trigger.indexOf('click') !== -1) {
        if (state.visible) {
          if (!this.clickOutsideHandler) {
            this.clickOutsideHandler = Dom.addEventListener(document, 'mousedown', this.onDocumentClick);
            this.touchOutsideHandler = Dom.addEventListener(document, 'touchstart', this.onDocumentClick);
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
  },

  componentWillUnmount() {
    const tipContainer = this.tipContainer;
    if (tipContainer) {
      ReactDOM.unmountComponentAtNode(tipContainer);
      if (this.props.getTooltipContainer) {
        const mountNode = this.props.getTooltipContainer();
        mountNode.removeChild(tipContainer);
      } else {
        document.body.removeChild(tipContainer);
      }
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
  },

  onMouseEnter() {
    this.delaySetVisible(true, this.props.mouseEnterDelay);
  },

  onMouseLeave() {
    this.delaySetVisible(false, this.props.mouseLeaveDelay);
  },

  onFocus() {
    this.focusTime = Date.now();
    this.setVisible(true);
  },

  onMouseDown() {
    this.preClickTime = Date.now();
  },

  onTouchStart() {
    this.preTouchTime = Date.now();
  },

  onBlur() {
    this.setVisible(false);
  },

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
  },

  onDocumentClick(e) {
    const target = e.target;
    const root = ReactDOM.findDOMNode(this);
    const popupNode = this.getPopupDomNode();
    if (!Dom.contains(root, target) && !Dom.contains(popupNode, target)) {
      this.setVisible(false);
    }
  },

  getPopupDomNode() {
    // for test
    return this.popupDomNode;
  },

  getTipContainer() {
    if (!this.tipContainer) {
      this.tipContainer = document.createElement('div');
      if (this.props.getTooltipContainer) {
        const mountNode = this.props.getTooltipContainer();
        mountNode.appendChild(this.tipContainer);
      } else {
        document.body.appendChild(this.tipContainer);
      }
    }
    return this.tipContainer;
  },

  getPopupElement() {
    if (!this.popupRendered) {
      return null;
    }
    const props = this.props;
    const state = this.state;
    const mouseProps = {};
    if (props.trigger.indexOf('hover') !== -1) {
      mouseProps.onMouseEnter = this.onMouseEnter;
      mouseProps.onMouseLeave = this.onMouseLeave;
    }
    return (<Popup prefixCls={props.prefixCls}
                   visible={state.visible}
                   className={props.overlayClassName}
                   trigger={props.trigger}
                   placement={props.placement}
                   animation={props.animation}
      {...mouseProps}
                   wrap={this}
                   style={props.overlayStyle}
                   transitionName={props.transitionName}>
      {props.overlay}
    </Popup>);
  },

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
    if (trigger.indexOf('click') !== -1) {
      newChildProps.onClick = createChainedFunction(this.onClick, childProps.onClick);
      newChildProps.onMouseDown = createChainedFunction(this.onMouseDown, childProps.onMouseDown);
      newChildProps.onTouchStart = createChainedFunction(this.onTouchStart, childProps.onTouchStart);
    }
    if (trigger.indexOf('hover') !== -1) {
      newChildProps.onMouseEnter = createChainedFunction(this.onMouseEnter, childProps.onMouseEnter);
      newChildProps.onMouseLeave = createChainedFunction(this.onMouseLeave, childProps.onMouseLeave);
    }
    if (trigger.indexOf('focus') !== -1) {
      newChildProps.onFocus = createChainedFunction(this.onFocus, childProps.onFocus);
      newChildProps.onBlur = createChainedFunction(this.onBlur, childProps.onBlur);
    }

    let className = `${props.prefixCls}-wrap`;

    if (this.state.visible) {
      className += ` ${props.prefixCls}-wrap-open`;
    }

    return (<span className={className} style={props.wrapStyle}>
    {React.cloneElement(child, newChildProps)}
    </span>);
  },

  setVisible(visible) {
    if (this.state.visible !== visible) {
      if (!('visible' in this.props)) {
        this.setState({
          visible: visible,
        });
      }
      this.props.onVisibleChange(visible);
    }
  },

  delaySetVisible(visible, delayS) {
    const delay = delayS * 1000;
    if (this.delayTimer) {
      clearTimeout(this.delayTimer);
      this.delayTimer = null;
    }
    if (delay) {
      this.delayTimer = setTimeout(() => {
        this.setVisible(visible);
        this.delayTimer = null;
      }, delay);
    } else {
      this.setVisible(visible);
    }
  },
});

export default Tooltip;
