import React from 'react'
import { Spin } from 'antd';
import 'antd/dist/antd.css';
import {StyledContainer } from './style'

const Spinner: React.FC = () => {
    return (
        <StyledContainer>
            <Spin size="large"/>
        </StyledContainer>
    )
}

export default Spinner
