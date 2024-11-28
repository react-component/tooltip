import classNames from 'classnames';
import * as React from 'react';

export interface ContentProps {
  prefixCls?: string;
  children: (() => React.ReactNode) | React.ReactNode;
  id?: string;
  overlayInnerStyle?: React.CSSProperties;
  className?: string;
  style?: React.CSSProperties;
  overlayInnerClassName?: string;
}

export default function Popup(props: ContentProps) {
  const { children, prefixCls, id, overlayInnerStyle, overlayInnerClassName, className, style } =
    props;

  return (
    <div className={classNames(`${prefixCls}-content`, className)} style={style}>
      <div
        className={classNames(`${prefixCls}-inner`, overlayInnerClassName)}
        id={id}
        role="tooltip"
        style={overlayInnerStyle}
      >
        {typeof children === 'function' ? children() : children}
      </div>
    </div>
  );
}
