import {fork , all } from 'redux-saga/effects'

import contactSaga from './contact.js';
import addEditContact from './addEditContact';
import deleteContact from './deleteContact'

export default function* rootSaga(){
    yield all([
        fork(contactSaga),
        fork(addEditContact),
        fork(deleteContact)
    ])
}