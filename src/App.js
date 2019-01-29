import React, { Component } from 'react';
import './App.css';
import GenericMatters from './containers/GenericMatters';
import DescriptionGeneric from './containers/DescriptionGeneric';
import HighlightMatters from './containers/HighlightMatters';
import Header from './components/Header';
import { Route, Link} from 'react-router-dom';



class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <HighlightMatters />
        <GenericMatters />
      
        <Route exact path="/" component={App} />
        <Route exact path="/personalizadas" component={HighlightMatters} />
        <Route exact path="/gerais" component={GenericMatters} />

      </div>
    );
  }
}


export default App;
