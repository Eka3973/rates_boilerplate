import { ThunkAction } from 'redux-thunk'
import { RouterState } from 'connected-react-router'

import { ICommonState } from 'reducers/common'
import { SET_DATA, START_FETCHING, STOP_FETCHING } from "actions/constants";

export interface IAppState {
  router: RouterState
  common: ICommonState
}

export type TAppActionThunk = ThunkAction<
    Promise<void>,
    IAppState,
    unknown,
    IActionType>

export type TGetState = () => IAppState

interface IStartFetching {
  type: typeof START_FETCHING,
  payload?: any
}

interface IStopFetching {
  type: typeof STOP_FETCHING,
  payload?: any
}

interface ISetData {
  type: typeof SET_DATA,
  payload: []
}

export type IActionType = IStartFetching | IStopFetching | ISetData ;
