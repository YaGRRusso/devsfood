import styled from 'styled-components'
import { ThemeVariables as Theme } from '../../ThemeVariables'

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 3px 5px #00000050;
    padding: 10px;
    cursor: pointer;
`

export const PhotoArea = styled.div`
    width: 120px;

    img{
        width: 100%;
        border-radius: 10px;
    }
`

export const InfoArea = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 15px;
    color: ${Theme.primaryColor};

    h3{
        margin: 0;
        font-size: 20px;
    }
    strong{
        margin: 3px 0;
        font-size: 14px;
    }
    span{
        font-size: 12px;
    }
`

export const ButtonArea = styled.div`
    img{
        height: 24px;
    }
`