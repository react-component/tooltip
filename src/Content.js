import React from 'react';
import PropTypes from 'prop-types';

export default class Content extends React.Component {
  static propTypes = {
    prefixCls: PropTypes.string,
    overlay: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.func,
    ]).isRequired,
    id: PropTypes.string,
    trigger: PropTypes.any,
  }

  componentDidUpdate() {
    const { trigger } = this.props;
    if (trigger) {
      trigger.forcePopupAlign();
    }
  }

  render() {
    const { overlay, prefixCls, id } = this.props;
    return (
      <div className={`${prefixCls}-inner`} id={id} role="tooltip">
        {typeof overlay === 'function' ? overlay() : overlay}
      </div>
    );
  }
}
