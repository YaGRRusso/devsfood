import React from "react"
import * as C from './style'
import CartIcon from '../../assets/cart.png'

export const Cart = ({ icon, link }) => {
    return (
        <C.CartArea>
            <C.CartHeader>
                <img src={CartIcon} alt="carrinho" />
                <span>Meu Carrinho (x)</span>
            </C.CartHeader>
            <C.CartBody>

            </C.CartBody>
        </C.CartArea>
    )
}