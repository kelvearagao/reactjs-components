import React from 'react'
import { Modal, ModalContent, ModalClose } from './Modal.style'

export default ({ handleClose, isVisible, children }) => {
    return (
        <Modal isVisible={isVisible} onClick={handleClose} >
            <ModalContent onClick={e => e.stopPropagation()}>
                <ModalClose onClick={handleClose}>&times;</ModalClose>
                { children }
            </ModalContent>
        </Modal>
    )
}