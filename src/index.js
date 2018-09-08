import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import App from './components/App';
import './index.css';
import store from './store'

import 'bootstrap/dist/css/bootstrap.min.css';


render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);