import * as constants  from '../../constants'

export function loadInit(data) {
    return {
        type: constants.LOAD_INITIAL_DATA,
        payload: data
    }
}