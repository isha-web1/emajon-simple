import React from "react";
import "./Cart.css";

const Cart = (props) => {
    const cart = props.cart;

    let total = 0;
    let totalShipping = 0;
    for(const product of cart){
        total = total + product.price;
        totalShipping = totalShipping + product.shipping;
    }

    const tax = total*7/100;
    const grandTotal = total + totalShipping + tax;

  return (
    <div className="cart">
      <h1>order summery</h1>
      <h3>total order : {cart.length}</h3>
       <h3>total price :${total}</h3>
       <h3>total shipping :${totalShipping}</h3>
       <h3>tax :${tax.toFixed(2)}</h3>
       <h2>grand total :${grandTotal.toFixed(2)}</h2>
    </div>
  );
};

export default Cart;
