import React, { useState } from "react";

const OrderConfirmed = ({ cartItems, image,setCartItems }) => {
  const [isClicked, setIsClicked] = useState(false);
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const handleClick = () => {
    setIsClicked(true); 
  };

  const closeDialog = () => {
    setIsClicked(false);
    setCartItems([])
  };
  //   console.log(image);
  const arr = cartItems.map((item, i) => {
    return { ...item, image: image[i] };
  });
  console.log(arr);
  return (
    <div>
      {!isClicked ? (
        <button
          onClick={handleClick}
          className="my-4 bg-amber-700 text-white rounded-3xl py-2 w-full"
        >
          Confirm Order
        </button>
      ) : (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-opacity-30 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-xl p-6 w-[400px] text-center">
            <div className="flex items-center gap-2 mb-3">
              <img
                src="../assets/images/icon-order-confirmed.svg"
                alt=""
                className="w-[30px]"
              />
              <span className="text-2xl font-bold ">Order Confirmed!</span>
            </div>
            <p className="text-gray-500">Your order has been successfully placed.</p>

            <ul className="mt-4 space-y-4">
              {arr.map((item) => (
                <li
                  key={item.id}
                  className="flex items-center justify-between p-4 bg-white rounded-lg shadow"
                >
                  {/* Left: Image */}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded"
                  />

                  {/* Middle: Item details */}
                  <div className="flex-1 px-4 text-left">
                    <div className="font-semibold text-gray-800">
                      {item.name}
                    </div>
                    <div className="text-sm text-gray-600 ">
                      <span className="text-orange-600 font-extrabold">
                        {item.quantity} x{" "}
                      </span>
                      <span className="font-bold text-gray-600">
                        @ ${item.price}
                      </span>
                    </div>
                  </div>

                  {/* Right: Total */}
                  <div className="text-right text-lg font-bold text-gray-900">
                    ${item.price * item.quantity}
                  </div>
                </li>
              ))}
            </ul>
            <div className="flex justify-between mt-4.5">
                <p className="font-bold text-xl">Order Total</p>
                <p className="font-bold text-2xl">${total}</p>
            </div>
            <button
              onClick={closeDialog}
              className="mt-6 bg-amber-700 text-white px-4 py-2 rounded-full hover:bg-amber-800 transition w-[60%]"
            >
              Start a new Order
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderConfirmed;
{
  /* <div>
                      
                  </div> */
}
