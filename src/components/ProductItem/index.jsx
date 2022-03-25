import React from "react"
import * as C from './style'
import ChevronImg from '../../assets/next.png'

export const ProductItem = ({ data, onClick }) => {
    return (
        <C.Container onClick={() => { onClick(data) }}>
            <C.PhotoArea>
                <img src={data.image} alt={data.name} />
            </C.PhotoArea>
            <C.InfoArea>
                <h3>{data.name}</h3>
                <strong>R$ {data.price}</strong>
                <span>{data.ingredients}</span>
            </C.InfoArea>
            <C.ButtonArea>
                <img src={ChevronImg} alt="info" />
            </C.ButtonArea>
        </C.Container>
    )
}