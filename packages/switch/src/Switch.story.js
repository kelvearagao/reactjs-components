import React from 'react';
import {storiesOf} from '@storybook/react';

import Switch from './Switch';

storiesOf('Switch', module)
    .add('default', () => <Switch />)
    .add('round', () => <Switch round />);