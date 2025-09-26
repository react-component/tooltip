import cls from 'classnames';
import * as React from 'react';
import type { TooltipProps } from './Tooltip';

export interface ContentProps {
  prefixCls?: string;
  children: (() => React.ReactNode) | React.ReactNode;
  id?: string;
  classNames?: TooltipProps['classNames'];
  styles?: TooltipProps['styles'];
  className?: string;
  style?: React.CSSProperties;
}

const Popup: React.FC<ContentProps> = (props) => {
  const { children, prefixCls, id, classNames, styles, className, style } = props;

  return (
    <div
      id={id}
      className={cls(`${prefixCls}-container`, classNames?.container, className)}
      style={{ ...styles?.container, ...style }}
      role="tooltip"
    >
      {typeof children === 'function' ? children() : children}
    </div>
  );
};

export default Popup;
