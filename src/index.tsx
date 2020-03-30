import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Global State Store
import useGlobalState from './store/useGlobalState';
import Context from './store/context';

const Index = () => {
    const store = useGlobalState();
    return (
        <Context.Provider value={store}>
            <App />
        </Context.Provider>
    )
}

ReactDOM.render(<Index />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
