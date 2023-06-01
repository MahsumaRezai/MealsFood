import Input from '../../UI/Inpout';
import classes from './MealItemForm.module.css';
const MealsFrom = (props) => {
    return <form className={classes.form} >
        <Input lable="Amount" input={{
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