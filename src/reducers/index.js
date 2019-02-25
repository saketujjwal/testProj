import {combineReducers} from 'redux';
import contact from './contact';
import contactDetails from './contactDetails';
import login from './login';

const rootReducer = combineReducers({
    contact,
    contactDetails,
    login
});

export default rootReducer;