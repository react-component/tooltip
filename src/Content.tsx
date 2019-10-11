import React from 'react';
import PropTypes from 'prop-types';

export interface ContentProps {
  prefixCls?: string;
  overlay: (() => React.ReactElement) | React.ReactElement;
  id: string;
  trigger: any;
}

const Content = (props: ContentProps) => {
  const { overlay, prefixCls, id, trigger } = props;

  if (trigger) {
    trigger.forcePopupAlign();
  }

  return (
    <div className={`${prefixCls}-inner`} id={id} role="tooltip">
      {typeof overlay === 'function' ? overlay() : overlay}
    </div>
  );
};

Content.propTypes = {
  prefixCls: PropTypes.string,
  overlay: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
  id: PropTypes.string,
  trigger: PropTypes.any,
};

export default Content;
