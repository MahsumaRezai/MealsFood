import { useContext } from 'react';
import classes from './HeaderCartButton.module.css';
import CartIcon from '../Cart/CartIcon';
import CartContext from '../store/cart-context';
const HearderCartButton = (props) => {
    const cartCTX = useContext(CartContext);
    const numberCartOfItme = cartCTX.items.length;
    return (
        <button className={classes.button} onClick={props.onClik}>
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