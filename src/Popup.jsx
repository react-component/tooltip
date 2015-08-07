import React from 'react';
import {getToolTipClassByPlacement} from './utils';
import Align from 'rc-align';
import Animate from 'rc-animate';

const placementAlignMap = {
  left: {points: ['cr', 'cl']},
  right: {points: ['cl', 'cr']},
  top: {points: ['bc', 'tc']},
  bottom: {points: ['tc', 'bc']},
};

const Popup = React.createClass({
  propTypes: {
    visible: React.PropTypes.bool,
    wrap: React.PropTypes.object,
    style: React.PropTypes.object,
  },

  // optimize for speed
  shouldComponentUpdate(nextProps) {
    return this.props.visible || nextProps.visible;
  },

  onAlign(popupDomNode, align) {
    const props = this.props;
    const placement = props.placement;
    if (placement && placement.points) {
      const originalClassName = getToolTipClassByPlacement(props.prefixCls, placement);
      const nextClassName = getToolTipClassByPlacement(props.prefixCls, align);
      if (nextClassName !== originalClassName) {
        popupDomNode.className = popupDomNode.className.replace(originalClassName, nextClassName);
      }
    }
  },

  getPopupDomNode() {
    return React.findDOMNode(this);
  },

  getTarget() {
    return React.findDOMNode(this.props.wrap).firstChild;
  },

  getTransitionName() {
    const props = this.props;
    let transitionName = props.transitionName;
    if (!transitionName && props.animation) {
      transitionName = `${props.prefixCls}-${props.animation}`;
    }
    return transitionName;
  },

  render() {
    const props = this.props;
    let className = getToolTipClassByPlacement(props.prefixCls, props.placement);
    if (props.className) {
      className += ' ' + props.className;
    }
    const style = this.props.style;
    if (!props.visible) {
      className += ` ${props.prefixCls}-hidden`;
    }
    const arrowClassName = `${props.prefixCls}-arrow`;
    const innerClassname = `${props.prefixCls}-inner`;

    const placement = props.placement;
    let align;
    if (placement && placement.points) {
      align = placement;
    } else {
      align = placementAlignMap[placement];
    }

    return (<Animate component=""
                     exclusive={true}
                     animateMount={true}
                     transitionName={this.getTransitionName()}
                     showProp="data-visible">
      <Align target={this.getTarget}
             key="popup"
             data-visible={props.visible}
             disabled={!props.visible}
             align={align}
             onAlign={this.onAlign}>
        <div className={className}
             style={style}>
          <div className={arrowClassName}></div>
          <div className={innerClassname}>
            {props.children}
          </div>
        </div>
      </Align>
    </Animate>);
  },
});

export default Popup;
