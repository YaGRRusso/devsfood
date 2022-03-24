import styled from 'styled-components'
import { ThemeVariables as Theme } from '../../ThemeVariables'

export const LinkArea = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 60px;
    margin: 10px 0;
    border-radius: 10px;
    background-color: ${props => props.active ? Theme.secondaryColor : 'none'};
    cursor: pointer;

    img{
        width: 34px;
        height: auto;
    }
`