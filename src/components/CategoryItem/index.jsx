import React from "react"
import * as C from './style'

export const CategoryItem = ({ id, title, img, active, setActive }) => {
    let isActive = id === active

    return (
        <C.LinkArea active={isActive} data-tip={title} data-for='tip-top' >
            <img src={img} alt={title} onClick={() => { setActive(id) }} />
        </C.LinkArea>
    )
}