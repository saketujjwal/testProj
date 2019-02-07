import {fork , all } from 'redux-saga/effects'
import homeSaga from './homeSagas.js';
import aboutSaga from './aboutSaga.js'

export default function* rootSaga(){
    yield all([
        fork(homeSaga),
        fork(aboutSaga)
    ])
}