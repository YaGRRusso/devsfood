import React from "react"
import * as C from './style'
import CartIcon from '../../assets/cart.png'

export const Cart = ({ data }) => {

    return (
        <C.CartArea onClick={() => console.log(data)}>
            <C.CartHeader>
                <img src={CartIcon} alt="carrinho" />
                <span>Meu Carrinho ({data.length})</span>
            </C.CartHeader>
            <C.CartBody>

            </C.CartBody>
        </C.CartArea>
    )
}