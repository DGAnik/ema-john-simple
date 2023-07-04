import React from "react";
import "./Product.css";

const Product = (props) => {
  const { name, img, seller, quantity, price, ratings } = props.pro;
  console.log(props.pro);
  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info">
        <h4 className="product-name">{name}</h4>
        <h3>Price: {price}</h3>
        <p>Manufacturer: {seller}</p>
        <p>Rating: {ratings} Stars</p>
      </div>
        <button className="btn-cart">Add to Cart</button>
    </div>
  );
};

export default Product;
