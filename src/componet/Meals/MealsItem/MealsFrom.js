import Input from '../../UI/Inpout';
import classes from './MealItemForm.module.css';
import { useRef, useState } from 'react';

const MealsFrom = (props) => {
    const amountInpurRef = useRef();
    const [amountIsVild, setAmountIsVild] = useState(true)

    const formSubmitHanler = (event) => {
        event.preventDefault();
        const enterdAmount = amountInpurRef.current.value;
        const enterdAmountNumber = +enterdAmount;
        if (enterdAmount.trim().lenght === 0 || enterdAmountNumber < 1 || enterdAmountNumber > 5) {
            setAmountIsVild(false);
            return;
        }

        props.onAddToCart(enterdAmountNumber)
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
        {!amountIsVild && <p>kkdkffkfk</p>}
    </form>
}
export default MealsFrom;