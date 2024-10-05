'use client';
import React, { useEffect, useState } from 'react';
import { CartItem } from '../../Components/products'; // Import the CartItem interface
import BackgroundImage from '../Images/aboutback.jpg'
const Cart = () => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    // Load cart from localStorage if available
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0); // Calculate total price

  const removeFromCart = (id: string) => {
    const updatedCart = cart.filter(item => item._id !== id);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart)); // Update local storage
  };

  return (
    <div style={{
      backgroundImage: `url(${BackgroundImage.src})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      minHeight: "100vh",
      opacity: "100%",
    }}
  >
    <div className="container mx-auto px-4 py-6">
      <h1 className="font-bold text-4xl mb-4">Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <div>
          {cart.map(item => (
            <div key={item._id} className="flex justify-between items-center border-b py-4">
              <div>
                <h2 className="text-xl">{item.name}</h2>
                <p>Price: RS {item.price}</p>
                <p>Quantity: {item.quantity}</p>
              </div>
              <button
                className="text-red-500 hover:text-red-700"
                onClick={() => removeFromCart(item._id)}
              >
                Remove
              </button>
            </div>
          ))}
          <div className="mt-4">
            <h2 className="font-bold text-2xl">Total Price: RS {totalPrice}</h2>
          </div>
        </div>
      )}
    </div>
    </div>
  );
};

export default Cart;
