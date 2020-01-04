import React from 'react';

export interface ContentProps {
  prefixCls?: string;
  overlay: (() => React.ReactNode) | React.ReactNode;
  id: string;
}

const Content = (props: ContentProps) => {
  const { overlay, prefixCls, id } = props;

  return (
    <div className={`${prefixCls}-inner`} id={id} role="tooltip">
      {typeof overlay === 'function' ? overlay() : overlay}
    </div>
  );
};

export default Content;
