import { useReducer } from 'react';
import CartContext from "./cart-context";
const defaultCartState = {
    item: [],
    totalAmount: 0
}
const cartReducer = (state, action) => {
    if (action.type === "ADD") {
        const updataItem = state.items.concat(action.item);
        const udataToyalAmount = state.totalAmount + action.item.price * action.item.amount;
        return {
            items: updataItem,
            totalAmount: udataToyalAmount
        }

    }
}

const CartProiver = (props) => {
    const [cartState, disptchCartAction] = useReducer(cartReducer, defaultCartState)
    const addItemCartHandler = item => {
        disptchCartAction({ type: "ADD", item: item })
    };
    const removeItemCartHandler = id => {
        disptchCartAction({ type: "REMOVE", id: id })
    }
    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemCartHandler,
        removeItm: removeItemCartHandler

    }





    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>

}

export default CartProiver