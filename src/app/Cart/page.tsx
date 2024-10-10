'use client';
import React, { useEffect, useState } from 'react';
import { CartItem } from '../../Components/products';
import BackgroundImage from '../Images/aboutback.jpg';

// Define the shape of user details
interface UserDetails {
  name: string;
  email: string;
  cardNumber?: string; // Optional, only for credit card
  expiryDate?: string; // Optional, only for credit card
  cvv?: string; // Optional, only for credit card
  bankAccount?: string; // Optional, only for bank transfer
}

const Cart: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [paymentMethod, setPaymentMethod] = useState<string>(''); // State for selected payment method
  const [userDetails, setUserDetails] = useState<UserDetails>({
    name: '',
    email: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    bankAccount: ''
  });

  const [thankYouMessage, setThankYouMessage] = useState<string>(''); // State for thank-you message

  useEffect(() => {
    // Fetch cart from localStorage when component mounts
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0); // Calculate total price

  const removeFromCart = (id: string) => {
    const updatedCart = cart.filter(item => item._id !== id);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart)); // Update local storage
  };

  const handlePayment = () => {
    // Show the thank-you message
    setThankYouMessage(`Thank you, ${userDetails.name}! Your payment of RS ${totalPrice} has been processed successfully.`);
    
    // Optionally, reset the cart
    setCart([]);
    localStorage.setItem('cart', JSON.stringify([])); // Clear the local storage
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setUserDetails(prevDetails => ({ ...prevDetails, [name]: value }));
  };

  return (
    <div
      style={{
        backgroundImage: `url(${BackgroundImage.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "900px",
      }}
      className="w-full" // Ensure full width
    >
      <div className='flex justify-center shadow-xl'>
        <h1 className="font-bold text-4xl mb-4 mt-24 shadow-xl">Shopping Cart</h1>
      </div>

      <div className="container mx-auto px-4 py-6 max-w-[600px] shadow-2xl">
        {thankYouMessage ? ( // Display thank-you message if available
          <div className="text-center text-2xl font-bold text-green-600 mb-4">
            {thankYouMessage}
          </div>
        ) : (
          <>
            {cart.length === 0 ? (
              <p className='font-serif text-6xl text-red-600'>Your cart is empty!</p>
            ) : (
              <div>
                {cart.map(item => (
                  <div key={item._id} className="flex justify-between items-center border-b py-4 shadow-xl">
                    <div>
                      <h2 className="text-2xl font-bold">{item.name}</h2>
                      <p>Price: RS {item.price}</p>
                      <p>Quantity: {item.quantity}</p>
                      <p className='font-bold'>Total Amount: RS {item.price * item.quantity}</p>
                    </div>
                    <button
                      className="text-white hover:text-cyan-700 bg-primaryColor rounded-lg"
                      onClick={() => removeFromCart(item._id)}
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
            )}
            <div className="mt-4">
              <h2 className="font-bold text-4xl text-cyan-700">Total Shopping Amount: RS {totalPrice}</h2>
            </div>

            {/* Payment Methods Section */}
            <div className="mt-6">
              <h2 className="text-2xl font-bold mb-2">Payment Methods</h2>
              <select
                className="border rounded-md p-2 mb-4 w-full"
                value={paymentMethod}
                onChange={(e) => {
                  setPaymentMethod(e.target.value);
                  setUserDetails({ name: '', email: '', cardNumber: '', expiryDate: '', cvv: '', bankAccount: '' }); // Reset user details when changing method
                  setThankYouMessage(''); // Clear thank you message on changing payment method
                }}
              >
                <option value="">Select Payment Method</option>
                <option value="credit-card">Credit Card</option>
                <option value="paypal">PayPal</option>
                <option value="bank-transfer">Bank Transfer</option>
              </select>

              {/* User Details Form */}
              {paymentMethod && (
                <div>
                  <h3 className="text-xl font-bold mb-2">User Details</h3>
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={userDetails.name}
                    onChange={handleChange}
                    className="border rounded-md p-2 mb-2 w-full"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={userDetails.email}
                    onChange={handleChange}
                    className="border rounded-md p-2 mb-2 w-full"
                  />
                  {paymentMethod === 'credit-card' && (
                    <>
                      <input
                        type="text"
                        name="cardNumber"
                        placeholder="Card Number"
                        value={userDetails.cardNumber}
                        onChange={handleChange}
                        className="border rounded-md p-2 mb-2 w-full"
                      />
                      <input
                        type="text"
                        name="expiryDate"
                        placeholder="Expiry Date (MM/YY)"
                        value={userDetails.expiryDate}
                        onChange={handleChange}
                        className="border rounded-md p-2 mb-2 w-full"
                      />
                      <input
                        type="text"
                        name="cvv"
                        placeholder="CVV"
                        value={userDetails.cvv}
                        onChange={handleChange}
                        className="border rounded-md p-2 mb-2 w-full"
                      />
                    </>
                  )}
                  {paymentMethod === 'bank-transfer' && (
                    <input
                      type="text"
                      name="bankAccount"
                      placeholder="Bank Account Number"
                      value={userDetails.bankAccount}
                      onChange={handleChange}
                      className="border rounded-md p-2 mb-2 w-full"
                    />
                  )}
                </div>
              )}

              <button
                className="bg-primaryColor text-white rounded-md px-4 py-2 mt-4 w-full hover:bg-cyan-700 cursor-pointer" // Full width button
                onClick={handlePayment}
                disabled={!paymentMethod || !userDetails.name || !userDetails.email || 
                  (paymentMethod === 'credit-card' && 
                    (!userDetails.cardNumber || !userDetails.expiryDate || !userDetails.cvv)) || 
                  (paymentMethod === 'bank-transfer' && !userDetails.bankAccount)} // Disable button if required fields are not filled
              >
                Proceed to Payment
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
