import React from 'react';

const Green = (props) => {
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
  
export default Green;