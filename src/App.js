import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Layouts from './components/Layouts'
import ConfigPage from './components/ConfigPage'
import './App.css';
import '../node_modules/react-grid-layout/css/styles.css';
import '../node_modules/react-resizable/css/styles.css';


class App extends Component {  
  render() {
    
    return (
      <Router>
        <div className="App">
          <Route exact path='/layouts' component={Layouts}></Route>
          <Route path='/configuration/:id' component={ConfigPage}></Route>
        </div> 
      </Router>
      
    );
  }
}

export default App;
