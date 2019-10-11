import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import Trigger from 'rc-trigger';
import { placements } from './placements';
import Content from './Content';

export interface TooltipProps {
  trigger?: string[];
  defaultVisible?: boolean;
  visible?: boolean;
  placement?: string;
  transitionName?: string | Object;
  animation?: any;
  onVisibleChange?: () => void;
  afterVisibleChange?: () => void;
  overlay: () => React.ReactElement | React.ReactElement;
  overlayStyle?: React.CSSProperties;
  overlayClassName?: string;
  prefixCls?: string;
  mouseEnterDelay?: number;
  mouseLeaveDelay?: number;
  getTooltipContainer?: Function;
  destroyTooltipOnHide?: boolean;
  align?: Object;
  arrowContent?: any;
  id?: string;
  children?: React.ReactChildren;
  popupVisible?: boolean;
}

const Tooltip = (props: TooltipProps) => {
  const {
    overlayClassName,
    trigger,
    mouseEnterDelay,
    mouseLeaveDelay,
    overlayStyle,
    prefixCls,
    children,
    onVisibleChange,
    afterVisibleChange,
    transitionName,
    animation,
    placement,
    align,
    destroyTooltipOnHide,
    defaultVisible,
    getTooltipContainer,
    ...restProps
  } = props;

  const triggerDomRef = useRef(null);

  const extraProps = { ...restProps };
  if ('visible' in props) {
    extraProps.popupVisible = props.visible;
  }

  const getPopupElement = () => {
    const { arrowContent, overlay, id } = props;
    return [
      <div className={`${prefixCls}-arrow`} key="arrow">
        {arrowContent}
      </div>,
      <Content
        key="content"
        trigger={triggerDomRef.current}
        prefixCls={prefixCls}
        id={id}
        overlay={overlay}
      />,
    ];
  };

  return (
    <Trigger
      popupClassName={overlayClassName}
      ref={triggerDomRef}
      prefixCls={prefixCls}
      popup={getPopupElement}
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
    </Trigger>
  );
};

Tooltip.propTypes = {
  trigger: PropTypes.any,
  children: PropTypes.any,
  defaultVisible: PropTypes.bool,
  visible: PropTypes.bool,
  placement: PropTypes.string,
  transitionName: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  animation: PropTypes.any,
  onVisibleChange: PropTypes.func,
  afterVisibleChange: PropTypes.func,
  overlay: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
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

Tooltip.defaultProps = {
  prefixCls: 'rc-tooltip',
  mouseEnterDelay: 0,
  destroyTooltipOnHide: false,
  mouseLeaveDelay: 0.1,
  align: {},
  placement: 'right',
  trigger: ['hover'],
  arrowContent: null,
};

export default Tooltip;
