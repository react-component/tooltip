import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Trigger from 'rc-trigger';
import { getPlacements } from './placements';

class Tooltip extends Component {
  static propTypes = {
    trigger: PropTypes.any,
    children: PropTypes.any,
    defaultVisible: PropTypes.bool,
    visible: PropTypes.bool,
    placement: PropTypes.string,
    transitionName: PropTypes.string,
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
    autoAdjustOverflow: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.shape({
        adjustX: PropTypes.oneOf([0, 1]),
        adjustY: PropTypes.oneOf([0, 1]),
      }),
    ]),
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
    autoAdjustOverflow: true,
  };

  getPopupElement = () => {
    const { arrowContent, overlay, prefixCls } = this.props;
    return ([
      <div className={`${prefixCls}-arrow`} key="arrow">
        {arrowContent}
      </div>,
      <div className={`${prefixCls}-inner`} key="content">
        {typeof overlay === 'function' ? overlay() : overlay}
      </div>,
    ]);
  }

  getPopupDomNode() {
    return this.refs.trigger.getPopupDomNode();
  }

  render() {
    const {
      overlayClassName, trigger,
      mouseEnterDelay, mouseLeaveDelay,
      overlayStyle, prefixCls,
      children, onVisibleChange,
      transitionName, animation,
      placement, align,
      destroyTooltipOnHide,
      defaultVisible, getTooltipContainer,
      autoAdjustOverflow,
      ...restProps,
    } = this.props;
    const extraProps = { ...restProps };
    const builtinPlacements = getPlacements({ autoAdjustOverflow });
    if ('visible' in this.props) {
      extraProps.popupVisible = this.props.visible;
    }
    return (<Trigger
      popupClassName={overlayClassName}
      ref="trigger"
      prefixCls={prefixCls}
      popup={this.getPopupElement}
      action={trigger}
      builtinPlacements={builtinPlacements}
      popupPlacement={placement}
      popupAlign={align}
      getPopupContainer={getTooltipContainer}
      onPopupVisibleChange={onVisibleChange}
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
