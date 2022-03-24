import styled from 'styled-components'
import { ThemeVariables as Theme } from '../../ThemeVariables'

export const CartArea = styled.div`
    background-color: ${Theme.primaryColor};
    position: fixed;
    bottom: 0;
    right: 30px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    width: 290px
`

export const CartHeader = styled.div`
    display: flex;
    align-items: center;
    height: 50px;
    cursor: pointer;
    border-bottom: 1px solid #ffffff50;

    img{
        width: 23px;
        height: auto;
        margin: 0 15px;
    }

    span {
        color: #fff;
    }
`

export const CartBody = styled.div`
`