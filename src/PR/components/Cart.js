import React, { useContext } from "react";
import { CartContext } from "./CartContext";

export const Cart = () => {
  const [cart, setCart] = useContext(CartContext);
  const totalPrice = cart.reduce((acc, curr) => acc + curr.amount, 0);
  return (
    <div>
      <span>Item in Cart : {cart.length}</span>
      <span> total price: {totalPrice}</span>
    </div>
  );
};
