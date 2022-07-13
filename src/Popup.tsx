import * as React from 'react';
import classNames from 'classnames';

export interface ContentProps {
  prefixCls?: string;
  children: (() => React.ReactNode) | React.ReactNode;
  id?: string;
  overlayInnerStyle?: React.CSSProperties;
  arrowContent?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export default function Popup(props: ContentProps) {
  const { arrowContent, children, prefixCls, id, overlayInnerStyle, className, style } = props;

  let content = (
    <>
      <div className={`${prefixCls}-arrow`} key="arrow">
        {arrowContent}
      </div>
      <div className={`${prefixCls}-inner`} id={id} role="tooltip" style={overlayInnerStyle}>
        {typeof children === 'function' ? children() : children}
      </div>
    </>
  );

  if (className || style) {
    content = (
      <div className={classNames(prefixCls, className)} style={style}>
        {content}
      </div>
    );
  }

  return content;
}
