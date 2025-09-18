import type { ArrowType, TriggerProps, TriggerRef } from '@rc-component/trigger';
import Trigger from '@rc-component/trigger';
import type { ActionType, AlignType } from '@rc-component/trigger/lib/interface';
import useId from '@rc-component/util/lib/hooks/useId';
import classNames from 'classnames';
import * as React from 'react';
import { useImperativeHandle, useRef } from 'react';
import { placements } from './placements';
import Popup from './Popup';

export type SemanticName = 'root' | 'arrow' | 'body';

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
  // Style
  classNames?: Partial<Record<SemanticName, string>>;
  styles?: Partial<Record<SemanticName, React.CSSProperties>>;

  /** Config popup motion */
  motion?: TriggerProps['popupMotion'];

  /** @deprecated Please use `styles={{ root: {} }}` */
  overlayStyle?: React.CSSProperties;
  /** @deprecated Please use `classNames={{ root: '' }}` */
  overlayClassName?: string;
  /** @deprecated Please use `styles={{ body: {} }}` */
  overlayInnerStyle?: React.CSSProperties;

  // Rest
  trigger?: ActionType | ActionType[];
  defaultVisible?: boolean;
  visible?: boolean;
  placement?: string;

  onVisibleChange?: (visible: boolean) => void;
  afterVisibleChange?: (visible: boolean) => void;
  overlay: (() => React.ReactNode) | React.ReactNode;

  getTooltipContainer?: (node: HTMLElement) => HTMLElement;
  destroyOnHidden?: boolean;
  align?: AlignType;
  showArrow?: boolean | ArrowType;
  arrowContent?: React.ReactNode;
  id?: string;

  zIndex?: number;

  /**
   * Configures Tooltip to reuse the background for transition usage.
   * This is an experimental API and may not be stable.
   */
  unique?: TriggerProps['unique'];
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
      overlayInnerStyle={overlayInnerStyle}
      style={tooltipStyles?.body}
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

  // Process arrow configuration
  const getArrowConfig = () => {
    if (!showArrow) {
      return false;
    }

    // Convert true to object for unified processing
    const arrowConfig = showArrow === true ? {} : showArrow;

    // Apply semantic styles with unified logic
    return {
      ...arrowConfig,
      className: classNames(arrowConfig.className, tooltipClassNames?.arrow),
      content: arrowConfig.content || arrowContent,
    };
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
      arrow={getArrowConfig()}
      {...extraProps}
    >
      {getChildren()}
    </Trigger>
  );
});

export default Tooltip;
