import {combineReducers} from 'redux';
import contact from './contact';
import addNewContact from './addNewContact'

const rootReducer = combineReducers({
    contact,
    addNewContact
});

export default rootReducer;