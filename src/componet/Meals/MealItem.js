import MealsFrom from './MealsFrom';
import classes from './MealsItme.module.css'
const MealItem = (props) => {
    const price = `$${props.price.toFixed(2)}`;

    return (
        <li className={classes.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>{price}</div>
            </div>
            <div>
                <MealsFrom />
            </div>
        </li>
    );
};

export default MealItem;