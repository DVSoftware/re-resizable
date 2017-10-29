import browserPrefix, { browserPrefixToKey } from './getPrefix';

export function createCSSTransform({ x, y, degree }: { x: number, y: number, degree: number }): Object {
  // Replace unitless items with px
  let cssStyle = '';
  if (degree) {
    cssStyle = 'translate(' + x + 'px,' + y + 'px) rotate(' + degree + 'deg)';
  } else if (x || y) {
    cssStyle = 'translate(' + x + 'px,' + y + 'px)';
  }
  return { [browserPrefixToKey('transform', browserPrefix)]: cssStyle };
}