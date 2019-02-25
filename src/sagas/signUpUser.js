import { takeEvery, call , select} from "redux-saga/effects";
import fetch from '../utils/fetch';

import * as constants from '../constants';

function* signUpHandler(params){

    const userName = yield select(state => state.login.userNameSignUp);
    const password = yield select(state => state.login.passwordSignUp);
    const firstNameSignUp = yield select(state => state.login.firstNameSignUp);
    const lastnameSignUp = yield select(state => state.login.lastnameSignUp);
    const emailAddressSignUp = yield select(state => state.login.emailAddressSignUp)
    const phoneSignUp = yield select(state => state.login.phoneSignUp);

    const formData = {
        "userName":userName,
        "password":password,
        "firstName": firstNameSignUp,
        "lastName": lastnameSignUp,
        "phone": phoneSignUp,
        "emailAddress": emailAddressSignUp
    }
    const url = 'http://localhost:9443/login/signUp';
    const obj = {
        url:url,
        method:'POST',
        body:formData,
        header: {
            "Content-Type": "application/json"
        }
    }
    const payload = yield call(fetch,obj);

        
    // if(payload) {
    //     params.history.push('/contactList')
    // }
}

export default function* signUpWatcher(){
    yield takeEvery(constants.SIGN_UP_USER , signUpHandler)
}