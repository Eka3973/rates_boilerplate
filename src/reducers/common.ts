import {
    SET_DATA,
    START_FETCHING,
    STOP_FETCHING,
} from 'actions/constants'
import moment from "moment";
import {IActionType} from "store";

const createStartDate = moment().subtract(7, 'days').format('l')
const createEndDate = moment().format('l')

const initState = {
    fetching: false,
    startDate: createStartDate,
    endDate: createEndDate,
    currencies: [],
    days: [],
    codes: [
        {codeLetter: 'USD', codeNumeric: 145,},
        {codeLetter: 'EUR', codeNumeric: 292,},
        {codeLetter: 'RUR', codeNumeric: 298,}
    ]
}

export interface ICommonState {
    fetching: boolean,
    startDate: string,
    endDate: string,
    currencies: Array<number>,
    days: Array<string>,
    codes: Array<object>,
}

function commonReducer(state: ICommonState = initState, action: IActionType) {
    switch (action.type) {
        case START_FETCHING: {
            return {
                ...state, fetching: true
            }
        }
        case STOP_FETCHING: {
            return {
                ...state, fetching: false,
            }
        }
        case SET_DATA: {
            const currencies = action.payload.map(rate => rate.Cur_OfficialRate)
            const days = action.payload.map(rate => rate.Date.replace('T00:00:00', ''))
            return {
                ...state, currencies, days
            }
        }
        default:
            return state
    }
}

export default commonReducer
