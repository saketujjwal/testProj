import {combineReducers} from 'redux';
import contact from './contact';
import contactDetails from './contactDetails'

const rootReducer = combineReducers({
    contact,
    contactDetails
});

export default rootReducer;