import * as constants from '../constants'

const initialState = {
    id:'',
    firstName:'',
    lastname:'',
    age:'',
    phone:''
}

export default function contactDetailsReducer(state={initialState} , action) {
    switch(action.type) {

        case constants.HANDLE_FIRST_NAME_CHANGE:
        return {...state, firstName:action.payload}

        case constants.HANDLE_LAST_NAME_CHANGE:
        return {...state, lastName:action.payload}

        case constants.HANDLE_AGE_CHANGE:
        return {...state, age:action.payload}

        case constants.HANDLE_PHONE_CHANGE:
        return {...state, phone:action.payload}

        case constants.EDIT_CONTACT:
        return {...state, 
            id:action.payload.id,
            firstName:action.payload.firstName, 
            lastName: action.payload.lastName,
            age:action.payload.age,
            phone:action.payload.phone
        }

        default:
        return state
    }
}