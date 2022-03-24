import styled from 'styled-components'
import { ThemeVariables as Theme } from './ThemeVariables'
import BgImg from './assets/bg.png'

export const Container = styled.div`
    display: flex;
    height: 100vh;
`

export const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80px;
    flex-direction: column;
    background-color: ${Theme.primaryColor};
`

export const PageBody = styled.div`
    display: flex;
    flex: 1;
    background-color: #00980D;
    background-image: url(${BgImg});
    padding: 15px 20px;
`