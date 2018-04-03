import React, { Component } from 'react';
import './App.css';
import InitialContainer from './Containers/InitialContainer';
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Cards from './Components/Cards/Cards';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Header />
        <br /> <br />
        <Cards />
        <br />
        <Footer />
      </div>
    );
  }
}

export default App;
