import { TAppActionThunk, TGetState } from 'store'
import api from "../API/ratesAPI";
import { SET_DATA, START_FETCHING, STOP_FETCHING } from "actions/constants";

const startFetching = () => ({type: START_FETCHING})
const stopFetching = () => ({type: STOP_FETCHING})
const setData = (payload) => ({type: SET_DATA, payload})


export const getRates = (currencyId): TAppActionThunk =>
    async (dispatch, getState: TGetState) => {
        const {startDate, endDate} = getState().common
        dispatch(startFetching())
        const data = await api.setRates(currencyId, startDate, endDate)
        dispatch(stopFetching())
        dispatch(setData(data))
    }
