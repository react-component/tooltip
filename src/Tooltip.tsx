import type { ArrowType, TriggerProps, TriggerRef } from '@rc-component/trigger';
import Trigger from '@rc-component/trigger';
import type { ActionType, AlignType } from '@rc-component/trigger/lib/interface';
import useId from '@rc-component/util/lib/hooks/useId';
import classNames from 'classnames';
import * as React from 'react';
import { useImperativeHandle, useRef } from 'react';
import { placements } from './placements';
import Popup from './Popup';

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
  /** Config popup motion */
  motion?: TriggerProps['popupMotion'];
  onVisibleChange?: (visible: boolean) => void;
  afterVisibleChange?: (visible: boolean) => void;
  overlay: (() => React.ReactNode) | React.ReactNode;
  /** @deprecated Please use `styles={{ root: {} }}` */
  overlayStyle?: React.CSSProperties;
  /** @deprecated Please use `classNames={{ root: '' }}` */
  overlayClassName?: string;
  getTooltipContainer?: (node: HTMLElement) => HTMLElement;
  destroyOnHidden?: boolean;
  align?: AlignType;
  showArrow?: boolean | ArrowType;
  arrowContent?: React.ReactNode;
  id?: string;
  /** @deprecated Please use `styles={{ body: {} }}` */
  overlayInnerStyle?: React.CSSProperties;
  zIndex?: number;
  styles?: TooltipStyles;
  classNames?: TooltipClassNames;
  /**
   * Configures Tooltip to reuse the background for transition usage.
   * This is an experimental API and may not be stable.
   */
  unique?: TriggerProps['unique'];
}

export interface TooltipStyles {
  root?: React.CSSProperties;
  body?: React.CSSProperties;
}

export interface TooltipClassNames {
  root?: string;
  body?: string;
}

export interface TooltipRef extends TriggerRef {}

const Tooltip = React.forwardRef<TooltipRef, TooltipProps>((props, ref) => {
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
    motion,
    placement = 'right',
    align = {},
    destroyOnHidden = false,
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
    return React.cloneElement<any>(children, childProps) as any;
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
      onOpenChange={onVisibleChange}
      afterOpenChange={afterVisibleChange}
      popupMotion={motion}
      defaultPopupVisible={defaultVisible}
      autoDestroy={destroyOnHidden}
      mouseLeaveDelay={mouseLeaveDelay}
      popupStyle={{ ...overlayStyle, ...tooltipStyles?.root }}
      mouseEnterDelay={mouseEnterDelay}
      arrow={showArrow}
      {...extraProps}
    >
      {getChildren()}
    </Trigger>
  );
});

export default Tooltip;
