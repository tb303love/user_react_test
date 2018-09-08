import { reducer as reduxFormReducer } from 'redux-form';
import {combineReducers} from "redux";
import personCRUD from "./personCRUD";

export default combineReducers({
    personCRUD: personCRUD,
    form: reduxFormReducer
});