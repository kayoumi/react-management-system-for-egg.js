import React from 'react';
import reducer from './reducers';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import layout from './components/layout'
import './App.css';

const store = createStore(reducer);

const App = ({ store }) => (
  <Provider store={ store }>
    <Router>
      <Switch>
        <Route path='/' component={ layout } />
      </Switch>
    </Router>
  </Provider>
)

export default App;
