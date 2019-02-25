import * as constants from '../constants';
import { fromJS } from 'immutable';

const initialState = {
    signInClicked:false,
    id:'',
    firstNameSignUp:'',
    lastnameSignUp:'',
    emailAddressSignUp:'',
    phoneSignUp:'',
    userNameSignUp:'',
    passwordSignUp:'',
    userName:'',
    password:''
};

export default function loginReducer(state = {initialState}, action){
    switch(action.type){
        case constants.SIGN_UP_CLICKED :
        return {...state, signInClicked: action.payload}

        case constants.HANDLE_USERNAME:
        return {...state, userName: action.payload}

        case constants.HANDLE_PASSWORD:
        return {...state, password: action.payload}


        case constants.HANDLE_FIRSTNAME_SIGNUP:
        return {...state, firstNameSignUp: action.payload}


        case constants.HANDLE_LASTNAME_SIGNUP:
        return {...state, lastnameSignUp: action.payload}


        case constants.HANDLE_EMAIL_SIGNUP:
        return {...state, emailAddressSignUp: action.payload}


        case constants.HANDLE_PHONE_SIGNUP:
        return {...state, phoneSignUp: action.payload}


        case constants.HANDLE_USERNAME_SIGNUP:
        return {...state, userNameSignUp: action.payload}


        case constants.HANDLE_PASSWORD_SIGNUP:
        return {...state, passwordSignUp: action.payload}

        default : 
        return state
    }
}