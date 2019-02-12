import * as constants from '../constants';

const initialState = {
    isLoaded:false,
    data:[]
}

export default function contactReducer(state = initialState , action) {
    switch(action.type){
        case constants.LOAD_INITIAL_DATA :
        return {...state, isLoaded : action.payload};

        case constants.SET_INITIAL_LOAD :
        return {...state, data:action.payload}

        default:
        return state;
    }
}