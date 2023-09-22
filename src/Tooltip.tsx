import type { ArrowType, TriggerProps, TriggerRef } from '@rc-component/trigger';
import Trigger from '@rc-component/trigger';
import type { ActionType, AlignType, AnimationType } from '@rc-component/trigger/lib/interface';
import * as React from 'react';
import { forwardRef, useImperativeHandle, useRef } from 'react';
import { placements } from './placements';
import Popup from './Popup';

export interface TooltipProps
  extends Pick<TriggerProps, 'onPopupAlign' | 'builtinPlacements' | 'fresh'> {
  trigger?: ActionType | ActionType[];
  defaultVisible?: boolean;
  visible?: boolean;
  placement?: string;
  /** @deprecated Use `motion` instead */
  transitionName?: string;
  /** @deprecated Use `motion` instead */
  animation?: AnimationType;
  /** Config popup motion */
  motion?: TriggerProps['popupMotion'];
  onVisibleChange?: (visible: boolean) => void;
  afterVisibleChange?: (visible: boolean) => void;
  overlay: (() => React.ReactNode) | React.ReactNode;
  overlayStyle?: React.CSSProperties;
  overlayClassName?: string;
  prefixCls?: string;
  mouseEnterDelay?: number;
  mouseLeaveDelay?: number;
  getTooltipContainer?: (node: HTMLElement) => HTMLElement;
  destroyTooltipOnHide?: boolean;
  align?: AlignType;
  showArrow?: boolean | ArrowType;
  arrowContent?: React.ReactNode;
  id?: string;
  children?: React.ReactElement;
  overlayInnerStyle?: React.CSSProperties;
  zIndex?: number;
}

export interface TooltipRef {
  forceAlign: VoidFunction;
}

const Tooltip = (props: TooltipProps, ref: React.Ref<TooltipRef>) => {
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
    motion,
    placement = 'right',
    align = {},
    destroyTooltipOnHide = false,
    defaultVisible,
    getTooltipContainer,
    overlayInnerStyle,
    arrowContent,
    overlay,
    id,
    showArrow = true,
    ...restProps
  } = props;

  const triggerRef = useRef<TriggerRef>(null);
  useImperativeHandle(ref, () => triggerRef.current);

  const extraProps: Partial<TooltipProps & TriggerProps> = { ...restProps };
  if ('visible' in props) {
    extraProps.popupVisible = props.visible;
  }

  const getPopupElement = () => (
    <Popup key="content" prefixCls={prefixCls} id={id} overlayInnerStyle={overlayInnerStyle}>
      {overlay}
    </Popup>
  );

  return (
    <Trigger
      popupClassName={overlayClassName}
      prefixCls={prefixCls}
      popup={getPopupElement}
      action={trigger}
      builtinPlacements={placements}
      popupPlacement={placement}
      ref={triggerRef}
      popupAlign={align}
      getPopupContainer={getTooltipContainer}
      onPopupVisibleChange={onVisibleChange}
      afterPopupVisibleChange={afterVisibleChange}
      popupTransitionName={transitionName}
      popupAnimation={animation}
      popupMotion={motion}
      defaultPopupVisible={defaultVisible}
      autoDestroy={destroyTooltipOnHide}
      mouseLeaveDelay={mouseLeaveDelay}
      popupStyle={overlayStyle}
      mouseEnterDelay={mouseEnterDelay}
      arrow={showArrow}
      {...extraProps}
    >
      {children}
    </Trigger>
  );
};

export default forwardRef(Tooltip);
