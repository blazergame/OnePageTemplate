import React, { Component } from 'react';
import './App.css';
import InitialContainer from './Containers/InitialContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <InitialContainer />
        </p>
      </div>
    );
  }
}

export default App;
