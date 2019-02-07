import * as constants  from '../../constants';

export function loadHolidayDetails(history,e) {
    return {
        type: constants.INDIVIDUAL_ROW,
        payload: e.target.text,
        history
    }
}