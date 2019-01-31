import {fork , all } from 'redux-saga/effects'
import homeSaga from './homeSagas.js';

export default function* rootSaga(){
    yield all([
        fork(homeSaga)
    ])
}