import React from "react";
import "./Cart.css";

const Cart = ({ cart }) => {
  let totalPrice = 0;
  let totalShipping = 0;
  let quantity = 0;
  for (const product of cart) {
    // if(quantity === 0){
    //   quantity = 1;
    // }
    totalPrice = totalPrice + product.price * product.quantity;
    totalShipping = totalShipping + product.shipping * product.quantity;
    quantity = quantity + product.quantity;
  }
  const tax = (totalPrice * 7) / 100;
  const grandTotal = (totalPrice + tax).toFixed(2);
  // const {cart} = props
  // console.log(props.cart.length)
  return (
    <div className="cart">
      <h4>Order summary</h4>
      <p>Selected Items: {quantity}</p>
      <p>Total Price: ${totalPrice}</p>
      <p>Shipping: ${totalShipping}</p>
      <p>Tax: {tax.toFixed(2)}</p>
      <h6>Grand Total: {grandTotal}</h6>
    </div>
  );
};

export default Cart;
