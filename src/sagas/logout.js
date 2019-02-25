import { takeEvery, call , select} from "redux-saga/effects";
import fetch from '../utils/fetch';

import * as constants from '../constants';

function* logoutHandler(params){

    // Code to kill the session and other session related data
        
        params.history.push('/')
}

export default function* logoutWatcher(){
    yield takeEvery(constants.LOGOUT , logoutHandler)
}