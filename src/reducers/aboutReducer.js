import * as constants  from '../constants';

const initialState = {
    selectedRow:''
}
export default function aboutReducer(state = initialState, action) {
    switch(action.type){     
        case constants.INDIVIDUAL_ROW:
        return {...state,selectedRow:action.payload}
        
        default:
        return state
    }
}