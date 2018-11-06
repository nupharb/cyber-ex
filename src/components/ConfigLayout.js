import React from 'react';
import Layout from '../components/Layout';
import TitlePage from '../components/TitlePage';

const ConfigLayout = (props) => {
  return (
    <div className='config-layout-wrap'>
      <TitlePage text='Configuration Screen' />
      <Layout layoutId={props.layoutId} />
    </div>
  );
}
  
export default ConfigLayout;