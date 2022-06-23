import React from "react";
import CartContext from "./cart-context";

function CartProvider(props) {
  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: () => {},
    removeItemL: (id) => {},
  };
  return <CartContext.Provider>{props.children}</CartContext.Provider>;
}

export default CartProvider;
