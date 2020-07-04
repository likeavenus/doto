import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from 'react-redux';
import './assets/css/styles.scss';
import thunk from 'redux-thunk';

import { rootReducer } from "./redux/rootReducer";
import App from "./App";

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

store.subscribe(() => {
    console.log(store.getState())
});

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
