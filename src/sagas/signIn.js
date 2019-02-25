import { takeEvery, call , select} from "redux-saga/effects";
import fetch from '../utils/fetch';

import * as constants from '../constants';

function* signInHandler(params){

    const userName = yield select(state => state.login.userName);
    const password = yield select(state => state.login.password);

    const formData = {
        "userName":userName,
        "password":password
    }
    const url = 'http://localhost:9443/login/signIn';
    const obj = {
        url:url,
        method:'POST',
        body:formData,
        header: {
            "Content-Type": "application/json"
        }
    }
    const payload = yield call(fetch,obj);

        
    if(payload) {
        params.history.push('/contactList')
    }
}

export default function* signInWatcher(){
    yield takeEvery(constants.SIGN_IN , signInHandler)
}