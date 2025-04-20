import React, { useContext } from 'react';
import { CartContext } from '../CartContext'; 
import OrderConfirmed from './OrderConfirmed';

const UserCart = ({image}) => {
  const { cartItems,setCartItems } = useContext(CartContext);

  // Calculate total price
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const quan=cartItems.reduce((sum,item)=> sum+item.quantity,0)

  return (
    <div className='w-[400px] min-h-[200px] bg-white self-start rounded-2xl p-4 pb-2 max-md:w-[300px] max-md:mt-2.5'>
      {cartItems.length === 0 ? (
        <>
          <h1 className='font-bold text-orange-700 text-2xl'>Your Cart (0)</h1>
          <div className="flex flex-col items-center justify-center text-center gap-2">
            <img src="../assets/images/illustration-empty-cart.svg" alt="Empty Cart" className='w-[100px]' />
            <p className='text-[12px]'>Your items added will appear here!</p>
          </div>
        </>
      ) : (
        <>
          <div className='flex flex-col justify-between'>
            <div>
            <h1 className='font-bold text-orange-700 text-2xl max-md:text-xl'>Your Cart ({quan})</h1>
            <ul className='mt-4'>
              {cartItems.map((item) => (
                <li key={item.id} className='flex flex-col justify-between mb-2'>
                  <div>{item.name} </div>
                  <div className='flex justify-between'>
                  <div >
                    <span className='text-orange-600 font-extrabold'> {item.quantity} x </span> &nbsp;
                    <span className='font-bold text-gray-600'>@ ${item.price}</span> 
                  </div>
                  <div>
                      <span className='font-extrabold text-xl max-md:text-md'>${item.price * item.quantity}</span>
                  </div>
                  </div>
                  <hr />
                </li>
                
              ))}
            </ul>
            </div>
            <div className='my-4 font-bold flex justify-between'>
              <span className='text-2xl max-md:text-xl'>Order Total </span>
              <span className='font-extrabold text-2xl max-md:text-xl'>${total}</span>
            </div>
            <div className="flex items-center gap-2 justify-center bg-[hsl(13,31%,94%)] py-2">
              <img src="../assets/images/icon-carbon-neutral.svg" alt="Carbon Neutral Icon" />
              <p className='max-md:text-sm'>This is a <span className="font-bold">carbon-neutral</span> delivery</p>
            </div>
            <OrderConfirmed cartItems={cartItems} image={image} setCartItems={setCartItems}/>
          </div>
        </>
      )}
    </div>
  );
};

export default UserCart;