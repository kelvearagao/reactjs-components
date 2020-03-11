import styled, { keyframes } from 'styled-components'

export const Modal = styled.div`
    display: ${({ isVisible }) => isVisible ? 'block' : 'none'};
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgb(0,0,0);
    background-color: rgba(0,0,0,0.4);
`

const animatetop = keyframes`
    from {top: -300px; opacity: 0;}
    to {top: 10%; opacity: 1;}
`

export const ModalContent = styled.div`
    position: relative;
    background-color: #fefefe;
    margin: auto;
    padding: 0;
    border: 1px solid #888;
    width: 80%;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
    animation-name: ${animatetop};
    animation-duration: 0.4s;
    animation-fill-mode: forwards;
`

export const ModalClose = styled.span`
    padding: 8px 16px;
    color: white;
    float: right;
    font-size: 28px;
    font-weight: bold;

    &:hover, &:focus {
        color: #000000;
        text-decoration: none;
        cursor: pointer;
    }
`

export const ModalHeader = styled.div`
    padding: 2px 16px;
    background-color: #5cb85c;
    color: white;
`

export const ModalBody = styled.div`
    padding: 2px 16px;
`

export const ModalFooter = styled.div`
    padding: 2px 16px;
    background-color: #5cb85c;
    color: white;
`