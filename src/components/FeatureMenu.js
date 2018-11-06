import React from 'react';
import { components } from './Squares/index'

const DragStart = (event, index) => {
  event.dataTransfer.setData('text/plain', index);
}

const FeatureMenu = () => {
  return (
    <div className='feature-wrap'>
      <div className='feature-title'>Components</div>
      { components.map((Component, index) => (
        <Component
          key={index}
          className='feature'
          draggable={true}
          onDragStart={(event) => DragStart(event, index)}
        />
      ))}
    </div>
  );
}
  
export default FeatureMenu;