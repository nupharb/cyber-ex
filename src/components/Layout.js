import React, { Component } from 'react';
import RGL, { WidthProvider } from 'react-grid-layout';
import { connect } from 'react-redux';
import { addFeature } from '../actions/index';
import './style/Layout.css';
import { components } from './Squares';

const ReactGridLayout = WidthProvider(RGL);

class Layout extends Component {
  drop = (event, index) => {
    event.preventDefault();
    this.props.addFeature(parseInt(this.props.layoutId), index, event.dataTransfer.getData('text'));
  };

  render() {
    const gridLayout = this.props.state.find((layout) => layout.id === parseInt(this.props.layoutId)).gridLayout;
    return (
      <ReactGridLayout 
        className='grid-layout'
        cols={gridLayout.cols} 
        rowHeight={gridLayout.rowHeight}
        margin={gridLayout.margin}
        containerPadding={gridLayout.containerPadding}
      >
        {gridLayout.layout.map((placeholder, index) => {
          const Component = components[placeholder.component];
          return (
            <div 
              key={index} 
              data-grid={placeholder.innerLayout} 
              onDrop={(ev) => this.drop(ev, index)}  
              onDragOver={(ev) => { ev.preventDefault(); }}>
              <Component 
                id={index}
                draggable={false} 
              />
            </div>
          )
        })}
      </ReactGridLayout>
    )
  }
}

const mapStateToProps = (state) => {
  return { state: state.allLayouts };
}

const mapDispatchToProps = (dispatch) => {
  return { 
    addFeature: (id, placeholder, component) => dispatch(addFeature(id, placeholder, component)) 
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);