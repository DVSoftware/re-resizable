/* @flow */

import * as React from 'react';

const styles = {
  base: {
    position: 'absolute',
  },
  top: {
    width: '100%',
    height: '10px',
    top: '-5px',
    left: '0px',
    cursor: 'row-resize',
  },
  right: {
    width: '10px',
    height: '100%',
    top: '0px',
    right: '-5px',
    cursor: 'col-resize',
  },
  bottom: {
    width: '100%',
    height: '10px',
    bottom: '-5px',
    left: '0px',
    cursor: 'row-resize',
  },
  left: {
    width: '10px',
    height: '100%',
    top: '0px',
    left: '-5px',
    cursor: 'col-resize',
  },

  topRight: {
    width: '20px',
    height: '20px',
    position: 'absolute',
    right: '-10px',
    top: '-10px',
    cursor: 'ne-resize',
  },
  bottomRight: {
    width: '20px',
    height: '20px',
    position: 'absolute',
    right: '-10px',
    bottom: '-10px',
    cursor: 'se-resize',
  },
  bottomLeft: {
    width: '20px',
    height: '20px',
    position: 'absolute',
    left: '-10px',
    bottom: '-10px',
    cursor: 'sw-resize',
  },
  topLeft: {
    width: '20px',
    height: '20px',
    position: 'absolute',
    left: '-10px',
    top: '-10px',
    cursor: 'nw-resize',
  },
  topCenter: {
    width: '20px',
    height: '20px',
    position: 'absolute',
    left: '50%',
    top: '-10px',
    marginLeft: '-10px',
    cursor: 'row-resize',
  },
  rightCenter: {
    width: '20px',
    height: '20px',
    position: 'absolute',
    top: '50%',
    right: '-10px',
    marginTop: '-10px',
    cursor: 'col-resize',
  },
  bottomCenter: {
    width: '20px',
    height: '20px',
    position: 'absolute',
    left: '50%',
    bottom: '-10px',
    marginLeft: '-10px',
    cursor: 'row-resize',
  },
  leftCenter: {
    width: '20px',
    height: '20px',
    position: 'absolute',
    top: '50%',
    left: '-10px',
    marginTop: '-10px',
    cursor: 'col-resize',
  },
  rotate: {
    width: '20px',
    height: '20px',
    position: 'absolute',
    left: '50%',
    top: '-30px',
    marginLeft: '-10px',
    cursor: 'url(data:image/png;base64,AAABAAEAFBQAAAEAIAC4BgAAFgAAACgAAAAUAAAAKAAAAAEAIAAAAAAAQAYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGZmZgRmZmYmZmZmdGZmZqlmZmbJZmZmzWZmZrFmZmZ+ZmZmLGZmZgYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABmZmYcaWlp/319ff+srKz/y8vL/97e3v/h4eH/0NDQ/7Kysv+BgYH/ampq/2ZmZioAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZmZmWHd3d/+1tbX/9vb2//////////////////////////////////r6+v++vr7/fHx8/2ZmZmwAAAAAAAAAAAAAAAAAAAAAAAAAAGZmZmKBgYH/2tra////////////7Ozs/9PT0/++vr7/u7u7/8fHx//i4uL////////////m5ub/jY2N/2ZmZnwAAAAAAAAAAAAAAABmZmY6eXl5/+Dg4P///////////8rKyv+IiIj/ZmZmtWZmZpNmZmaNZmZmo3V1df+vr6//8fHx///////v7+//iIiI/2ZmZmgAAAAAZmZmBGlpaf/IyMj///////39/f+2trb/a2tr/2ZmZjwAAAAAAAAAAAAAAAAAAAAAZmZmGGZmZn6Ojo7/7u7u///////k5OT/cnJy/wAAAABmZmY8i4uL///////9/f3/zMzM/2lpaf9mZmYcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGZmZnqgoKD/+fn5/9ra2v9tbW3/AAAAAGZmZpnCwsL///////Hx8f+CgoL/ZmZmQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZmZmBGhoaP/BwcH/dHR0/7Kysp8AAAAAZmZm1ebm5v//////1tbW/2ZmZrsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAG1tbf+/v7+dAAAAAAAAAABmZmbl7+/v//39/f++vr7/ZmZmkwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZmZmCGZmZuPu7u7//f39/7u7u/9mZmaPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZmZm0+Xl5f//////0NDQ/2ZmZrEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABmZmabwsLC///////r6+v/dXV1/2ZmZiYAAAAAAAAAAAAAAAAAAAAAAAAAAGZmZiJ7e3v/aGho/2hoaP9oaGj/aGho/2hoaP9oaGj/AAAAAGZmZjyKior//v7+//v7+/+8vLz/ZmZmkQAAAAAAAAAAAAAAAAAAAAAAAAAAZmZmJHx8fP///////////////////////////2ZmZv8AAAAAZmZmBGhoaP/Jycn///////j4+P+jo6P/ZmZmi2ZmZh4AAAAAAAAAAAAAAAAAAAAAAAAAAHR0dP/j4+P/////////////////ZmZm/wAAAAAAAAAAZmZmPHp6ev/i4uL///////j4+P+4uLj/dXV1/2ZmZptmZmZ6ZmZmeGZmZpdxcXH/qamp//z8/P////////////////9mZmb/AAAAAAAAAAAAAAAAZmZmZoKCgv/e3t7////////////h4eH/w8PD/7CwsP+vr6//wMDA/97e3v/+/v7///////7+/v///////////2ZmZv8AAAAAAAAAAAAAAAAAAAAAZmZmXnl5ef+2trb/9fX1/////////////v7+//39/f/////////////////a2tr/k5OT/3V1df/T09P/ZmZmtwAAAAAAAAAAAAAAAAAAAAAAAAAAZmZmHmlpaf98fHz/r6+v/9TU1P/k5OT/5ubm/9zc3P/BwcH/jo6O/25ubv8AAAAAAAAAAG1tbf9mZmZMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZmZmBGZmZiRmZmZ6ZmZmuWZmZtNmZmbVZmZmxWZmZpdmZmZCZmZmDAAAAAAAAAAAZmZmDAAAAAAAAAAA/w/wAPgB8ADwAPAA4ABwAMAAMACB/BAAg/4QAAf+EAAH/zAAB//wAAf/8AAH//AAB/AQAIPwEACB+BAAwGAQAOAAEADwABAA+AGwAP8H8AA=) 10 10,default',
  },
  rotateLine: {
    position: 'absolute',
    width: '2px',
    height: '23px',
    top: '7px',
    left: '50%',
    marginLeft: '-1px',
    backgroundColor: '#4cae4c',
    zIndex: -1,
  }
};

