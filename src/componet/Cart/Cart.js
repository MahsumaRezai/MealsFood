import classes from './Cart.module.css';


const Cart = (porps) => {
    const cartItems = (<ul className={classes['cart-items ']}>{[
        { id: "m1", name: "sushi", amount: 2, price: 23.65 }].map((item) => <li>{item.name}</li>)}
    </ul>
    );
    return (
        <div>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>35.76</span>
            </div>
            <div className={classes.action}>
                <button className={classes['button--all']}>Close</button>
                <button className={classes.button}>Order</button>

            </div>

        </div>
    )
}
export default Cart;