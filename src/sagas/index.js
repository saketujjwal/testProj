import {fork , all } from 'redux-saga/effects'

import contactSaga from './contact.js';
import addNewContact from './addNewContact'

export default function* rootSaga(){
    yield all([
        fork(contactSaga),
        fork(addNewContact)
    ])
}