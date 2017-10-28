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
    cursor: 'url(https://assets.rrxh5.cc/www/images/mouserotate.ico)10 10,default',
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
