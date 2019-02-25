import * as constants from '../../constants';

export function signIn(e, history) {
    return {
        type: constants.SIGN_IN,
        history
    }
}

export function signUp(e, data) {
    return {
        type: constants.SIGN_UP_CLICKED,
        payload: data
    }
}

export function signUpUser(e, history) {
    return {
        type: constants.SIGN_UP_USER,
        history
    }
}

export function handleUserName(e) {
    return {
        type: constants.HANDLE_USERNAME,
        payload: e.target.value
    }
}

export function handlePassword(e) {
    return {
        type: constants.HANDLE_PASSWORD,
        payload: e.target.value
    }
}

export function handleSignUpFirstNameChange(e) {
    return {
        type: constants.HANDLE_FIRSTNAME_SIGNUP,
        payload: e.target.value
    }
}

export function handleSignUpLastNameChange(e) {
    return {
        type: constants.HANDLE_LASTNAME_SIGNUP,
        payload: e.target.value
    }
}
export function handleSignUpEmailChange(e) {
    return {
        type: constants.HANDLE_EMAIL_SIGNUP,
        payload: e.target.value
    }
}
export function handleSignUpPhoneChange(e) {
    return {
        type: constants.HANDLE_PHONE_SIGNUP,
        payload: e.target.value
    }
}

export function handleSignUpUserNameChange(e) {
    return {
        type: constants.HANDLE_USERNAME_SIGNUP,
        payload: e.target.value
    }
}

export function handleSignUpPasswordChange(e) {
    return {
        type: constants.HANDLE_PASSWORD_SIGNUP,
        payload: e.target.value
    }
}

export function logout(e,history) {
    return {
        type: constants.LOGOUT,
        history
    }
}