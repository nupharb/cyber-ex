import React, { Component } from 'react';
import RGL, { WidthProvider } from 'react-grid-layout';
import './style/Layout.css';

const ReactGridLayout = WidthProvider(RGL);

class Layout extends Component {
  render() {
    return (
      <ReactGridLayout 
        className='grid-layout'
        layout={this.props.gridLayout.layout} 
        cols={this.props.gridLayout.cols} 
        rowHeight={this.props.gridLayout.rowHeight}
        margin={this.props.gridLayout.margin}
        containerPadding={this.props.gridLayout.containerPadding}
      >
        {this.props.gridLayout.layout.map((placeholder, index) => (
          <div 
            key={placeholder.i} 
            id={index} 
            onDrop={(ev) => this.props.onDrop(ev, index)} 
            onDragOver={(ev) => { ev.preventDefault(); }}></div>
        ))}
      </ReactGridLayout>
    )
  }
}

export default Layout;