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
  const {
    children,
    prefixCls,
    id,
    overlayInnerStyle: innerStyle,
    bodyClassName,
    className,
    style,
  } = props;

  return (
    <div className={classNames(`${prefixCls}-content`, className)} style={style}>
      <div
        className={classNames(`${prefixCls}-inner`, bodyClassName)}
        id={id}
        role="tooltip"
        style={innerStyle}
      >
        {typeof children === 'function' ? children() : children}
      </div>
    </div>
  );
};

export default Popup;
