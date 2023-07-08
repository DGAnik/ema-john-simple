import React, { useEffect, useState } from "react";
import "./Shop.css";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";
import { addToDb, getShoppingCart } from "../../utilities/fakedb";

const Shop = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    const storedCart = getShoppingCart();
    const savedCart = [];
    // step-1: loop through the object to get ID
    for (const id in storedCart) {
      // step-2: loop through the products array to find the matching products
      const addedCart = products.find((product) => product.id === id);
      // step-3: setting the matched product's quantity according to local storage
      const quantity = storedCart[id];
      if (addedCart) {
        addedCart.quantity = quantity;
        savedCart.push(addedCart);
      }
    }
    setCart(savedCart);
  }, [products]);

  const [cart, setCart] = useState([]);
  const handleAddToCart = (product) => {
    let newCart = [];
    // const newCart = [...cart, product];
    const exists = cart.find((pd) => pd.id === product.id);
    if (!exists) {
      product.quantity = 1;
      newCart = [...cart, product];
    } else {
      exists.quantity = exists.quantity + 1;
      const remaining = cart.filter((pd) => pd.id !== product.id);
      newCart = [...remaining, exists];
    }
    setCart(newCart);
    addToDb(product.id);
  };

  return (
    <div className="shop-container">
      <div className="product-container">
        {products.map((product) => (
          <Product
            key={product.id}
            pro={product}
            addFunction={handleAddToCart}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
