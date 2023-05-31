import classes from './HeaderCartButton.module.css';
import CartIcon from '../Cart/CartIcon';
const HearderCartButton = (props) => {
    return (
        <button className={classes.button}>
            <span>
                <CartIcon />
            </span>
            <span>
                YourCart
            </span>
            <span className={classes.badge}>3

            </span>


        </button>
    )

}
export default HearderCartButton