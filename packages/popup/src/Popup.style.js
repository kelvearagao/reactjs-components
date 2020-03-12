import styled, { keyframes, css } from 'styled-components'

const fadeIn = keyframes`
    from {opacity: 0;}
    to {opacity: 1;}
`

export const Popup = styled.div`
    position: relative;
    display: inline-block;
    cursor: pointer;
`

export const PopupContent = styled.div`
    visibility: hidden;
    width: 160px;
    background-color: #555;
    color: #fff;
    text-align: center;
    border-radius: 6px;
    padding: 8px 0;
    position: absolute;
    z-index: 1;
    bottom: 125%;
    left: 50%;
    margin-left: -80px;

    ${({ show }) => show && css`
        visibility: visible;
        animation: ${fadeIn} 1s;
    `}

    &::after {
        content: "";
        position: absolute;
        top: 100%;
        left: 50%;
        margin-left: -5px;
        border-width: 5px;
        border-style: solid;
        border-color: #555 transparent transparent transparent;
    }
`