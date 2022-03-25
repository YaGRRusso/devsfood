import styled from 'styled-components';
import { ThemeVariables as Theme } from '../../ThemeVariables';

export const Container = styled.div`
    width: 100%;
`;

export const CategoryArea = styled.div`
    margin: 30px 15px;
    color: #fff;
`;

export const CategoryList = styled.div`
    display: flex;
    align-items: center;
`;

export const ProductArea = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 15px;
`

export const PaginationArea = styled.div`
    margin-top: 25px;
    display: flex;
    align-items: center;
    cursor: pointer;
    font-weight: bold;
    font-size: 14px;
`

export const PaginationItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    color: ${Theme.primaryColor};
    opacity: ${props => props.active === props.current ? '1' : '.65'};;
    width: 30px;
    height: 30px;
    border-radius: 10px;
    margin: 5px;
`

