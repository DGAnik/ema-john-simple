import React from 'react';
import './Product.css'

const Product = (props) => {
  const {name, img, seller, quantity, price, ratings} = props.pro;
  console.log(props.pro)
  return (
    <div className='product'>
      <img src={img} alt="" />
      <h3>{name}</h3>
      <h3>Price: {price}</h3>
      <p>Manufacturer: {seller}</p>
      <p>Rating: {ratings}</p>

    </div>
  );
};

export default Product;