import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';
import {getToolTipClassByPlacement, fromPointsToPlacement, fromPlacementStrToAlign} from './utils';
import Align from 'rc-align';
import Animate from 'rc-animate';
import assign from 'object-assign';

const Popup = React.createClass({
  propTypes: {
    visible: PropTypes.bool,
    wrap: PropTypes.object,
    style: PropTypes.object,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
  },

  componentDidMount() {
    this.rootNode = this.getPopupDomNode();
  },

  // optimize for speed
  shouldComponentUpdate(nextProps) {
    return this.props.visible || nextProps.visible;
  },

  onAlign(popupDomNode, align) {
    const props = this.props;
    const {placement, prefixCls} = props;
    if (placement) {
      const originalClassName = getToolTipClassByPlacement(prefixCls, placement);
      let nextClassName;
      if (placement.points) {
        nextClassName = getToolTipClassByPlacement(prefixCls, align);
      } else if (typeof placement === 'string') {
        nextClassName = getToolTipClassByPlacement(prefixCls, fromPointsToPlacement(align));
      }
      if (nextClassName !== originalClassName) {
        popupDomNode.className = popupDomNode.className.replace(originalClassName, nextClassName);
      }
    }
  },

  getPopupDomNode() {
    return ReactDOM.findDOMNode(this);
  },

  getTarget() {
    return ReactDOM.findDOMNode(this.props.wrap).firstChild;
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
    const {prefixCls, placement, style} = props;
    let className;

    if (props.visible || !this.rootNode) {
      className = getToolTipClassByPlacement(prefixCls, props.placement);
      if (props.className) {
        className += ' ' + props.className;
      }
    } else {
      // fix auto adjust
      className = this.rootNode.className;
      const hiddenClass = `${prefixCls}-hidden`;
      if (className.indexOf(hiddenClass) === -1) {
        className += ` ${hiddenClass}`;
      }
    }
    const arrowClassName = `${prefixCls}-arrow`;
    const innerClassname = `${prefixCls}-inner`;
    let align;
    if (placement && placement.points) {
      align = placement;
    } else {
      align = fromPlacementStrToAlign(placement);
      const {offset, targetOffset} = align;
      let offsetProp = props.align.offset;
      let targetOffsetProp = props.align.targetOffset;
      if (offsetProp) {
        offsetProp = offsetProp.concat();
      }
      if (targetOffsetProp) {
        targetOffsetProp = targetOffsetProp.concat();
      }
      const updateAlign = {};
      for (let index = 0; index < 2; index++) {
        if (offsetProp) {
          if (offsetProp[index] === undefined) {
            offsetProp[index] = offset[index];
          }
          updateAlign.offset = offsetProp;
        }
        if (targetOffsetProp) {
          if (targetOffsetProp[index] === undefined) {
            targetOffsetProp[index] = targetOffset[index];
          }
          updateAlign.targetOffset = offsetProp;
        }
      }
      align = assign({}, align, updateAlign);
    }
    return (<Animate component=""
                     exclusive
                     transitionAppear
                     transitionName={this.getTransitionName()}
                     showProp="data-visible">
      <Align target={this.getTarget}
             key="popup"
             monitorWindowResize
             data-visible={props.visible}
             disabled={!props.visible}
             align={align}
             onAlign={this.onAlign}>
        <div className={className}
             onMouseEnter={props.onMouseEnter}
             onMouseLeave={props.onMouseLeave}
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
