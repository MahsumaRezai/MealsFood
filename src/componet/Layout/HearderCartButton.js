import { useContext } from 'react';
import classes from './HeaderCartButton.module.css';
import CartIcon from '../Cart/CartIcon';
import CartContext from '../store/cart-context';
const HearderCartButton = (props) => {
    const cartCTX = useContext(CartContext);
    const numberCartOfItme = cartCTX.items.reduce((curNumber, item) => {
        return curNumber + item.amount

    }, 0);
    return (
        <button className={classes.button} onClick={props.onClik}>
            <span>
                <CartIcon />
            </span>
            <span>
                YourCart
            </span>
            <span className={classes.badge}>{numberCartOfItme}
            </span>


        </button>
    )

}
export default HearderCartButton;

