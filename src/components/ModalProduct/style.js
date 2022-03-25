import styled from 'styled-components'
import { ThemeVariables as Theme } from '../../ThemeVariables'

export const Container = styled.div`
    display: flex;
    box-sizing: content-box;
`

export const ImgArea = styled.div`
    flex: 1;

    img{
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
        height: 100%;
        width: 100%;
        object-fit: cover;
    }
`

export const InfoArea = styled.div`
    color: ${Theme.primaryColor};
    margin: 30px;
    flex: 1;

    h3{
        margin: 0;
        font-size: 42px;
    }
`

export const OrderArea = styled.div`
    margin-top: 42px;

    span{
        font-weight: bold;
        text-transform: uppercase;
        font-size: 14px;
    }
`

export const OrderCount = styled.div`
    display: flex;
    align-items: center;

    strong {
        font-size: 32px;
        margin-right: 15px;
    }
`

export const OrderCountBts = styled.div`
    display: flex;
    align-items: center;
    background-color: #ddd;
    border-radius: 10px;
    padding: 3px;
    font-weight: bold;
    text-align: center;

    div{
        width: 15px;
        margin: 0 10px;
        cursor: pointer;
        user-select: none;
    }
`

export const OrderAreaBts = styled.div`
    display: flex;
    align-items: center;
    margin-top: 30px;

    button{
        border: 0;
        outline: 0;
        padding: 10px;
        font-size: 24px;
        border-radius: 10px;
        background-color: ${Theme.primaryColor};
        color: #fff;
        margin-left: 20px;
        cursor: pointer;
    }
    span {
        cursor: pointer;
    }
`