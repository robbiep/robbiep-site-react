import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import Masthead from './components/masthead';
import Body from './components/body';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Masthead />
        <Body />
    </div>
    );
  }
}

export default App;
