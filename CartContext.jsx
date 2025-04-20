import React, { createContext, useState } from 'react';

// Create the CartContext
export const CartContext = createContext();

// Define the CartProvider component
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Function to add an item to the cart
  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.id === item.id);  //storing the item if it already exists
      if (existingItem) {
        // If the item already exists, increment its quantity
        return prevItems.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        // If the item doesn't exist, add it with quantity 1
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });
  };

  // Function to remove an item from the cart
  const removeFromCart = (id) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)  //for keeping the item which have quantity>0
    );
  };

  // Provide the cartItems and functions to the context
  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart,setCartItems }}>
      {children}
    </CartContext.Provider>
  );
};