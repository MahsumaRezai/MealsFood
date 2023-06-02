import Modal from '../UI/Modal';
import classes from './Cart.module.css';


const Cart = (porps) => {
    const cartItems = (<ul className={classes['cart-items']}>{[
        { id: "m1", name: "sushi", amount: 2, price: 23.65 }].map((item) => <li>{item.name}</li>)}
    </ul>
    );
    return (
        <Modal onClose={porps.onClose}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>35.76</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--all']} onClick={porps.onClose}>Close</button>
                <button className={classes.button}>Order</button>

            </div>

        </Modal>
    )
}
export default Cart;