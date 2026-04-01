'use client';
import axios from 'axios';


import { useState } from 'react';
import Link from 'next/link';

export default function Signin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  

  const handleSignin = () => {
   axios.post("http://localhost:3000/api/user",{
    email,
    password
   })
   
         
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-sm">
        <h1 className="text-3xl font-bold mb-6 text-center">Sign In</h1>

       

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your password"
          />
        </div>

        <button
          onClick={handleSignin}
          className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg font-medium text-sm hover:bg-blue-700 transition-colors"
        >
          Sign In
        </button>

        <p className="text-center mt-4 text-sm text-gray-600">
          Don&apos;t have an account?{' '}
          <Link href="/signup" className="text-blue-600 underline hover:text-blue-800">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}