import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import TitlePage from '../components/TitlePage';
import Layout from '../components/Layout';
import './Layouts.css';
import * as actions from '../actions'

class Layouts extends Component {

	render() {
    console.log(this.props.state);
		return (
			<div className='layouts-page'>
        <div className='menu-bar'></div>
        <TitlePage text='Layouts Screen' />
        <div className='layouts-wrap'>
          {
            this.props.state.map((layout, index) => {
              return (
                <div key={index} className='layout-wrap'>
                  <Link to={`/configuration/${layout.id}`}>
                    <Layout gridLayout={layout.gridLayout} layoutId={layout.id} />
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

const mapStateToProps = (state) => {
  return { state: state.allLayouts };
}

export default connect(mapStateToProps, actions)(Layouts);
