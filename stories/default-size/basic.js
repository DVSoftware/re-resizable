/* eslint-disable */

import React from 'react';
import Resizable from '../../src';

const style = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: 'solid 1px #ddd',
  background: '#f0f0f0',
  marginTop: '100px',
  marginLeft: '100px',
};


const handleTopLeftStyles = {
  width: '10px',
  height: '10px',
  left: '-6px',
  top: '-6px',
}
const handleTopRightStyles = {
  width: '10px',
  height: '10px',
  right: '-6px',
  top: '-6px',
}
const handleBottomRightStyles = {
  width: '10px',
  height: '10px',
  right: '-6px',
  bottom: '-6px',
}
const handleBottomLeftStyles = {
  width: '10px',
  height: '10px',
  bottom: '-6px',
  left: '-6px',
}
const handleTopCenterStyles = {
  width: '10px',
  height: '10px',
  left: '50%',
  top: '-6px',
  marginLeft: '-6px',
}

const handleRightCenterStyles = {
  width: '10px',
  height: '10px',
  right: '-6px',
  marginTop: '-6px',
}
const handleBottomCenterStyles = {
  width: '10px',
  height: '10px',
  bottom: '-6px',
  marginLeft: '-6px',
}
const handleLeftCenterStyles = {
  width: '10px',
  height: '10px',
  left: '-6px',
  marginTop: '-6px',
}
const handleRotateStyles = {
  width: '10px',
  height: '10px',
  left: '50%',
  marginLeft: '-6px',
}
export default () => (
  <Resizable
    ref={(c: (React$ElementRef<typeof Resizable> | null)) => {
      this.resizable = c;
    }}
    style={style}
    defaultSize={{
      width: 200,
      height: 200,
    }}
    position={{ x: 10, y: 40.323 }}
    className={'rnd-resizable1'}
    handleClasses={{
      topLeft: 'resize-handle-base-class',
      topRight: 'resize-handle-base-class',
      bottomRight: 'resize-handle-base-class',
      bottomLeft: 'resize-handle-base-class',
      topCenter: 'resize-handle-base-class',
      rightCenter: 'resize-handle-base-class',
      bottomCenter: 'resize-handle-base-class',
      leftCenter: 'resize-handle-base-class',
      rotate: 'resize-handle-base-class',
    }}
    handleStyles={{
      topLeft: handleTopLeftStyles,
      topRight: handleTopRightStyles,
      bottomRight: handleBottomRightStyles,
      bottomLeft: handleBottomLeftStyles,
      topCenter: handleTopCenterStyles,
      rightCenter: handleRightCenterStyles,
      bottomCenter: handleBottomCenterStyles,
      leftCenter: handleLeftCenterStyles,
      rotate: handleRotateStyles,
    }}
    onResizeStop={(event, direction, resizable, delta) => {
      console.log('delta', delta, this.resizable.degree)
    }}
  >
    001
  </Resizable>
);
