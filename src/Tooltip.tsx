import React, { useRef, useImperativeHandle, forwardRef } from 'react';
import Trigger from 'rc-trigger';
import { AlignType, AnimationType } from 'rc-trigger/lib/interface';
import { placements } from './placements';
import Content from './Content';

export interface TooltipProps {
  trigger?: string[];
  defaultVisible?: boolean;
  visible?: boolean;
  placement?: string;
  transitionName?: string;
  animation?: AnimationType;
  onVisibleChange?: () => void;
  afterVisibleChange?: () => void;
  overlay: (() => React.ReactElement) | React.ReactElement;
  overlayStyle?: React.CSSProperties;
  overlayClassName?: string;
  prefixCls?: string;
  mouseEnterDelay?: number;
  mouseLeaveDelay?: number;
  getTooltipContainer?: (node: HTMLElement) => HTMLElement;
  destroyTooltipOnHide?: boolean;
  align?: AlignType;
  arrowContent?: React.ReactElement;
  id?: string;
  children?: React.ReactElement;
  popupVisible?: boolean;
}

const Tooltip = (props: TooltipProps, ref) => {
  const {
    overlayClassName,
    trigger = ['hover'],
    mouseEnterDelay = 0,
    mouseLeaveDelay = 0.1,
    overlayStyle,
    prefixCls = 'rc-tooltip',
    children,
    onVisibleChange,
    afterVisibleChange,
    transitionName,
    animation,
    placement = 'right',
    align = {},
    destroyTooltipOnHide = false,
    defaultVisible,
    getTooltipContainer,
    ...restProps
  } = props;

  const domRef = useRef(null);
  useImperativeHandle(ref, () => domRef.current);

  const extraProps = { ...restProps };
  if ('visible' in props) {
    extraProps.popupVisible = props.visible;
  }

  const getPopupElement = () => {
    const { arrowContent = null, overlay, id } = props;
    return [
      <div className={`${prefixCls}-arrow`} key="arrow">
        {arrowContent}
      </div>,
      <Content key="content" prefixCls={prefixCls} id={id} overlay={overlay} />,
    ];
  };

  return (
    <Trigger
      popupClassName={overlayClassName}
      prefixCls={prefixCls}
      popup={getPopupElement}
      action={trigger}
      builtinPlacements={placements}
      popupPlacement={placement}
      ref={domRef}
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

export default forwardRef(Tooltip);
