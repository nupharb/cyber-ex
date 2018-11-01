import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import TitlePage from '../components/TitlePage';
import Layout from '../components/Layout';
import { layouts } from '../constants/layouts';
import './Layouts.css';

class Layouts extends Component {
	render() {
		
		return (
			<div className='layouts-page'>
        <div className='menu-bar'></div>
        <TitlePage text='Layouts Screen' />
        <div className='layouts-wrap'>
          {
            layouts.map((layout, index) => {
              console.log(layout);
              return (
                <div key={index} className='layout-wrap'>
                  <Link to={`/configuration/${layout.id}`}>
                    <Layout gridLayout={layout.gridLayout} />
                  </Link>
                </div>
              )
            })
          }
        </div>
			</div>
		)
	}
}

export default Layouts;