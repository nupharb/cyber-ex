import React from 'react';
import Layout from '../components/Layout';
import TitlePage from '../components/TitlePage';

const ConfigLayout = (props) => {
    console.log(props);
    return (
      <div className='config-layout-wrap'>
        <TitlePage text='Configuration Screen' />
        <Layout gridLayout={props.gridLayout} onDrop={(ev, index) => props.onDrop(ev, index)} />
      </div>
    );
  }
  
export default ConfigLayout;