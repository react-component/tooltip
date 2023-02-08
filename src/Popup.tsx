import * as React from 'react';

export interface ContentProps {
  prefixCls?: string;
  children: (() => React.ReactNode) | React.ReactNode;
  id?: string;
  overlayInnerStyle?: React.CSSProperties;
  className?: string;
  style?: React.CSSProperties;
}

export default function Popup(props: ContentProps) {
  const { children, prefixCls, id, overlayInnerStyle, className, style } = props;

  return (
    <div className={classNames(`${prefixCls}-content`, className)} style={style}>
      <div className={`${prefixCls}-inner`} id={id} role="tooltip" style={overlayInnerStyle}>
        {typeof children === 'function' ? children() : children}
      </div>
    </div>
  );
}
