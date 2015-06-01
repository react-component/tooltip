'use strict';

/**
 * @author yiminghe@gmail.com
 */

var React = require('react');
var CSSTransitionGroup = require('rc-css-transition-group');

class Popup extends React.Component {
  getPlacementCss() {
    var props = this.props;
    var prefixCls = props.prefixCls;
    var placement = props.placement;
    if (typeof placement === 'string') {
      return `${prefixCls}-placement-${placement}`;
    } else {
      return '';
    }
  }

  getRootNode() {
    return React.findDOMNode(this.refs.popup);
  }

  render() {
    var props = this.props;
    var className = `${props.prefixCls} ${this.getPlacementCss()}`;
    if (props.className) {
      className += ' ' + props.className;
    }
    var arrowClassName = `${props.prefixCls}-arrow`;
    var innerClassname = `${props.prefixCls}-inner`;
    var content = props.visible ? [<div className={className}
      key="popup"
      ref="popup"
      style={this.style}>
      <div className={arrowClassName}></div>
      <div className={innerClassname}>
    {props.children}
      </div>
    </div>] : [];
    if (props.transitionName) {
      return <CSSTransitionGroup transitionName={props.transitionName}>{content}</CSSTransitionGroup>;
    } else {
      return content[0] || null;
    }
  }
}

module.exports = Popup;
