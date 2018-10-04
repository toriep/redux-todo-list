import 'materialize-css/dist/css/materialize.min.css';//this goes before main css before we want our css to have the final say
import './assets/css/index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import rootReducer from './reducers';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

const store = createStore(rootReducer, {}, applyMiddleware(reduxPromise));

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>, 
    document.getElementById('root')
    );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();//makes app run faster by caching bundle file and save files to local computer to be loaded on
//however if you update your app, they won't see the change when they first come back to the site
