import React, { Component } from 'react';
import { connect } from 'react-redux';
import FeatureMenu from '../components/FeatureMenu';
import ConfigLayout from '../components/ConfigLayout';
import { layouts } from '../constants/layouts';
import { addFeature } from '../actions/index';
import RGL, { WidthProvider } from 'react-grid-layout';
import './Configuration.css';

const ReactGridLayout = WidthProvider(RGL);

const DragStart = (ev, id) => {
  // set the state
  ev.dataTransfer.setData('text/plain', id);
  console.log('configuration page - onDragStart: ', id);
}

const Configuration = ({match, ...props}) => {
  console.log(props);

  const drop = (ev, layoutId, index) => {
    console.log(ev, layoutId, index);
    ev.preventDefault();
    console.log(ev.dataTransfer.getData('text'));
    props.addFeature(layoutId, index, ev.dataTransfer.getData('text'));
  }

  /* if (props.state.length === 0) {
    props.addFeature(1, 0, 'red');
  } */

  const layoutId = match.params.id;
  const gridLayout = layouts[layoutId - 1].gridLayout;
  console.log(layoutId);
  
  console.log(props.state);

  return (
    <div className='configuration'>
      <div className='menu-bar'></div>
      <div className='main-wrap'>
        <FeatureMenu onDragStart={(ev, id) => DragStart(ev, id)} />
        <ConfigLayout gridLayout={gridLayout} onDrop={(ev, index) => drop(ev, layoutId, index)} {...props.state} />
      </div>
    </div>
  );
}
    

const mapStateToProps = (state) => {
  //console.log(state);
  return { state: state.featured};
}

const mapDispatchToProps = (dispatch) => {
  return { 
    addFeature: (id, placeholder, component) => dispatch(addFeature(id, placeholder, component)) 
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Configuration);