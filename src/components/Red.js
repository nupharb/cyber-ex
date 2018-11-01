import React from 'react';
import './style/Features.css';

const Red = (props) => {
  return (
    <div 
      className='feature' 
      draggable 
      style={{backgroundColor: props.color}}
      onDragStart={props.onDragStart}
    >
    </div>
  );
}

export default Red;