import React, { Component } from 'react';
import './App.css';
import InitialContainer from './Containers/InitialContainer';
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Cards from './Components/Cards/Cards';
import Workflow from './Components/Workflow/Workflow';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="wrapper">
          <NavBar />
          <Header />
          <br /> <br />
          <Cards />
          <br />
          <Workflow />
          <br />
        </div>
        
        <Footer />
      </div>
    );
  }
}

export default App;
