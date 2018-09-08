import {applyMiddleware, createStore} from "redux";
import axiosMiddleware from 'redux-axios-middleware';
import defaultReducers from "../reducers";
import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'http://localhost:3000/api',
    responseType: 'json'
});

const store = createStore(
    defaultReducers,
    applyMiddleware(
        axiosMiddleware(apiClient)
    )
);
export default store;