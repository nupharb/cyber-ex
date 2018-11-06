import React, { Component } from 'react';
import FeatureMenu from '../components/FeatureMenu';
import ConfigLayout from '../components/ConfigLayout';
import './Configuration.css';

const Configuration = ({match}) => {

  const layoutId = match.params.id;
  
  return (
    <div className='configuration'>
      <div className='menu-bar'></div>
      <div className='main-wrap'>
        <FeatureMenu />
        <ConfigLayout layoutId={layoutId} />
      </div>
    </div>
  );
}
 
export default Configuration;
