import React from "react"
import * as C from './style'
import { useHistory, useLocation } from "react-router-dom"

export const MenuItem = ({ title, icon, link }) => {
    const history = useHistory()
    const location = useLocation()

    let isActive = location.pathname === link

    return (
        <C.LinkArea data-tip={title} data-for='tip-right' onClick={() => { history.push(link) }} active={isActive}>
            <img src={icon} alt={icon} />
        </C.LinkArea>
    )
}