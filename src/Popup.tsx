import cls from 'classnames';
import * as React from 'react';
import type { TooltipProps } from './Tooltip';

export interface ContentProps {
  prefixCls?: string;
  children: (() => React.ReactNode) | React.ReactNode;
  id?: string;
  classNames?: TooltipProps['classNames'];
  styles?: TooltipProps['styles'];
}

const Popup: React.FC<ContentProps> = (props) => {
  const { children, prefixCls, id, classNames, styles } = props;

  return (
    <div
      id={id}
      className={cls(`${prefixCls}-body`, classNames?.body)}
      style={styles?.body}
      role="tooltip"
    >
      {typeof children === 'function' ? children() : children}
    </div>
  );
};

export default Popup;
