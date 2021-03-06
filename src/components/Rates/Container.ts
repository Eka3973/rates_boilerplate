import { connect, ConnectedProps } from 'react-redux'

import { IAppState } from 'store'
import Component from './Component'

const mapStateToProps = (state: IAppState) => ({
    currencies: state.common.currencies,
    days: state.common.days
})

const connector = connect(mapStateToProps)
export type TReduxProps = ConnectedProps<typeof connector>
export default connector(Component)
