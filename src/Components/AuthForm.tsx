"use client"; // This ensures the component runs in client-side rendering
import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // Ensure you are importing from 'next/navigation'

interface AuthFormProps {
  isLogin: boolean; // To distinguish between login and signup
}

const AuthForm: React.FC<AuthFormProps> = ({ isLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter(); // Initialize router

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simulate login or signup success
    if (isLogin) {
      alert("Logged in successfully!");
      router.push('/'); // Navigate to the home page
    } else {
      alert("Signed up successfully!"); // Show success message for signup
      router.push('/'); // Navigate to the home page after signup
    }
  };

  return (
    <main className=''>
    <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:shadow-2xl">
      <h2 className="text-3xl font-bold mb-6 text-center text-orange-600">{isLogin ? "Login" : "Sign Up"}</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="border border-gray-300 rounded-md p-3 mb-4 w-full focus:outline-none focus:ring-2 focus:ring-orange-500 transition duration-300"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        className="border border-gray-300 rounded-md p-3 mb-4 w-full focus:outline-none focus:ring-2 focus:ring-orange-500 transition duration-300"
      />
      <button
        type="submit"
        className="w-full bg-orange-500 text-white font-bold p-3 rounded-md hover:bg-orange-600 transition duration-300 transform hover:scale-105"
      >
        {isLogin ? "Login" : "Sign Up"}
      </button>
    </form>
    </main>
  );
};

export default AuthForm;
