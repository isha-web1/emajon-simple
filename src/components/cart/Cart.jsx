import React from "react";
import "./Cart.css";

const Cart = (props) => {
    const cart = props.cart;

    let total = 0;
    for(const product of cart){
        total = total + product.price;
    }


  return (
    <div className="cart">
      <h1>order summery</h1>
      <h3>total order : {cart.length}</h3>
       <h3>total price :${total}</h3>
       <h3>total shipping :$</h3>
       <h3>tax :$</h3>
       <h2>grand total :$</h2>
    </div>
  );
};

export default Cart;
