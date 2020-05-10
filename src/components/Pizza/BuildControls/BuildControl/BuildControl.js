import React from 'react';
import classes from './BuildControl.module.css';

const buildControl = (props) => (
    <div className={classes.BuildControl}>
        <div className={classes.Label}>{props.label}</div>
        <div
            onClick={props.added ? props.toppingRemoved: props.toppingAdded}
            className={`${classes.controlButton} ${props.added ? `${classes.Less}` : `${classes.More}`}`}
        ><strong>{props.added ? '-' : '+'}</strong></div>
    </div>
)

export default buildControl;