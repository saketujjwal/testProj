import * as constants  from '../../constants'

export function loadInit(data) {
    return {
        type: constants.LOAD_INITIAL_DATA,
        payload: data
    }
}

export function editUser(e,data) {
    return {
        type: constants.EDIT_CONTACT,
        payload: data
    }
}

export function deleteUser(e, data, history) {
    return {
        type: constants.DELETE_USER,
        payload: data.id,
        history
    }
}

export function showConfirmationDialog(contact) {
    return {
        type: constants.SHOW_DIALOG_BOX,
        payload: contact
    }
}

export function closeDialog(){
    return {
        type: constants.CLOSE_DIALOG_BOX
    }
}