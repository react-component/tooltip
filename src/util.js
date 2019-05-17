import { placements } from './placements';

function getPlacementFromAlign(align) {
  for (const placement of Object.keys(placements)) {
    const [popupAlignPoint, targetAlignPoint] = placements[placement].points;
    if (align.points[0] === popupAlignPoint && align.points[1] === targetAlignPoint) {
      return placement;
    }
  }
}

export function getArrowDirection(align) {
  const placement = getPlacementFromAlign(align);

  if (['top', 'topLeft', 'topRight'].includes(placement)) {
    return 'down';
  }

  if (['right', 'rightTop', 'rightBottom'].includes(placement)) {
    return 'left';
  }

  if (['bottom', 'bottomLeft', 'bottomRight'].includes(placement)) {
    return 'up';
  }

  if (['left', 'leftTop', 'leftBottom'].includes(placement)) {
    return 'right';
  }
}

export function getArrowAlign(align) {
  const placement = getPlacementFromAlign(align);

  if (['topLeft', 'bottomLeft'].includes(placement)) {
    return 'left';
  }

  if (['topRight', 'bottomRight'].includes(placement)) {
    return 'right';
  }

  if (['leftTop', 'rightTop'].includes(placement)) {
    return 'top';
  }

  if (['leftBottom', 'rightBottom'].includes(placement)) {
    return 'bottom';
  }
}
