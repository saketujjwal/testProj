import * as constants from '../constants';

const initialState = {
    isLoaded:false,
    data:[],
    showDialogBool: false,
    selectedContact:''
}

export default function contactReducer(state = initialState , action) {
    switch(action.type){
        case constants.LOAD_INITIAL_DATA :
        return {...state, isLoaded : action.payload};

        case constants.SET_INITIAL_LOAD :
        return {...state, data:action.payload}

        case constants.SHOW_DIALOG_BOX :
        return {...state, showDialogBool:true, selectedContact:action.payload}

        case constants.CLOSE_DIALOG_BOX :
        return {...state, showDialogBool:false}

        default:
        return state;
    }
}