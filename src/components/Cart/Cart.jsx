import React from "react";
import "./Cart.css";

const Cart = ({cart}) => {
 let totalPrice = 0;
 let totalShipping = 0;
 for(const product of cart){
  totalPrice = totalPrice + product.price;
  totalShipping = totalShipping + product.shipping;
 }
 const tax = totalPrice *7/100;
 const grandTotal = (totalPrice + tax).toFixed(2)
  // const {cart} = props
  // console.log(props.cart.length)
  return (
    <div className="cart">
      <h4>Order summary</h4>
      <p>Selected Items: {cart.length}</p>
      <p>Total Price: ${totalPrice}</p>
      <p>Shipping: {totalShipping}</p>
      <p>Tax: {tax.toFixed(2)}</p>
      <h6>Grand Total: {grandTotal}</h6>
    </div>
  );
};

export default Cart;
