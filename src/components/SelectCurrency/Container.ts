import { connect, ConnectedProps } from 'react-redux'
import { IAppState } from 'store'

import Component from './Component'
import {getRates} from "actions/common";

const mapStateToProps = (state: IAppState) => ({
  fetching: state.common.fetching,
  codes: state.common.codes,
})

const connector = connect(mapStateToProps, {getRates})
export type TReduxProps = ConnectedProps<typeof connector>
export default connector(Component)
