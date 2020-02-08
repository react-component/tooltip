import React, { useRef, useImperativeHandle, forwardRef } from 'react';
import Trigger, { TriggerProps } from 'rc-trigger';
import { AlignType, AnimationType, ActionType } from 'rc-trigger/lib/interface';
import { placements } from './placements';
import Content from './Content';

/**
 * Where to place the tooltop. One of
 * 'left' |'right' |'top' |'bottom' | 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';
 */
type Placement =
  | 'left'
  | 'right'
  | 'top'
  | 'bottom'
  | 'topLeft'
  | 'topRight'
  | 'bottomLeft'
  | 'bottomRight';

export interface TooltipProps extends Pick<TriggerProps, 'onPopupAlign' | 'builtinPlacements'> {
  /**
   * Call after visible is changed
   */
  afterVisibleChange?: () => void;
  /**
   * value will be merged into placement's config
   */
  align?: AlignType;

  /**
   *
   */
  animation?: AnimationType;

  /**
   * Arrow content, a react component
   * @default null
   */
  arrowContent?: React.ReactElement;

  children?: React.ReactElement;

  /**
   * Whether tooltip is visible initially
   * @efaults false
   */
  defaultVisible?: boolean;

  /**
   * Whether destroy tooltip when tooltip is hidden
   * @default false
   */
  destroyTooltipOnHide?: boolean;

  /**
   * Function returning html node which will act as tooltip container.
   * By default the tooltip attaches to the body.
   * If you want to change the container, simply return a new element.
   */
  getTooltipContainer?: (node: HTMLElement) => HTMLElement;

  /**
   * Id which gets attached to the tooltip content.
   * Can be used with aria-describedby to achieve Screenreader-Support.
   */
  id?: string;

  /**
   * Delay time to show when mouse enter.unit: s.
   * @default 0
   */
  mouseEnterDelay?: number;

  /**
   * Delay time to hide when mouse leave.unit: s.
   * @default 0.1
   */
  mouseLeaveDelay?: number;

  /**
   * Call when visible is changed
   */
  onVisibleChange?: (visible: boolean) => void;

  /**
   * React component to render in the popup
   */
  overlay: (() => React.ReactNode) | React.ReactNode;

  /**
   * Additional className added to popup overlay
   */
  overlayClassName?: string;

  /**
   * Additional style of overlay node
   */
  overlayStyle?: React.CSSProperties;

  /**
   * Where to place the tooltop. One of
   * 'left' |'right' |'top' |'bottom' | 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';
   */
  placement?: Placement;

  /**
   *
   */
  popupVisible?: boolean;

  /**
   * prefix class name.
   * @default "rc-tooltip"
   */
  prefixCls?: string;

  /**
   * same as https://github.com/react-component/animate
   */
  transitionName?: string;

  /**
   * Which actions cause tooltip shown. enum of 'hover','click','focus'
   */
  trigger?: ActionType;

  /**
   * call when visible is changed
   */
  visible?: boolean;
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
