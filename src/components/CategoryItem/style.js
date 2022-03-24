import styled from 'styled-components'

export const LinkArea = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80px;
    height: 80px;
    margin-right: 15px;
    border-radius: 20px;
    background-color: #fff;
    opacity: ${props => props.active ? '1' : '.65'};
    transition: all .25s;
    cursor: pointer;

    img {
        height: 70%;
        width: 70%;
    }
`