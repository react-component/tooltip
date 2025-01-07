import type { ArrowType, TriggerProps, TriggerRef } from '@rc-component/trigger';
import Trigger from '@rc-component/trigger';
import type { ActionType, AlignType, AnimationType } from '@rc-component/trigger/lib/interface';
import classNames from 'classnames';
import * as React from 'react';
import { forwardRef, useImperativeHandle, useRef } from 'react';
import { placements } from './placements';
import Popup from './Popup';
import useId from 'rc-util/lib/hooks/useId';

export interface TooltipProps
  extends Pick<
    TriggerProps,
    | 'onPopupAlign'
    | 'builtinPlacements'
    | 'fresh'
    | 'children'
    | 'mouseLeaveDelay'
    | 'mouseEnterDelay'
    | 'prefixCls'
    | 'forceRender'
    | 'popupVisible'
  > {
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
  /** @deprecated Please use `styles={{ root: {} }}` */
  overlayStyle?: React.CSSProperties;
  /** @deprecated Please use `classNames={{ root: {} }}` */
  overlayClassName?: string;
  getTooltipContainer?: (node: HTMLElement) => HTMLElement;
  destroyTooltipOnHide?: boolean;
  align?: AlignType;
  showArrow?: boolean | ArrowType;
  arrowContent?: React.ReactNode;
  id?: string;
  /** @deprecated Please use `styles={{ body: {} }}` */
  overlayInnerStyle?: React.CSSProperties;
  zIndex?: number;
  styles?: TooltipStyles;
  classNames?: TooltipClassNames;
}

export interface TooltipStyles {
  root?: React.CSSProperties;
  body?: React.CSSProperties;
}

export interface TooltipClassNames {
  root?: string;
  body?: string;
}

export interface TooltipRef extends TriggerRef { }

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
    classNames: tooltipClassNames,
    styles: tooltipStyles,
    ...restProps
  } = props;

  const mergedId = useId(id);
  const triggerRef = useRef<TriggerRef>(null);

  useImperativeHandle(ref, () => triggerRef.current);

  const extraProps: Partial<TooltipProps & TriggerProps> = { ...restProps };
  if ('visible' in props) {
    extraProps.popupVisible = props.visible;
  }

  const getPopupElement = () => (
    <Popup
      key="content"
      prefixCls={prefixCls}
      id={mergedId}
      bodyClassName={tooltipClassNames?.body}
      overlayInnerStyle={{ ...overlayInnerStyle, ...tooltipStyles?.body }}
    >
      {overlay}
    </Popup>
  );

  const getChildren = () => {
    const child = React.Children.only(children);
    const originalProps = child?.props || {};

    const childProps = {
      ...originalProps,
      'aria-describedby': overlay ? mergedId : null,
    };

    return React.cloneElement(children, childProps);
  };

  return (
    <Trigger
      popupClassName={classNames(overlayClassName, tooltipClassNames?.root)}
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
      popupStyle={{ ...overlayStyle, ...tooltipStyles?.root }}
      mouseEnterDelay={mouseEnterDelay}
      arrow={showArrow}
      {...extraProps}
    >
      {getChildren()}
    </Trigger>
  );
};

export default forwardRef(Tooltip);
