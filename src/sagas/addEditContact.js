import { takeEvery, select, call } from 'redux-saga/effects';
import fetch from '../utils/fetch'

import * as constants from '../constants';

//Add new Contact
function* addContact(params){
    const firstName = yield(select(state => state.contactDetails.firstName))
    const lastName = yield(select(state => state.contactDetails.lastName));
    const age = yield(select(state => state.contactDetails.age));
    const phone = yield(select(state => state.contactDetails.phone));

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
        params.history.push('/')
    }

}

//Edit exisitng contact
function* editContact(id, params) {
    const firstName = yield(select(state => state.contactDetails.firstName))
    const lastName = yield(select(state => state.contactDetails.lastName));
    const age = yield(select(state => state.contactDetails.age));
    const phone = yield(select(state => state.contactDetails.phone));

    const formData = {
        "id":id,
        "firstName":firstName,
        "lastName": lastName,
        "age":age,
            "phone":phone
    }
    const url = 'http://localhost:9443/contact/details/'+encodeURIComponent(id);
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
        params.history.push('/')
    }

}


function* addEditContactLoader (params){
    const id = yield(select(state => state.contactDetails.id));
    if(id) {
        yield call(editContact ,id, params)
    } else {
        yield call(addContact, params)
    }
}     

export default function* addNewContactWatcher(){
    yield takeEvery(constants.ADD_EDIT_NEW_USER, addEditContactLoader)
}