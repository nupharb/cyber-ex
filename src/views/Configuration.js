import React, { Component } from 'react';
import { connect } from 'react-redux';
import FeatureMenu from '../components/FeatureMenu';
import ConfigLayout from '../components/ConfigLayout';
import { layouts } from '../constants/layouts';
import { addFeature } from '../actions/index';
import './Configuration.css';

const DragStart = (ev, index) => {
  // set the state
  ev.dataTransfer.setData('text/plain', index);
  console.log('configuration page - onDragStart: ', index);
}

const Configuration = ({match, ...props}) => {
  console.log(typeof parseInt(match.params.id));

  const drop = (ev, index) => {
    console.log(ev, index);
    ev.preventDefault();
    console.log(ev.dataTransfer.getData('text'));
    props.addFeature(parseInt(match.params.id), index, ev.dataTransfer.getData('text'));
  }

  const layoutId = match.params.id;
  const gridLayout = layouts[layoutId - 1].gridLayout;
  
  return (
    <div className='configuration'>
      <div className='menu-bar'></div>
      <div className='main-wrap'>
        <FeatureMenu onDragStart={DragStart} />
        <ConfigLayout gridLayout={gridLayout} onDrop={drop} {...props.state} />
      </div>
    </div>
  );
}
    

const mapStateToProps = (state) => {
  //console.log(state);
  return { state: state.featured };
}

const mapDispatchToProps = (dispatch) => {
  return { 
    addFeature: (id, placeholder, component) => dispatch(addFeature(id, placeholder, component)) 
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Configuration);