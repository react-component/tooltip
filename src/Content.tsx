import * as React from 'react';

export interface ContentProps {
  prefixCls?: string;
  overlay: (() => React.ReactNode) | React.ReactNode;
  id: string;
  overlayInnerStyle?: React.CSSProperties;
}

const Content = (props: ContentProps) => {
  const { overlay, prefixCls, id, overlayInnerStyle } = props;

  return (
    <div className={`${prefixCls}-inner`} id={id} role="tooltip" style={overlayInnerStyle}>
      {typeof overlay === 'function' ? overlay() : overlay}
    </div>
  );
};

export default Content;
