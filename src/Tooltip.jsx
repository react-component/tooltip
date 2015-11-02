import React, {PropTypes} from 'react';
import {placements} from './placements';
import Trigger from 'rc-trigger';

const Tooltip = React.createClass({
  propTypes: {
    trigger: PropTypes.any,
    children: PropTypes.any,
    defaultVisible: PropTypes.bool,
    visible: PropTypes.bool,
    placement: PropTypes.string,
    transitionName: PropTypes.string,
    animation: PropTypes.any,
    onVisibleChange: PropTypes.func,
    afterVisibleChange: PropTypes.func,
    overlay: PropTypes.node.isRequired,
    overlayStyle: PropTypes.object,
    overlayClassName: PropTypes.string,
    prefixCls: PropTypes.string,
    mouseEnterDelay: PropTypes.number,
    mouseLeaveDelay: PropTypes.number,
    getTooltipContainer: PropTypes.func,
    align: PropTypes.shape({
      offset: PropTypes.array,
      targetOffset: PropTypes.array,
    }),
  },

  getDefaultProps() {
    return {
      prefixCls: 'rc-tooltip',
      mouseEnterDelay: 0,
      mouseLeaveDelay: 0.1,
      align: {},
      placement: 'right',
      trigger: ['hover'],
    };
  },

  getPopupElement() {
    const {overlay, prefixCls} = this.props;
    return ([
      <div className={`${prefixCls}-arrow`} key="arrow"></div>,
      <div className={`${prefixCls}-inner`} key="content">
        {overlay}
      </div>,
    ]);
  },

  getPopupDomNode() {
    return this.refs.trigger.popupDomNode;
  },

  render() {
    const {overlayClassName, trigger,
      mouseEnterDelay, mouseLeaveDelay,
      overlayStyle, prefixCls,
      children, onVisibleChange,
      transitionName, animation,
      placement, align,
      defaultVisible, getTooltipContainer} = this.props;
    return (<Trigger popupClassName={overlayClassName}
                     ref="trigger"
                     prefixCls={prefixCls}
                     popup={this.getPopupElement()}
                     action={trigger}
                     builtinPlacements={placements}
                     popupPlacement={placement}
                     popupAlign={align}
                     getPopupContainer={getTooltipContainer}
                     onPopupVisibleChange={onVisibleChange}
                     popupTransitionName={transitionName}
                     popupAnimation={animation}
                     defaultPopupVisible={defaultVisible}
                     mouseLeaveDelay={mouseLeaveDelay}
                     popupStyle={overlayStyle}
                     mouseEnterDelay={mouseEnterDelay}>
      {children}
    </Trigger>);
  },
});

export default Tooltip;
