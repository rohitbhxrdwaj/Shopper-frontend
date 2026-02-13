import React, { createContext, useState } from "react";
import all_product from "../assets/all_product";

// create the context
export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < all_product.length; index++) {
    cart[index] = 0; // use index if no product id
    // If products have an id field, you can use: cart[all_product[index].id] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] > 0 ? prev[itemId] - 1 : 0, // prevent negative
    }));
  };

  // Function to calculate total sum of cart
  const getTotalCartAmount = () => {
    let total = 0;
    for (let i = 0; i < all_product.length; i++) {
      const quantity = cartItems[i] || 0;
      total += quantity * all_product[i].new_price; // or all_product[i].price
    }
    return total;
  };

  const contextValue = {
    all_product,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount, // include this function in context
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
