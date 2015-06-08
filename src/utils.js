'use strict';

module.exports = {
  getToolTipClassByPlacement(prefixCls, placement) {
    if (typeof placement === 'string') {
      return `${prefixCls} ${prefixCls}-placement-${placement}`;
    } else {
      var offset = placement.offset;
      var offsetClass = '';
      if (offset && offset.length) {
        offsetClass = `${prefixCls}-placement-offset-x-${offset[0]} ${prefixCls}-placement-offset-y-${offset[1]}`;
      }
      var points = placement.points;
      return `${prefixCls} ${offsetClass} ${prefixCls}-placement-points-${points[0]}-${points[1]}`;
    }
  }
};
