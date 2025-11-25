import type { ArrowType, TriggerProps, TriggerRef } from '@rc-component/trigger';
import Trigger from '@rc-component/trigger';
import type { ActionType, AlignType } from '@rc-component/trigger/lib/interface';
import useId from '@rc-component/util/lib/hooks/useId';
import { clsx } from 'clsx';
import * as React from 'react';
import { useImperativeHandle, useRef } from 'react';
import { placements } from './placements';
import Popup from './Popup';

export type SemanticName = 'root' | 'arrow' | 'container' | 'uniqueContainer';

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
    trigger = ['hover','focus'],
    mouseEnterDelay = 0,
    mouseLeaveDelay = 0.1,
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
    arrowContent,
    overlay,
    id,
    showArrow = true,
    classNames,
    styles,
    forceRender,
    ...restProps
  } = props;

  const mergedId = useId(id);
  const triggerRef = useRef<TriggerRef>(null);

  useImperativeHandle(ref, () => triggerRef.current);

  const extraProps: Partial<TooltipProps & TriggerProps> = { ...restProps };

  if ('visible' in props) {
    extraProps.popupVisible = props.visible;
  }

  const isControlled = 'visible' in props;
  const mergedVisible = props.visible;
  const [popupMounted, setPopupMounted] = React.useState(() => {
    if (forceRender) {
      return true;
    }
    if (isControlled) {
      return mergedVisible;
    }
    return defaultVisible;
  });

  const updatePopupMounted = React.useCallback(
    (nextVisible: boolean) => {
      setPopupMounted((prev) => {
        if (nextVisible) {
          return true;
        }

        if (destroyOnHidden) {
          return false;
        }

        return prev;
      });
    },
    [forceRender, destroyOnHidden],
  );

  const handleVisibleChange = (nextVisible: boolean) => {
    updatePopupMounted(nextVisible);
    onVisibleChange?.(nextVisible);
  };

  React.useEffect(() => {
    if (forceRender) {
      setPopupMounted(true);
      return;
    }

    if (isControlled) {
      updatePopupMounted(mergedVisible);
    }
  }, [forceRender, isControlled, mergedVisible, updatePopupMounted]);

  // ========================= Arrow ==========================
  // Process arrow configuration
  const mergedArrow = React.useMemo(() => {
    if (!showArrow) {
      return false;
    }

    // Convert true to object for unified processing
    const arrowConfig = showArrow === true ? {} : showArrow;

    // Apply semantic styles with unified logic
    return {
      ...arrowConfig,
      className: clsx(arrowConfig.className, classNames?.arrow),
      style: { ...arrowConfig.style, ...styles?.arrow },
      content: arrowConfig.content ?? arrowContent,
    };
  }, [showArrow, classNames?.arrow, styles?.arrow, arrowContent]);

  // ======================== Children ========================
  const getChildren = () => {
    const child = React.Children.only(children);
    const originalProps = child?.props || {};
    const childProps = {
      ...originalProps,
      'aria-describedby': overlay && popupMounted ? mergedId : null,
    };
    return React.cloneElement<any>(children, childProps) as any;
  };

  // ========================= Render =========================
  return (
    <Trigger
      popupClassName={classNames?.root}
      prefixCls={prefixCls}
      popup={
        <Popup
          key="content"
          prefixCls={prefixCls}
          id={mergedId}
          classNames={classNames}
          styles={styles}
        >
          {overlay}
        </Popup>
      }
      action={trigger}
      builtinPlacements={placements}
      popupPlacement={placement}
      ref={triggerRef}
      popupAlign={align}
      getPopupContainer={getTooltipContainer}
      onOpenChange={handleVisibleChange}
      afterOpenChange={afterVisibleChange}
      popupMotion={motion}
      defaultPopupVisible={defaultVisible}
      forceRender={forceRender}
      autoDestroy={destroyOnHidden}
      mouseLeaveDelay={mouseLeaveDelay}
      popupStyle={styles?.root}
      mouseEnterDelay={mouseEnterDelay}
      arrow={mergedArrow}
      uniqueContainerClassName={classNames?.uniqueContainer}
      uniqueContainerStyle={styles?.uniqueContainer}
      {...extraProps}
    >
      {getChildren()}
    </Trigger>
  );
});

export default Tooltip;
