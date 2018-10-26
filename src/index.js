import React from 'react';
import ReactDOM from 'react-dom';
import reducer from './reducers';
import configStore from './config/configStore';
import { Provider } from 'react-redux';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Layout from './components/layout';
import './index.less';
import * as serviceWorker from './serviceWorker';
import { verifyLogin } from './actions'

const store = configStore();
// store.dispatch(verifyLogin());

const App = () => (
    <Provider store={ store }>
        <Router>
            <Switch>
                <Route path='/' component={ Layout } />
            </Switch>
        </Router>
    </Provider>
)

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
