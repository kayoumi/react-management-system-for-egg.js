import React from 'react';
import ReactDOM from 'react-dom';
import reducer from './reducers';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import layout from './components/layout';
import './index.less';
import * as serviceWorker from './serviceWorker';

const store = createStore(reducer);

const App = () => (
    <Provider store={ store }>
        <Router>
            <Switch>
                <Route path='/' component={ layout } />
            </Switch>
        </Router>
    </Provider>
)


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
