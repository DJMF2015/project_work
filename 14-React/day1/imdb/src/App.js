import React, { Component } from 'react';
import './App.css';
import FilmsShowingContainer from './containers/FilmsShowingContainer.js';

class App extends Component {
  render() {
    return (
      <div>
      <div className="CSSTemp" ></div>
      <div className="App" ></div>
  
      <h1 className="CSSTemp_content">  Upcoming film releases in UK</h1>
      < FilmsShowingContainer />
      </div>




    );

  }
}

export default App;
