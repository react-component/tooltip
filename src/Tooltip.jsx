'use strict';

import React from 'react';
import rcUtil, {createChainedFunction} from 'rc-util';
import Popup from './Popup';

class Tooltip extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: !!props.defaultVisible
    };
    if ('visible' in props) {
      this.state.visible = !!props.visible;
    }
    ['handleClick', 'handleMouseEnter',
      'handleMouseDown', 'handleTouchStart',
      'handleMouseLeave', 'handleFocus',
      'handleBlur', 'handleOutsideClick'].forEach((m)=> {
        this[m] = this[m].bind(this);
      });
  }

  getPopupDomNode() {
    // for test
    return this.refs.popup ? this.refs.popup.getPopupDomNode() : this.popupInstance.getPopupDomNode();
  }

  componentWillReceiveProps(nextProps) {
    if ('visible' in nextProps) {
      this.setState({
        visible: !!nextProps.visible
      });
    }
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
    var props = this.props;
    var state = this.state;
    var ref = {};
    if (!props.renderPopupToBody) {
      ref.ref = 'popup';
    }
    return <Popup prefixCls={props.prefixCls}
      {...ref}
      visible={state.visible}
      trigger={props.trigger}
      placement={props.placement}
      animation={props.animation}
      wrap={this}
      style={props.overlayStyle}
      transitionName={props.transitionName}>
      {props.overlay}
    </Popup>;
  }

  setVisible(visible) {
    if (this.state.visible !== visible) {
      var currentVisible = this.state.visible;
      this.props.onVisibleChange(visible);
      // avoid redundant render
      // user do not modify visible
      if (currentVisible === this.state.visible) {
        this.setState({
          visible: visible
        });
      }
    }
  }

  delaySetVisible(visible) {
    var delay = this.props.delay * 1000;
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

  handleMouseEnter() {
    this.delaySetVisible(true);
  }

  handleMouseLeave() {
    this.delaySetVisible(false);
  }

  handleFocus() {
    this.focusTime = Date.now();
    this.setVisible(true);
  }

  handleMouseDown() {
    this.preClickTime = Date.now();
  }

  handleTouchStart() {
    this.preTouchTime = Date.now();
  }

  handleBlur() {
    this.setVisible(false);
  }

  handleClick(e) {
    // focus will trigger click
    if (this.focusTime) {
      var preTime;
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

  handleOutsideClick(e) {
    var target = e.target;
    var root = React.findDOMNode(this);
    var popupNode = this.getPopupDomNode();
    if (!rcUtil.Dom.contains(root, target) && !rcUtil.Dom.contains(popupNode, target)) {
      this.setVisible(false);
    }
  }

  componentDidMount() {
    this.componentDidUpdate();
  }

  componentDidUpdate() {
    if (!this.popupRendered) {
      return;
    }
    if (this.props.renderPopupToBody) {
      this.popupInstance = React.render(this.getPopupElement(), this.getTipContainer());
    }
    var props = this.props;
    if (props.trigger.indexOf('click') !== -1) {
      if (this.state.visible) {
        if (!this.clickOutsideHandler) {
          this.clickOutsideHandler = rcUtil.Dom.addEventListener(document, 'mousedown', this.handleOutsideClick);
          this.touchOutsideHandler = rcUtil.Dom.addEventListener(document, 'touchstart', this.handleOutsideClick);
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
    var tipContainer = this.tipContainer;
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

  render() {
    if (this.state.visible) {
      this.popupRendered = true;
    }
    var props = this.props;
    var children = props.children;
    var child = React.Children.only(children);
    var childProps = child.props || {};
    var newChildProps = {};
    var trigger = props.trigger;
    var mouseProps = {};
    if (trigger.indexOf('click') !== -1) {
      newChildProps.onClick = createChainedFunction(this.handleClick, childProps.onClick);
      newChildProps.onMouseDown = createChainedFunction(this.handleMouseDown, childProps.onMouseDown);
      newChildProps.onTouchStart = createChainedFunction(this.handleTouchStart, childProps.onTouchStart);
    }
    if (trigger.indexOf('hover') !== -1) {
      mouseProps.onMouseEnter = createChainedFunction(this.handleMouseEnter, childProps.onMouseEnter);
      mouseProps.onMouseLeave = createChainedFunction(this.handleMouseLeave, childProps.onMouseLeave);
    }
    if (trigger.indexOf('focus') !== -1) {
      newChildProps.onFocus = createChainedFunction(this.handleFocus, childProps.onFocus);
      newChildProps.onBlur = createChainedFunction(this.handleBlur, childProps.onBlur);
    }

    var popupElement = props.renderPopupToBody ? null : this.getPopupElement();
    var className = `${props.prefixCls}-wrap`;

    if (this.state.visible) {
      className += ` ${props.prefixCls}-wrap-open`;
    }

    return (<span className={className} {...mouseProps} style={props.wrapStyle}>
    {rcUtil.Children.mapSelf([React.cloneElement(child, newChildProps), popupElement])}
    </span>);
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
  delay: React.PropTypes.number
};

Tooltip.defaultProps = {
  prefixCls: 'rc-tooltip',
  renderPopupToBody: true,
  onVisibleChange: function () {
  },
  delay: 0.1,
  overlayStyle: {},
  wrapStyle: {},
  placement: 'right',
  trigger: ['hover']
};

export default Tooltip;
