import { placements } from './placements';
import type { AlignType } from 'rc-trigger/lib/interface';

type ArrowDirection = 'down' | 'left' | 'up' | 'right';
type ArrowAlign = 'left' | 'right' | 'top' | 'bottom';

function getPlacementFromAlign(align: AlignType) {
  return Object.keys(placements).find((placement) => {
    const [popupAlignPoint, targetAlignPoint] = placements[placement].points;
    return align.points[0] === popupAlignPoint && align.points[1] === targetAlignPoint;
  });
}

export function getArrowDirection(align: AlignType): ArrowDirection | null {
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

  return null;
}

export function getArrowAlign(align: AlignType): ArrowAlign | null {
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

  return null;
}
