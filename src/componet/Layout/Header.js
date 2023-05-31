import { Fragment } from "react";
import image from '../../assest/meals.jpg';
import classes from './Header.module.css'

const Header = (prop) => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <button>Cart</button>
            </header>
            <div className={classes['main-image']}>
                <img src={image} />
            </div>

        </Fragment>
    )

}
export default Header