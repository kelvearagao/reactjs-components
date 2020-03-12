import React from 'react';
import {storiesOf} from '@storybook/react';

import Popup from '.';

storiesOf('Popup', module)
    .add('default', () => (
        <div style={{ padding: "100px" }}>
            <Popup trigger={<button>Click me!</button>}>
                <span>A simple Popup</span>
            </Popup>
        </div>
    ))
    .add('open', () => (
        <div style={{ padding: "100px" }}>
            <Popup open trigger={<button>Click me!</button>}>
                <span>A simple Popup</span>
            </Popup>
        </div>
    ));