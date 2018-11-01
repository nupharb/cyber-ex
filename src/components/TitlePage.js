import React from 'react';
import './style/TitlePage.css';

const TitlePage = (props) => {
  return (
    <div className='title'>
      {props.text}
    </div>
  );
}

export default TitlePage;