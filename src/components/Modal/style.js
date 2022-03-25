import styled from 'styled-components'

export const Container = styled.div`
    display: ${props => props.active ? 'flex' : 'none'};
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: #00000099;
    z-index: 99;
`

export const Modal = styled.div`
    min-width: 60vw;
    max-width: 90vw;
    max-height: 80vh;
    background-color: #fff;
    border-radius: 20px;
    box-shadow: 0 0 50px #00000099;
    z-index: 100;
`