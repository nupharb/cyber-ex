import React from 'react';

const Blue = (props) => {
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
  
  export default Blue;