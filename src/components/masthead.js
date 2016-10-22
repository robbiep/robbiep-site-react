import React, { Component } from 'react';
import masthead from '../masthead.jpg';

export default class Masthead extends Component {
  render() {
    return (
      <div className="App-masthead">
        <img className="masthead" role="presentation" src={masthead}></img>
      </div>
    );
  }
}
