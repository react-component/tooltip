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
    innerStyle: PropTypes.object,
  }

  componentDidUpdate() {
    const { trigger } = this.props;
    if (trigger) {
      trigger.forcePopupAlign();
    }
  }

  render() {
    const { overlay, prefixCls, id, innerStyle } = this.props;
    return (
      <div className={`${prefixCls}-inner`} id={id} role="tooltip" style={innerStyle || {}}>
        {typeof overlay === 'function' ? overlay() : overlay}
      </div>
    );
  }
}
