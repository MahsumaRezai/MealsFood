import React from 'react';
const CartContext = React.createContext({
    items: [],
    totalAmount: 0,
    addItem: (item) => { },
    removeItm: (id) => { }

})
export default CartContext;