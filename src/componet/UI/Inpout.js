import classes from './Input.module.css'
const Input = (porps) => {
    return (
        < div className={classes.input} >
            <label htmlFor={porps.input.id}>{porps.label}</label>
            <input {...porps.input} />
        </div >
    )

}
export default Input;