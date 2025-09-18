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

const Popup: React.FC<ContentProps> = (props) => {
  const { children, prefixCls, id, className, style, bodyClassName, overlayInnerStyle } = props;

  return (
    <div
      id={id}
      className={classNames(`${prefixCls}-body`, className, bodyClassName)}
      style={{ ...overlayInnerStyle, ...style }}
      role="tooltip"
    >
      {typeof children === 'function' ? children() : children}
    </div>
  );
};

export default Popup;
