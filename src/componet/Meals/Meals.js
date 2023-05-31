import { Fragment } from "react";
import MealsSummary from "./MealsSummery";
import AvilableMeals from "./AvilableMeals";


const Meals = () => {
    return (
        <Fragment>
            <MealsSummary />
            <AvilableMeals />
        </Fragment>
    )
}
export default Meals;