import {takeEvery, call, put} from 'redux-saga/effects';
import fetch from '../utils/fetch'

import * as constants from '../constants'

export function* contactSagaLoader() {
    const url = 'http://localhost:9443/contact';
    const obj = {
        url:url,
        method:'GET'
    }
    const payload = yield call(fetch,obj);
    yield put({type:constants.SET_INITIAL_LOAD,payload:payload})

}

export default function* contactSagaWatcer() {
    yield takeEvery(constants.LOAD_INITIAL_DATA, contactSagaLoader)
}