import React, { Component } from 'react';
import './App.css';
import GenericMatters from './containers/GenericMatters';
import HighlightMatters from './containers/HighlightMatters';
import Header from './components/Header';
import { Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <Header />

        {/* rotas do dropdown(filtro) */}
        <Route exact path="/" component={HighlightMatters} />
        <Route exact path="/" component={GenericMatters} />
        <Route exact path="/personalizadas" component={HighlightMatters} />
        <Route exact path="/gerais" component={GenericMatters} />
      </div>
    );
  }
}

export default App;
