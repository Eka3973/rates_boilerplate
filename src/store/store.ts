import { createStore, Store } from 'redux'
import { IActionType, IAppState } from './models'
import rootReducer from './rootReducer'
import enhancer from './enhancer'

export type TAppStore = Store<IAppState>

const store: TAppStore = createStore<IAppState, IActionType, any, any>(rootReducer, enhancer)

export default store
