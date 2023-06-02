import CartContext from "./cart-context"

const CartProiver = (props) => {
    const addItemCartHandler = item => { };
    const removeItemCartHandler = id => { }
    const cartContext = {
        items: [],
        totalAmount: 0,
        addItem: addItemCartHandler,
        removeItm: removeItemCartHandler

    }





    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>

}

export default CartProiver