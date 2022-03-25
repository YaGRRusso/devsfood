import React, { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import * as C from './style'

export const ModalProduct = ({ data, setStatus }) => {
    const dispatch = useDispatch()
    const [orderCount, setOrderCount] = useState(1)

    useEffect(() => {
        setOrderCount(1)
    }, [data])

    const handleOrderCount = () => {
        if (orderCount > 1) {
            setOrderCount(orderCount - 1)
        }
    }

    const handleCloseModal = () => {
        setStatus(false)
    }

    const handleAddCart = () => {
        dispatch({
            type: 'ADD_PRODUCT',
            payload: { data, orderCount }
        })
        setStatus(false)
    }

    return (
        <C.Container>
            <C.ImgArea>
                <img src={data.image} alt={data.name} />
            </C.ImgArea>
            <C.InfoArea>
                <h3>{data.name}</h3>
                <p>{data.ingredients}</p>
                <C.OrderArea>
                    <span>Preço</span><br />
                    <C.OrderCount>
                        <strong>R$ {(data.price * orderCount).toFixed(2)}</strong>
                        <C.OrderCountBts>
                            <div onClick={handleOrderCount}>-</div>
                            {orderCount}
                            <div onClick={() => { setOrderCount(orderCount + 1) }}>+</div>
                        </C.OrderCountBts>
                    </C.OrderCount>
                    <C.OrderAreaBts>
                        <span onClick={handleCloseModal}>Voltar</span>
                        <button onClick={handleAddCart}>Adicionar ao carrinho</button>
                    </C.OrderAreaBts>
                </C.OrderArea>
            </C.InfoArea >
        </C.Container >
    )
}