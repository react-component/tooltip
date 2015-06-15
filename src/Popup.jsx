'use strict';

/**
 * @author yiminghe@gmail.com
 */

var React = require('react');
var anim = require('css-animation');
var utils = require('./utils');
var assign = require('object-assign');
var domAlign = require('dom-align');

class Popup extends React.Component {
  getRootNode() {
    return React.findDOMNode(this.refs.popup);
  }


  alignRootNode() {
    var props = this.props;
    if (props.visible) {
      var targetDomNode = React.findDOMNode(props.wrap).firstChild;
      var popupDomNode = this.getRootNode();
      var placement = props.placement;
      var points;
      if (placement && placement.points) {
        var align = domAlign(popupDomNode, targetDomNode, placement);
        popupDomNode.className = utils.getToolTipClassByPlacement(props.prefixCls, align);
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
      var domNode = this.getRootNode();
      if (props.visible && !prevProps.visible) {
        anim(domNode, `${transitionName}-enter`);
      } else if (!props.visible && prevProps.visible) {
        domNode.style.display = 'block';
        anim(domNode, `${transitionName}-leave`, ()=> {
          domNode.style.display = 'none';
        });
      }
    }
  }

  componentDidUpdate(prevProps) {
    prevProps = prevProps || {};
    this.alignRootNode();
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
    if (!props.visible) {
      style = assign({}, style, {
        display: 'none'
      });
    }
    var arrowClassName = `${props.prefixCls}-arrow`;
    var innerClassname = `${props.prefixCls}-inner`;
    return <div className={className}
      key="popup"
      ref="popup"
      style={style}>
      <div className={arrowClassName}></div>
      <div className={innerClassname}>
    {props.children}
      </div>
    </div>;
  }
}

module.exports = Popup;
