import { Fragment } from "react";
import image from '../../assest/meals.jpg';
import classes from './Header.module.css'
import HearderCartButton from "./HearderCartButton";

const Header = (prop) => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <HearderCartButton />
            </header>
            <div className={classes['main-image']}>
                <img src={image} alt="" />
            </div>

        </Fragment>
    )

}
export default Header