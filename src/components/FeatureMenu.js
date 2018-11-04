import React from 'react';
import { components } from './Squares/index'

const FeatureMenu = ({ onDragStart }) => {
  return (
    <div className='feature-wrap'>
      <div className='feature-title'>Components</div>
      { components.map((Component, index) => (
        <Component
          key={index}
          className='feature'
          draggable={true}
          onDragStart={(event) => onDragStart(event, index)}
        />
      ))}
    </div>
  );
}
  
export default FeatureMenu;