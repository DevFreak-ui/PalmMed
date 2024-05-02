/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import React, { useRef } from 'react';
import { baseURL } from '../services/baseURL';
import { useSnackbar } from 'notistack';

const ForgotPassword = () => {
    const { enqueueSnackbar } = useSnackbar();
    const emailRef = useRef<HTMLInputElement>(null)

//   const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     const email = emailRef.current?.value
//     const data = {
//         email
//     }
//     const response = await axios.post(`${baseURL}/users/forgot-password`, data)
//     if(response.status === 200 || response.status === 201){
//         enqueueSnackbar("Reset Link is sent to your email please check", { variant: "success" });
//     }

//     if(response.status === 404){
//         enqueueSnackbar("Something went wrong please check your email", { variant: "error" });
//     }
//   };

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = emailRef.current?.value;
    const data = {
      email
    };
  
    try {
      const response = await axios.post(`${baseURL}/users/forgot-password`, data);
  
      if (response.status === 200 || response.status === 201) {
        enqueueSnackbar("Reset Link is sent to your email please check", { variant: "success" });
      }
    } catch (error: any) {
      if (error.response && error.response.status === 404) {
        enqueueSnackbar("Something went wrong please check your email", { variant: "error" });
      } else {
        // Handle other types of errors
        console.error("An error occurred:", error);
      }
    }
  };
  











  return (
    <div className="min-h-screen bg-slate-300 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Forgot Your Password?</h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Don't worry! Please enter your email address below and we'll send you a link to reset your password.
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <div className="mt-1">
                <input
                  ref={emailRef}
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Send Reset Link
              </button>
            </div>
          </form>
        </div>
      </div>
      <p className="mt-4 text-center text-sm text-gray-600">Need further assistance? Please contact our support team at <a href="tel:123-456-7890" className="text-indigo-600 hover:text-indigo-700">123-456-7890</a>.</p>
    </div>
  );
};

export default ForgotPassword;