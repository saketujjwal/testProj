import {takeEvery} from 'redux-saga/effects';
import * as constants  from '../constants';

function* aboutSaga(params) {
    //WIll use this if there is any middleware call
    params.history.push('/about')
}

export default function* aboutSagaWatcer(){
    yield takeEvery(constants.INDIVIDUAL_ROW , aboutSaga)
}