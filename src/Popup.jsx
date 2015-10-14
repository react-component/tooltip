import React from 'react';
import ReactDOM from 'react-dom';
import {getToolTipClassByPlacement, fromPointsToPlacement, placementAlignMap} from './utils';
import Align from 'rc-align';
import Animate from 'rc-animate';

const Popup = React.createClass({
  propTypes: {
    visible: React.PropTypes.bool,
    wrap: React.PropTypes.object,
    style: React.PropTypes.object,
    onMouseEnter: React.PropTypes.func,
    onMouseLeave: React.PropTypes.func,
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
      align = placementAlignMap[placement];
    }

    return (<Animate component=""
                     exclusive={true}
                     transitionAppear={true}
                     transitionName={this.getTransitionName()}
                     showProp="data-visible">
      <Align target={this.getTarget}
             key="popup"
             monitorWindowResize={true}
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
