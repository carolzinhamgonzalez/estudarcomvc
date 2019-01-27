import React, { Component } from 'react';
import './App.css';
// import Data from './courses.json';
import Test from './containers/Test';
import Header from './components/Header';


class App extends Component {
  
  render() {
    return (
      <div>
        <Header />
        <Test />
      </div>
    );
  }
}

export default App;
