'use strict';

import React from 'react';
import {getToolTipClassByPlacement} from './utils';
import Align from 'rc-align';
import Animate from 'rc-animate';

var placementAlignMap = {
  left: {points: ['cr', 'cl']},
  right: {points: ['cl', 'cr']},
  top: {points: ['bc', 'tc']},
  bottom: {points: ['tc', 'bc']}
};

var Popup = React.createClass({
  // optimize for speed
  shouldComponentUpdate(nextProps) {
    return this.props.visible || nextProps.visible;
  },

  getPopupDomNode() {
    return React.findDOMNode(this);
  },

  getTarget() {
    return React.findDOMNode(this.props.wrap).firstChild;
  },

  getTransitionName() {
    var props = this.props;
    var transitionName = props.transitionName;
    if (!transitionName && props.animation) {
      transitionName = `${props.prefixCls}-${props.animation}`;
    }
    return transitionName;
  },

  handleAlign(popupDomNode, align) {
    var props = this.props;
    var placement = props.placement;
    if (placement && placement.points) {
      var originalClassName = getToolTipClassByPlacement(props.prefixCls, placement);
      var nextClassName = getToolTipClassByPlacement(props.prefixCls, align);
      if (nextClassName !== originalClassName) {
        popupDomNode.className = popupDomNode.className.replace(originalClassName, nextClassName);
      }
    }
  },

  render() {
    var props = this.props;
    var className = getToolTipClassByPlacement(props.prefixCls, props.placement);
    if (props.className) {
      className += ' ' + props.className;
    }
    var style = this.props.style;
    if (!props.visible) {
      className += ` ${props.prefixCls}-hidden`;
    }
    var arrowClassName = `${props.prefixCls}-arrow`;
    var innerClassname = `${props.prefixCls}-inner`;

    var placement = props.placement;
    var align;
    if (placement && placement.points) {
      align = placement;
    } else {
      align = placementAlignMap[placement];
    }

    return <Animate component=""
                    exclusive={true}
                    animateMount={true}
                    transitionName={this.getTransitionName()}
                    showProp="data-visible">
      <Align target={this.getTarget}
             key="popup"
             data-visible={props.visible}
             disabled={!props.visible}
             align={align}
             onAlign={this.handleAlign}>
        <div className={className}
             style={style}>
          <div className={arrowClassName}></div>
          <div className={innerClassname}>
            {props.children}
          </div>
        </div>
      </Align>
    </Animate>;
  }
});

export default Popup;
