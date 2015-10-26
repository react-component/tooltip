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
    className: PropTypes.string,
    onMouseLeave: PropTypes.func,
  },

  getDefaultProps() {
    return {
      className: '',
    };
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
    let placement;
    const placementProp = this.currentPlacement || props.placement;
    if (placementProp.points) {
      placement = align;
    } else if (typeof placementProp === 'string') {
      placement = fromPointsToPlacement(align);
    }
    if (placement !== placementProp) {
      this.currentPlacement = placement;
      popupDomNode.className = this.getClassName(placement);
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

  getClassName(placement) {
    const props = this.props;
    const {prefixCls} = props;
    let className = props.className + ' ';
    className += getToolTipClassByPlacement(prefixCls, placement || props.placement);
    const hiddenClass = `${prefixCls}-hidden`;
    if (!props.visible) {
      className += ` ${hiddenClass}`;
    }
    return className;
  },

  render() {
    const props = this.props;
    const {prefixCls, placement, style} = props;
    const className = this.getClassName(this.currentPlacement);
    if (!props.visible) {
      this.currentPlacement = null;
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
