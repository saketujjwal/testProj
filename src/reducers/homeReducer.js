import * as constants from '../constants';

const initialState = {
    isLoaded:false
}

export default function homeReduder(state = initialState , action) {
    switch(action.type){
        case constants.LOAD_INITIAL_DATA :
        return {...state, isLoaded : action.payload};

        default:
        return state;
    }
}