import React from 'react';
import {storiesOf} from '@storybook/react';

import Alert from '.';

storiesOf('Alert', module).add('default', () => <Alert>{'Hello!!!'}</Alert>);