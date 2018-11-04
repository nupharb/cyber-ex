import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Layouts from './views/Layouts'
import ConfigPage from './views/Configuration'
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
