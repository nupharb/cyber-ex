import React, { Component } from 'react';
import RGL, { WidthProvider } from 'react-grid-layout';
import './style/Layout.css';
import { components } from './Squares';

const ReactGridLayout = WidthProvider(RGL);

class Layout extends Component {
  render() {
    return (
      <ReactGridLayout 
        className='grid-layout'
        cols={this.props.gridLayout.cols} 
        rowHeight={this.props.gridLayout.rowHeight}
        margin={this.props.gridLayout.margin}
        containerPadding={this.props.gridLayout.containerPadding}
      >
        {/* <Green />
        <Blue />
        <Red />
        <Empty /> */}
        {this.props.gridLayout.layout.map((placeholder, index) => {
          const Component = components[placeholder.component];
          return (
            <div 
              key={index} 
              data-grid={placeholder.innerLayout} 
              onDrop={(ev) => this.props.onDrop(ev, index)} 
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

export default Layout; 