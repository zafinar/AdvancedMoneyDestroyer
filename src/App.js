import React, { Component } from 'react';
import './app.css'
import FrontPageContainer from './containers/frontPageContainer.js'



class App extends Component {

  render() {


    return (
      <div className="App">
        <h1 id="HeaderText">ADVANCED MONEY DESTROYER</h1>
        <FrontPageContainer/>
      </div>
    );
  }
}


export default App;
