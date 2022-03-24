import React from "react"
import * as C from './style'

export const CategoryItem = ({ id, title, img, active, setActive }) => {
    let isActive = id === active

    return (
        <C.LinkArea active={isActive}>
            <img src={img} alt={title} title={title} onClick={() => { setActive(id) }} />
        </C.LinkArea>
    )
}