import React from 'react';
import Red from '../components/Red';
import Blue from '../components/Blue';
import Green from '../components/Green';
import { components } from './index'

const FeatureMenu = (props) => {
  console.log(props);
  return (
    <div className='feature-wrap'>
      <div className='feature-title'>Components</div>
      <Red color={components.red} onDragStart={(ev) => props.onDragStart(ev, components.red)} />
      <Green color={components.green} onDragStart={(ev) => props.onDragStart(ev, components.green)} />
      <Blue color={components.blue} onDragStart={(ev) => props.onDragStart(ev, components.blue)} />
    </div>
  );
}
  
export default FeatureMenu;