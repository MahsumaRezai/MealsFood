import React, { Fragment } from 'react';
import classes from './Modal.module.css';
import ReactDom from 'react-dom'
const Backdorp = (porps) => {
    return <div className={classes.backdrop} />
}
const ModalOverly = (props) => {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    )
}
const portlelement = document.getElementById('overley');


const Modal = (props) => {
    return <Fragment>
        {ReactDom.createPortal(<Backdorp />, portlelement)}
        {ReactDom.createPortal(<ModalOverly>{props.children}</ModalOverly>, portlelement)}

    </Fragment>

}
export default Modal;