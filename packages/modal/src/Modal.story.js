import React, { useState } from 'react';
import {storiesOf} from '@storybook/react';

import Modal, { ModalBody, ModalHeader, ModalFooter } from '.';

const Wrapper = ({ render }) => {
    const [isVisible, setIsVisible] = useState(true)

    const handleClose = () => {
        setIsVisible(false)
    }
    
    return (
        <div>
            <button onClick={() => setIsVisible(true)}>Show</button>
            { render({isVisible, handleClose }) }
        </div>
    )
}

storiesOf('Modal', module)
    .add('default', () =>
         <Wrapper render={props => (
            <Modal {...props}>
                <p>Test</p>
            </Modal>
         )} />
    )
    .add('default', () =>
         <Wrapper render={props => (
            <Modal {...props}>
                <ModalHeader>
                    <h2>Modal Header</h2>
                </ModalHeader>
                <ModalBody>
                    <p>Some text in the Modal Body</p>
                    <p>Some other text...</p>
                </ModalBody>
                <ModalFooter>
                    <h3>Modal Footer</h3>
                </ModalFooter>
            </Modal>
         )} />
    );