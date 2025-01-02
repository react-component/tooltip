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

const getTextContent = (node: (() => React.ReactNode) | React.ReactNode): string => {
  if (!node) {
    return '';
  }

  const resolvedNode = typeof node === 'function' ? node() : node;

  if (typeof resolvedNode === 'string' || typeof resolvedNode === 'number') {
    return String(resolvedNode);
  }

  if (Array.isArray(resolvedNode)) {
    return resolvedNode.map(getTextContent).join(' ');
  }

  if (React.isValidElement(resolvedNode)) {
    return getTextContent(resolvedNode.props.children);
  }
};

export default function Popup(props: ContentProps) {
  const { children, prefixCls, id, overlayInnerStyle: innerStyle, bodyClassName, className, style } =
    props;

  const tooltipText = getTextContent(children);

  return (
    <>
      <div className={classNames(`${prefixCls}-content`, className)} style={style}>
        <div
          className={classNames(`${prefixCls}-inner`, bodyClassName)}
          style={innerStyle}
        >
          {typeof children === 'function' ? children() : children}
        </div>
      </div>
      {tooltipText && (
        <div
          id={id}
          role="tooltip"
          style={{ width: 0, height: 0, position: 'absolute', overflow: 'hidden', opacity: 0 }}
        >
          {tooltipText}
        </div>
      )}
    </>
  );
}
