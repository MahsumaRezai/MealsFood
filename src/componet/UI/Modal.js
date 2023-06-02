import React, { Fragment } from 'react';
import classes from './Modal.module.css';
import ReactDom from 'react-dom'
const Backdorp = (porps) => {
    return <div className={classes.backdrop} onClick={porps.onClose} />
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
        {ReactDom.createPortal(<Backdorp onClose={props.onClose} />, portlelement)}
        {ReactDom.createPortal(<ModalOverly>{props.children}</ModalOverly>, portlelement)}

    </Fragment>

}
export default Modal;