export type Direction = 'top' | 'topCenter' | 'right' | 'rightCenter' | 'bottom' | 'bottomCenter' | 'left' | 'leftCenter' | 'topRight' | 'bottomRight' | 'bottomLeft' | 'topLeft' | 'rotate';

export type OnStartCallback = (
  e: SyntheticMouseEvent<HTMLDivElement> | SyntheticTouchEvent<HTMLDivElement>,
  dir: Direction,
) => void;

export type Props = {
  direction: Direction;
  className?: string;
  replaceStyles?: { [key: string]: string | number };
  replaceRotateLineStyles?: { [key: string]: string | number };
  onResizeStart: OnStartCallback;
}

export default (props: Props): React.Element<'div'> => {
  const direction = props.direction;
  let children = null;
  if (direction === 'rotate') {
    children = (<i style={{ ...styles.rotateLine, ...(props.replaceRotateLineStyles || {}), }} />);
  }
  return (
    <div
      className={props.className}
      style={{
        ...styles.base,
        ...styles[props.direction],
        ...(props.replaceStyles || {}),
      }}
      onMouseDown={(e: SyntheticMouseEvent<HTMLDivElement>) => {
        props.onResizeStart(e, props.direction);
      }}
      onTouchStart={(e: SyntheticTouchEvent<HTMLDivElement>) => {
        props.onResizeStart(e, props.direction);
      }}>
      {children}
    </div>);
};
