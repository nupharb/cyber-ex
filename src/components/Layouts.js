import React, { Component } from 'react';
import Layout from './Layout'
import { layouts } from '../constants/data'

class Layouts extends Component {
    render() {
      
      return (
        <div className='layouts-wrap'>
          {
						layouts.map((layout, index) => {
							console.log(layout);
							return (
								<Layout key={index} layout={layout} />
							)
						})
          }
        </div>
      )
    }
  }
  
  export default Layouts;