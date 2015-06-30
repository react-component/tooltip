'use strict';

/**
 * @author yiminghe@gmail.com
 */

var React = require('react');
var anim = require('css-animation');
var utils = require('./utils');
var domAlign = require('dom-align');


class Popup extends React.Component {
  getPopupDomNode() {
    return React.findDOMNode(this.refs.popup);
  }

  alignRootNode(prevProps) {
    var props = this.props;
    if (props.visible && !prevProps.visible) {
      var targetDomNode = React.findDOMNode(props.wrap).firstChild;
      var popupDomNode = this.getPopupDomNode();
      var placement = props.placement;
      var points;
      if (placement && placement.points) {
        var originalClassName = utils.getToolTipClassByPlacement(props.prefixCls, placement);
        var align = domAlign(popupDomNode, targetDomNode, placement);
        var nextClassName = utils.getToolTipClassByPlacement(props.prefixCls, align);
        if (nextClassName !== originalClassName) {
          popupDomNode.className = popupDomNode.className.replace(originalClassName, nextClassName);
        }
      } else {
        points = ['cr', 'cl'];
        if (placement === 'right') {
          points = ['cl', 'cr'];
        } else if (placement === 'top') {
          points = ['bc', 'tc'];
        } else if (placement === 'bottom') {
          points = ['tc', 'bc'];
        }
        domAlign(popupDomNode, targetDomNode, {
          points: points
        });
      }
    }
  }

  animateRootNode(prevProps) {
    var props = this.props;
    var transitionName = props.transitionName;
    if (!transitionName && props.animation) {
      transitionName = `${props.prefixCls}-${props.animation}`;
    }
    if (transitionName) {
      var domNode = this.getPopupDomNode();
      if (props.visible && !prevProps.visible) {
        anim(domNode, `${transitionName}-enter`);
      } else if (!props.visible && prevProps.visible) {
        anim(domNode, `${transitionName}-leave`);
      }
    }
  }

  componentDidUpdate(prevProps) {
    prevProps = prevProps || {};
    this.alignRootNode(prevProps);
    this.animateRootNode(prevProps);
  }

  componentDidMount() {
    this.componentDidUpdate();
  }

  render() {
    var props = this.props;
    var className = utils.getToolTipClassByPlacement(props.prefixCls, props.placement);
    if (props.className) {
      className += ' ' + props.className;
    }
    var style = this.props.style;
    var maskStyle = {
      position: 'fixed',
      left: 0,
      top: 0,
      background: '#000',
      opacity: 0,
      filter: 'alpha(opacity=0)',
      width: '100%',
      height: '100%',
      zIndex: '-1'
    };
    if (!props.visible) {
      className += ` ${props.prefixCls}-hidden`;
      maskStyle.display = 'none';
    }
    var arrowClassName = `${props.prefixCls}-arrow`;
    var innerClassname = `${props.prefixCls}-inner`;
    return <div className={className}
      ref="popup"
      style={style}>
      {props.trigger.indexOf('click') !== -1 ? <div style={maskStyle} onClick={props.onClickOutside}></div> : null}
      <div className={arrowClassName}></div>
      <div className={innerClassname}>
    {props.children}
      </div>
    </div>;
  }
}

module.exports = Popup;
