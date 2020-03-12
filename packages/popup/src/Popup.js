import React, { useState } from 'react'
import { Popup, PopupContent } from './Popup.style'

export default ({ children, trigger, open = false }) => {
    const [show, setShow] = useState(open)

    return (
        <Popup onClick={() => setShow(prev => !prev)} onBlur={() => setShow(false)}>
            { trigger }
            <PopupContent show={show}>
                { children }
            </PopupContent>
        </Popup>
    )
}