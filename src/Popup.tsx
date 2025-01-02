import classNames from 'classnames';
import * as React from 'react';

export interface ContentProps {
  prefixCls?: string;
  children: (() => React.ReactNode) | React.ReactNode;
  id?: string;
  overlayInnerStyle?: React.CSSProperties;
  className?: string;
  style?: React.CSSProperties;
  bodyClassName?: string;
}

export default function Popup(props: ContentProps) {
  const { children, prefixCls, id, overlayInnerStyle: innerStyle, bodyClassName, className, style } =
    props;

  return (
    <>
      <div className={classNames(`${prefixCls}-content`, className)} style={style}>
        <div
          id={id}
          role="tooltip"
          className={classNames(`${prefixCls}-inner`, bodyClassName)}
          style={innerStyle}
        >
          {typeof children === 'function' ? children() : children}
        </div>
      </div>
    </>
  );
}
