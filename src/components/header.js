import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <div className="App-header">
        <div id="menu">
          <ul >
            <li><a href="/">Home</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="https://github.com/robbiep">GitHub</a></li>
            <li><a href="/assets/resume.pdf">Resume</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
      </div>
    );
  }
}
