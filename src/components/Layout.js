import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import RGL, { WidthProvider } from 'react-grid-layout';

const ReactGridLayout = WidthProvider(RGL);

class Layout extends Component {
  render() {
    return (
      <div className='layout-wrap'>
        <Link to={`/configuration/${this.props.layout.id}`}>
          <ReactGridLayout 
            className='grid-layout'
            layout={this.props.layout.gridLayout.layout} 
            cols={this.props.layout.gridLayout.cols} 
            rowHeight={this.props.layout.gridLayout.rowHeight}
          >
            {this.props.layout.gridLayout.layout.map((placeholder, index) => (
              <div key={placeholder.i}>{placeholder.i}</div>
            ))}
            
          </ReactGridLayout>
        </Link>
      </div>
    )
  }
}

export default Layout;