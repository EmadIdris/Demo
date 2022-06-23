import React from "react";

const CartContext = React.createContext({
    items:[],
    totalAmount:0,
    addItem : ()=>{},
    removeItemL :(id) =>{}
})

export default CartContext;