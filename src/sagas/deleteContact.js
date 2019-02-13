import { takeEvery, select, call } from 'redux-saga/effects';
import fetch from '../utils/fetch'

import * as constants from '../constants';

function* deleteContactLoader(params) {

    const id = params.payload;

    const url = 'http://localhost:9443/contact/details/'+encodeURIComponent(id);
    const obj = {
        url:url,
        method:'DELETE',
        header: {
            "Content-Type": "application/json"
        }
    }
    const payload = yield call(fetch,obj);

        
    if(payload) {
        window.location.reload();
    }

}   

export default function* deleteContactWatcher(){
    yield takeEvery(constants.DELETE_USER, deleteContactLoader)
}