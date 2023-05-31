import { Fragment } from "react";
import AvilableMeals from "./AvilableMeals";
import MealsSummery from "./MealsSummery";


const Meals = () => {
    return (
        <Fragment>
            <MealsSummery />
            <AvilableMeals />
        </Fragment>
    )
}
export default Meals;