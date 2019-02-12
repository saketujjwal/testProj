import * as constants from '../../constants'

export function handleFirstNameChange(event) {
    return {
        type: constants.HANDLE_FIRST_NAME_CHANGE,
        payload: event.target.value
    }
}

export function handleLastNameChange(event) {
    return {
        type: constants.HANDLE_LAST_NAME_CHANGE,
        payload: event.target.value
    }
}

export function handleAgeChange(event) {
    return {
        type: constants.HANDLE_AGE_CHANGE,
        payload: event.target.value
    }
}

export function handlePhoneChange(event) {
    return {
        type: constants.HANDLE_PHONE_CHANGE,
        payload: event.target.value
    }
}

export function addContact(history){
    return {
        type: constants.ADD_NEW_USER,
        history
    }
}