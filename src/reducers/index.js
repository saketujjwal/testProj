import {combineReducers} from 'redux';
import home from './homeReducer';
import about from './aboutReducer'

const rootReducer = combineReducers({
    home,
    about
});

export default rootReducer;