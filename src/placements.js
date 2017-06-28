const autoAdjustOverflowEnabled = {
  adjustX: 1,
  adjustY: 1,
};

const autoAdjustOverflowDisabled = {
  adjustX: 0,
  adjustY: 0,
};

const targetOffset = [0, 0];

export function getOverflowOptions(autoAdjustOverflow) {
  if (typeof autoAdjustOverflow === 'boolean') {
    return autoAdjustOverflow ? autoAdjustOverflowEnabled : autoAdjustOverflowDisabled;
  }
  return {
    ...autoAdjustOverflowDisabled,
    ...autoAdjustOverflow,
  };
}

export function getPlacements({ autoAdjustOverflow }) {
  const overflowOptions = getOverflowOptions(autoAdjustOverflow);
  return {
    left: {
      points: ['cr', 'cl'],
      overflow: overflowOptions,
      offset: [-4, 0],
      targetOffset,
    },
    right: {
      points: ['cl', 'cr'],
      overflow: overflowOptions,
      offset: [4, 0],
      targetOffset,
    },
    top: {
      points: ['bc', 'tc'],
      overflow: overflowOptions,
      offset: [0, -4],
      targetOffset,
    },
    bottom: {
      points: ['tc', 'bc'],
      overflow: overflowOptions,
      offset: [0, 4],
      targetOffset,
    },
    topLeft: {
      points: ['bl', 'tl'],
      overflow: overflowOptions,
      offset: [0, -4],
      targetOffset,
    },
    leftTop: {
      points: ['tr', 'tl'],
      overflow: overflowOptions,
      offset: [-4, 0],
      targetOffset,
    },
    topRight: {
      points: ['br', 'tr'],
      overflow: overflowOptions,
      offset: [0, -4],
      targetOffset,
    },
    rightTop: {
      points: ['tl', 'tr'],
      overflow: overflowOptions,
      offset: [4, 0],
      targetOffset,
    },
    bottomRight: {
      points: ['tr', 'br'],
      overflow: overflowOptions,
      offset: [0, 4],
      targetOffset,
    },
    rightBottom: {
      points: ['bl', 'br'],
      overflow: overflowOptions,
      offset: [4, 0],
      targetOffset,
    },
    bottomLeft: {
      points: ['tl', 'bl'],
      overflow: overflowOptions,
      offset: [0, 4],
      targetOffset,
    },
    leftBottom: {
      points: ['br', 'bl'],
      overflow: overflowOptions,
      offset: [-4, 0],
      targetOffset,
    },
  };
}

export default getPlacements;
