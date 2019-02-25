import {fork , all } from 'redux-saga/effects'

import contactSaga from './contact.js';
import addEditContact from './addEditContact';
import deleteContact from './deleteContact'
import signIn from './signIn';
import signUp from './signUpUser';
import logout from './logout';

export default function* rootSaga(){
    yield all([
        fork(contactSaga),
        fork(addEditContact),
        fork(deleteContact),
        fork(signIn),
        fork(signUp),
        fork(logout)
    ])
}