import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
  const { name, img, seller, quantity, price, ratings } = props.pro;

  const handleAddToCart = props.addFunction
  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info">
        <h4 className="product-name">{name}</h4>
        <h3>Price: {price}</h3>
        <p>Manufacturer: {seller}</p>
        <p>Rating: {ratings} Stars</p>
      </div>
      <button onClick={() => handleAddToCart(props.pro)} className="btn-cart">
        Add to Cart 

         <FontAwesomeIcon icon={faShoppingCart} />
        </button>
    </div>
  );
};

export default Product;
