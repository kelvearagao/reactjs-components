import React from 'react'
import { Switch, Slider } from './Switch.style'

export default ({ round = false }) => (
    <Switch>
        <input type="checkbox" />
        <Slider round={round} />
    </Switch>
)