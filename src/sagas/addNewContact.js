import { takeEvery, select, call } from 'redux-saga/effects';
import fetch from '../utils/fetch'

import * as constants from '../constants';

function* addNewContactLoader (params){
    // const firstName = (state) => state.firstName;
    const firstName = yield(select(state => state.addNewContact.firstName))
    const lastName = yield(select(state => state.addNewContact.lastName));
    const age = yield(select(state => state.addNewContact.age));
    const phone = yield(select(state => state.addNewContact.phone));

    const formData = {
            "firstName":firstName,
            "lastName": lastName,
            "age":age,
            "phone":phone
    }
    const url = 'http://localhost:9443/contact/details';
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
        console.log(payload)
        params.history.push('/')
    }
}

export default function* addNewContactWatcher(){
    yield takeEvery(constants.ADD_NEW_USER, addNewContactLoader)
}