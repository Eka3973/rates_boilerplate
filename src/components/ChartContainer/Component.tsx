import React, { useEffect } from 'react'
import { TReduxProps } from './Container'
import { StyledContainer } from './style'

import Rates from "components/Rates/Container";
import Currency from "components/SelectCurrency/Container";
import Spinner from "components/Spinner/Component";

export type TComponentProps = {
} & TReduxProps

const Chart: React.FC<TComponentProps> = ({fetching, getRates}) => {

    useEffect(() => {
        const startCode = 145
        getRates(startCode)
    }, [])

    return (
        (fetching ? <Spinner/> :
            <StyledContainer>
                <Rates/>
                <Currency/>
            </StyledContainer>)
    )
}

export default Chart

