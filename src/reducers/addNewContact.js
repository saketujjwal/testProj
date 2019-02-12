import * as constants from '../constants'

const initialState = {
    firstName:'',
    lastname:'',
    age:'',
    phone:''
}

export default function addNewContactReducer(state={initialState} , action) {
    switch(action.type) {

        case constants.HANDLE_FIRST_NAME_CHANGE:
        return {...state, firstName:action.payload}

        case constants.HANDLE_LAST_NAME_CHANGE:
        return {...state, lastName:action.payload}

        case constants.HANDLE_AGE_CHANGE:
        return {...state, age:action.payload}

        case constants.HANDLE_PHONE_CHANGE:
        return {...state, phone:action.payload}

        default:
        return state
    }
}