import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/rootReducer';
import Data from './courses.json';

const store = createStore(rootReducer);
// central redux

store.dispatch({type: 'ADD_BASE', base: Data});
// criação de ação e despacho para dar update no state



store.subscribe(() => {
    console.log('state updated');
    console.log(store.getState());
})

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

