import * as React from 'react';
import { useState, useRef, useImperativeHandle, forwardRef } from 'react';
import Trigger from 'rc-trigger';
import positions from 'positions';
import { getArrowDirection, getArrowAlign } from './util';

import type { TriggerProps } from 'rc-trigger';
import type { AlignType, AnimationType, ActionType } from 'rc-trigger/lib/interface';
import { placements } from './placements';
import Content from './Content';

interface ArrowStyle {
  left?: string,
  top?: string,
  marginLeft?: number,
  marginRight?: number,
  marginTop?: number,
  marginBottom?: number,
}

const pointNamesMap = {
  tc: 'top center',
  bc: 'bottom center',
  cl: 'center left',
  cr: 'center right',
  tl: 'top left',
  tr: 'top right',
  bl: 'bottom left',
  br: 'bottom right',
};

const getArrowStyle = (position, align: AlignType) => {
  const arrowDirection = getArrowDirection(align);
  const arrowAlign = getArrowAlign(align);

  const style: ArrowStyle = {};
  if (arrowDirection === 'up' || arrowDirection === 'down') {
    style.left = `${position.left + align.offset[0]}px`;
  }
  if (arrowDirection === 'left' || arrowDirection === 'right') {
    style.top = `${position.top + align.offset[1]}px`;
  }
  if (arrowAlign === 'left') {
    style.marginLeft = 5;
  }
  if (arrowAlign === 'right') {
    style.marginRight = 5;
  }
  if (arrowAlign === 'top') {
    style.marginTop = 5;
  }
  if (arrowAlign === 'bottom') {
    style.marginBottom = 5;
  }

  return style;
};

export interface TooltipProps extends Pick<TriggerProps, 'builtinPlacements'> {
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
  onPopupAlign?: (popupNode: HTMLElement, align: AlignType) => void;
  afterVisibleChange?: (visible: boolean) => void;
  overlay: (() => React.ReactNode) | React.ReactNode;
  overlayStyle?: React.CSSProperties;
  overlayClassName?: string;
  prefixCls?: string;
  mouseEnterDelay?: number;
  mouseLeaveDelay?: number;
  getTooltipContainer?: (node: HTMLElement) => HTMLElement;
  destroyTooltipOnHide?:
    | boolean
    | {
        keepParent?: boolean;
      };
  align?: AlignType;
  arrowContent?: React.ReactNode;
  id?: string;
  children?: React.ReactElement;
  popupVisible?: boolean;
  overlayInnerStyle?: React.CSSProperties;
  zIndex?: number;
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
    onPopupAlign,
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
    arrowContent = null,
    ...restProps
  } = props;

  const [arrowStyle, setArrowStyle] = useState(null);

  const domRef = useRef(null);
  useImperativeHandle(ref, () => domRef.current);

  const arrowRef = useRef(null);

  const extraProps = { ...restProps };
  if ('visible' in props) {
    extraProps.popupVisible = props.visible;
  }

  const getPopupElement = () => {
    const { overlay, id } = props;

    return [
      <div ref={arrowRef} className={`${prefixCls}-arrow`} key="arrow" style={arrowStyle}>
        {arrowContent}
      </div>,
      <Content
        key="content"
        prefixCls={prefixCls}
        id={id}
        overlay={overlay}
        overlayInnerStyle={overlayInnerStyle}
      />,
    ];
  };

  const adjustArrow = (arrowAlign: AlignType) => {
    const arrowPlacement = pointNamesMap[arrowAlign.points[0]];
    const targetPlacement = pointNamesMap[arrowAlign.points[1]];

    const position = positions(
      arrowRef.current,
      arrowPlacement,
      domRef.current.getRootDomNode(),
      targetPlacement,
    );

    const newArrowStyle = getArrowStyle(position, arrowAlign);
    if (!arrowStyle
      || newArrowStyle.top !== arrowStyle.top
      || newArrowStyle.left !== arrowStyle.left
    ) {
      setArrowStyle(newArrowStyle);
    }
  };

  const handlePopupAlign = (popupNode: HTMLElement, popupAlign: AlignType) => {
    adjustArrow(popupAlign);

    if (onPopupAlign) {
      onPopupAlign(popupNode, popupAlign);
    }
  };

  let destroyTooltip = false;
  let autoDestroy = false;
  if (typeof destroyTooltipOnHide === 'boolean') {
    destroyTooltip = destroyTooltipOnHide;
  } else if (destroyTooltipOnHide && typeof destroyTooltipOnHide === 'object') {
    const { keepParent } = destroyTooltipOnHide;
    destroyTooltip = keepParent === true;
    autoDestroy = keepParent === false;
  }

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
      onPopupAlign={handlePopupAlign}
      afterPopupVisibleChange={afterVisibleChange}
      popupTransitionName={transitionName}
      popupAnimation={animation}
      popupMotion={motion}
      defaultPopupVisible={defaultVisible}
      destroyPopupOnHide={destroyTooltip}
      autoDestroy={autoDestroy}
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
