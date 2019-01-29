import React, { Component } from 'react';
import './App.css';
// import Data from './courses.json';
// import Matters from './containers/Matters';
import GenericMatters from './containers/GenericMatters';
import HighlightMatters from './containers/HighlightMatters';
import Header from './components/Header';


class App extends Component {
  
  render() {
    return (
      <div>
        <Header />
        <HighlightMatters />
        <GenericMatters />
      </div>
    );
  }
}

export default App;
