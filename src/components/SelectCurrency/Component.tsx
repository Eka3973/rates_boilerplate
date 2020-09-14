import React from 'react'
import { Props } from 'react-apexcharts'

import { TReduxProps } from './Container'
import { StyledContainer } from './style'
import { Menu, Dropdown, Button } from 'antd';


export type TComponentProps = {
} & TReduxProps

const Currency: React.FC<TComponentProps> = ({getRates, codes}) => {

    const handleMenuClick = (e) => {
        const currencyId = e.key
        getRates(currencyId)
    }

    const menu = (
        <Menu onClick={handleMenuClick}>
            {codes.map((elem: any) =>
                <Menu.Item key={elem.codeNumeric}> {elem.codeLetter} </Menu.Item>)}
        </Menu>
    )

    return (
        <StyledContainer>
            <Dropdown overlay={menu} placement="bottomLeft" arrow>
                <Button>Select currency</Button>
            </Dropdown>
        </StyledContainer>
    )
}

export default Currency
