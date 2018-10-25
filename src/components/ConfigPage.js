import React, { Component } from 'react';
import { layouts } from '../constants/data';
import RGL, { WidthProvider } from 'react-grid-layout';

const ReactGridLayout = WidthProvider(RGL);

const ConfigPage = ({ match }) => {
  const gridLayout = layouts[match.params.id].gridLayout;
  console.log(match, gridLayout);
  return (
    <div className='config-page'>
      <ReactGridLayout 
        className='grid-layout'
        layout={ gridLayout.layout } 
        cols={ gridLayout.cols } 
        rowHeight={ gridLayout.rowHeight }
      >
        { gridLayout.layout.map((placeholder, index) => (
          <div key={ placeholder.i }>{ placeholder.i }</div>
        )) }
        
      </ReactGridLayout>
    </div>
  );
}
    


export default ConfigPage;