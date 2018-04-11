import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Trigger from 'rc-trigger';
import { placements } from './placements';

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

  componentDidUpdate() {
    if (this.props.visible) {
      this.trigger.forcePopupAlign();
    }
  }

  getPopupElement = () => {
    const { arrowContent, overlay, prefixCls, id } = this.props;
    return ([
      <div className={`${prefixCls}-arrow`} key="arrow">
        {arrowContent}
      </div>,
      <div className={`${prefixCls}-inner`} key="content" id={id}>
        {typeof overlay === 'function' ? overlay() : overlay}
      </div>,
    ]);
  }

  getPopupDomNode() {
    return this.trigger.getPopupDomNode();
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
    return (<Trigger
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
    >
      {children}
    </Trigger>);
  }
}

export default Tooltip;
