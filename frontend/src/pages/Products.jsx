import React from "react";
import { products } from "../products/data";
import { useCart } from "../context/cart";
import { NavLink } from "react-router-dom";
const Products = () => {
  const [cart, setCart] = useCart(); 
  console.log(cart, "cart value is")
  const add = (item) => {
    setCart((prevCart) => {
      return [...prevCart, item];
    });
  };

  return (
    <div>
      <h1>Products Page</h1>
      Click on Cart <NavLink to={"/cart"}><button>Cart</button></NavLink>
      <h2>{cart.length}</h2>
      {products.map((item) => {
        return (
          <div key={item.name}>
            <li>
              {item.name} <button onClick={() => add(item)}>ADD</button>
            </li>
            <li>{item.color}</li>
            <li>{item.size}</li>
            <br />
          </div>
        );
      })}
    </div>
  );
};

export default Products;
