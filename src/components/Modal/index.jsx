import React from "react"
import * as C from './style'

export const Modal = ({ status, setStatus }) => {
    const handleCloseModal = (ev) => {
        if (ev.target.classList.contains('modalBg')) {
            setStatus(false)
        }
    }

    return (
        <C.Container className="modalBg" active={status} onClick={handleCloseModal}>
            <C.Modal>

            </C.Modal>
        </C.Container>
    )
}