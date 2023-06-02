import React from 'react';
import classes from './Input.module.css';
const Input = React.forwardRef((porps, ref) => {
    return (
        < div className={classes.input} >
            <label htmlFor={porps.input.id}>{porps.label}</label>
            <input ref={ref}{...porps.input} />
        </div >
    )

});
export default Input;