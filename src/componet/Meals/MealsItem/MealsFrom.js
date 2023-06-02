import Input from '../../UI/Inpout';
import classes from './MealItemForm.module.css';
import { useRef } from 'react';

const MealsFrom = (props) => {
    const amountInpurRef = useRef();
    const formSubmitHanler = (event) => {
        event.preventDefault();


    }
    return <form className={classes.form} onSubmit={formSubmitHanler} >
        <Input
            ref={amountInpurRef}
            lable="Amount" input={{
                id: "amount",
                type: "number",
                min: "1",
                max: "5",
                setp: "1",
                defaultValue: "1 "

            }} />
        <button>+ Add</button>
    </form>
}
export default MealsFrom;