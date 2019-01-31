import {takeEvery, call, put} from 'redux-saga/effects';
import fetch from '../utils/fetch'

import * as constants from '../constants'

export function* homeSagaLoader() {
    const url = 'https://holidayapi.com/v1/holidays?key=de5b998b-8778-4439-ab33-42d0bcbb214b&country=US&year=2015';
    const obj = {
        url:url,
        method:'GET'
    }
    const payload = yield call(fetch,obj);
    yield put({type:constants.SET_INITIAL_LOAD,payload:payload})

}

export default function* homeSagaWatcer() {
    yield takeEvery(constants.LOAD_INITIAL_DATA, homeSagaLoader)
}