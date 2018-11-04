import React from 'react';
import '../style/Features.css';

const BaseSquare = (props) => {
  return (
    <div 
      className={props.className} 
      draggable={props.draggable} 
      style={{backgroundColor: props.color}}
      onDragStart={props.onDragStart}
    >
    </div>
  );
}
  
export default BaseSquare;