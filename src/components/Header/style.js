import styled from 'styled-components'
import { ThemeVariables as Theme } from '../../ThemeVariables'
import SearchImg from '../../assets/search.png'

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${Theme.primaryColor};
    border-radius: 10px;
    padding: 30px;

    img{
        width: auto;
        height: 70px;
    }

    input{
        font-size: 16px;
        border: 0;
        border-radius: 25px;
        transition: all .25s;
        width: ${props => props.active ? '300px' : '0'};
        height: 50px;
        background-color: #fff;
        outline: none;
        background-image: url(${SearchImg});
        background-size: 24px;
        background-repeat: no-repeat;
        background-position: 13px center;
        padding-left: 50px;
        cursor: pointer;

        :focus{
            cursor: text;
        }
    }
`