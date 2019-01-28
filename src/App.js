import React, { Component } from 'react';
import './App.css';
// import Data from './courses.json';
import Matters from './containers/Matters';
import Header from './components/Header';


class App extends Component {
  
  render() {
    return (
      <div>
        <Header />
        <Matters />
      </div>
    );
  }
}

export default App;
