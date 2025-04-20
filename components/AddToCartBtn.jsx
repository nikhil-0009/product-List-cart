import React, { useContext, useState } from 'react'
import { CartContext } from '../CartContext';

const AddToCartBtn = ({id,name,price}) => {
  const { cartItems, addToCart, removeFromCart } = useContext(CartContext);
  const cartItem = cartItems.find((item) => item.id === id);
  const quantity = cartItem ? cartItem.quantity : 0;

  const firstClick = (e) => {
    if (quantity === 0) {
      e.preventDefault();
      addToCart({ id, name, price });
    }
  };
  const handleAdd = (e) => {
    e.stopPropagation(); // Prevent event bubbling if necessary
    addToCart({ id, name, price});
  };

  const handleRemove = (e) => {
    e.stopPropagation(); // Prevent event bubbling if necessary
    removeFromCart(id);
  };
  return (
    <div >
        <button
  className={`flex gap-2 items-center justify-between py-2 px-4 rounded-4xl relative bottom-5 left-9 w-[130px] max-md:left-20
    ${quantity === 0 ? 'bg-white' : 'bg-orange-500'}`}
  onClick={firstClick}
>
  {
    quantity === 0 ? (
      <>
        <img src="../assets/images/icon-add-to-cart.svg" alt="" />
        <p className="font-bold text-[12px]">Add To Cart</p>
      </>
    ) : (
      <>
        <img src="../assets/images/icon-decrement-quantity.svg" alt=""  onClick={handleRemove} />
        <p className="font-extrabold text-[12px]">{quantity}</p>
        <img src="../assets/images/icon-increment-quantity.svg" alt="" onClick={handleAdd} />
      </>
    )
  }
        </button>
    </div>
  )
}

export default AddToCartBtn