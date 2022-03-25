import React from "react"
import * as C from './style'
import CartIcon from '../../assets/cart.png'
import { useSelector } from "react-redux"

export const Cart = () => {
    const products = useSelector(state => state.cart.products)

    return (
        <C.CartArea>
            <C.CartHeader>
                <img src={CartIcon} alt="carrinho" />
                <span>Meu Carrinho ({products.length})</span>
            </C.CartHeader>
            <C.CartBody>

            </C.CartBody>
        </C.CartArea>
    )
}