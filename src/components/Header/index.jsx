import React, { useState } from "react"
import * as C from './style'
import LogoImg from '../../assets/logo.png'

export const Header = ({ search, onSearch }) => {
    const [active, setActive] = useState(false)

    const handleBlur = () => {
        if (!search) {
            setActive(false)
        }
    }

    return (
        <C.Container active={active}>
            <img src={LogoImg} alt="logo" />
            <input
                type="text"
                placeholder="Digite algo..."
                value={search}
                onChange={ev => { onSearch(ev.target.value) }}
                onFocus={() => { setActive(true) }}
                onBlur={handleBlur}
            />
        </C.Container>
    )
}