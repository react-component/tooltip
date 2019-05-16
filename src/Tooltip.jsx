import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import PropTypes from 'prop-types';
import positions from 'positions';
import Trigger from 'rc-trigger';
import { placements } from './placements';
import { getArrowDirection, getArrowAlign } from './util';
import Content from './Content';

const pointNamesMap = {
  tc: 'top center',
  bc: 'bottom center',
  cl: 'center left',
  cr: 'center right',
  tl: 'top left',
  tr: 'top right',
  bl: 'bottom left',
  br: 'bottom right',
};

const getArrowStyle = (position, align) => {
  const arrowDirection = getArrowDirection(align);
  const arrowAlign = getArrowAlign(align);

  const style = {};
  if (arrowDirection === 'up' || arrowDirection === 'down') {
    style.left = `${position.left + align.offsetX}px`;
  }
  if (arrowDirection === 'left' || arrowDirection === 'right') {
    style.top = `${position.top + align.offsetY}px`;
  }
  if (arrowAlign === 'left') {
    style.marginLeft = 5;
  }
  if (arrowAlign === 'right') {
    style.marginRight = 5;
  }
  if (arrowAlign === 'top') {
    style.marginTop = 5;
  }
  if (arrowAlign === 'bottom') {
    style.marginBottom = 5;
  }

  return style;
};

class Tooltip extends Component {
  static propTypes = {
    trigger: PropTypes.any,
    children: PropTypes.any,
    defaultVisible: PropTypes.bool,
    visible: PropTypes.bool,
    placement: PropTypes.string,
    transitionName: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object,
    ]),
    animation: PropTypes.any,
    onVisibleChange: PropTypes.func,
    onPopupAlign: PropTypes.func,
    afterVisibleChange: PropTypes.func,
    overlay: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.func,
    ]).isRequired,
    overlayStyle: PropTypes.object,
    overlayClassName: PropTypes.string,
    prefixCls: PropTypes.string,
    mouseEnterDelay: PropTypes.number,
    mouseLeaveDelay: PropTypes.number,
    getTooltipContainer: PropTypes.func,
    destroyTooltipOnHide: PropTypes.bool,
    align: PropTypes.object,
    arrowContent: PropTypes.any,
    id: PropTypes.string,
  };

  static defaultProps = {
    prefixCls: 'rc-tooltip',
    mouseEnterDelay: 0,
    destroyTooltipOnHide: false,
    mouseLeaveDelay: 0.1,
    align: {},
    placement: 'right',
    trigger: ['hover'],
    arrowContent: null,
  };

  state = { arrowStyle: null }

  onPopupAlign = (popupNode, align) => {
    const { onPopupAlign } = this.props;

    this.adjustArrow(align);

    if (onPopupAlign) {
      onPopupAlign(popupNode, align);
    }
  }

  getPopupDomNode = () => {
    return this.trigger.getPopupDomNode();
  }

  getPopupElement = () => {
    const { arrowContent, overlay, prefixCls, id } = this.props;
    const { arrowStyle } = this.state;

    return ([
      <div ref={this.saveArrow} className={`${prefixCls}-arrow`} key="arrow" style={arrowStyle}>
        {arrowContent}
      </div>,
      <Content
        key="content"
        trigger={this.trigger}
        prefixCls={prefixCls}
        id={id}
        overlay={overlay}
      />,
    ]);
  }

  adjustArrow = (align) => {
    const { arrowStyle: arrowStyleCurrent } = this.state;
    const targetNode = findDOMNode(this);

    const arrowPlacement = pointNamesMap[align.points[0]];
    const targetPlacement = pointNamesMap[align.points[1]];
    const position = positions(
      this.arrow,
      arrowPlacement,
      targetNode,
      targetPlacement,
    );

    const arrowStyle = getArrowStyle(position, align);
    if (
      !arrowStyleCurrent ||
      arrowStyle.top !== arrowStyleCurrent.top ||
      arrowStyle.left !== arrowStyleCurrent.left
    ) {
      this.setState({ arrowStyle });
    }
  }

  saveArrow = (node) => {
    this.arrow = node;
  }

  saveTrigger = (node) => {
    this.trigger = node;
  }

  render() {
    const {
      overlayClassName, trigger,
      mouseEnterDelay, mouseLeaveDelay,
      overlayStyle, prefixCls,
      children, onVisibleChange, afterVisibleChange,
      transitionName, animation,
      placement, align,
      destroyTooltipOnHide,
      defaultVisible, getTooltipContainer,
      ...restProps,
    } = this.props;
    const extraProps = { ...restProps };
    if ('visible' in this.props) {
      extraProps.popupVisible = this.props.visible;
    }
    return (
      <Trigger
        popupClassName={overlayClassName}
        ref={this.saveTrigger}
        prefixCls={prefixCls}
        popup={this.getPopupElement}
        action={trigger}
        builtinPlacements={placements}
        popupPlacement={placement}
        popupAlign={align}
        getPopupContainer={getTooltipContainer}
        onPopupVisibleChange={onVisibleChange}
        afterPopupVisibleChange={afterVisibleChange}
        popupTransitionName={transitionName}
        popupAnimation={animation}
        defaultPopupVisible={defaultVisible}
        destroyPopupOnHide={destroyTooltipOnHide}
        mouseLeaveDelay={mouseLeaveDelay}
        popupStyle={overlayStyle}
        mouseEnterDelay={mouseEnterDelay}
        {...extraProps}
        onPopupAlign={this.onPopupAlign}
      >
        {children}
      </Trigger>
    );
  }
}

export default Tooltip;
