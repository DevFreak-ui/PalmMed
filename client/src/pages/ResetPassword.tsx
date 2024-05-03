/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import { useSnackbar } from 'notistack';
import React, { useRef, useEffect } from 'react';
import { baseURL } from '../services/baseURL';
import { useParams, useNavigate } from 'react-router-dom';

const ResetPassword = () => {
    const navigate = useNavigate()
    const { token } = useParams<string>()
    const { enqueueSnackbar } = useSnackbar();
    const passwordRef = useRef<HTMLInputElement>(null)
    const confirmPasswordRef = useRef<HTMLInputElement>(null)


useEffect(() => {
  const fetchUser = async () => {
      try {
        const response = await axios.get(`${baseURL}/users/verify/${token}`)
        if (response.status === 200 || response.status === 201) {
          enqueueSnackbar("Proceed to reset your password", { variant: "success" });
        }
      } catch (error: any) {
        if (error.response && error.response.status === 404) {
          enqueueSnackbar("Cannot reset password, please request for new token", { variant: "error" });
        } else {
            enqueueSnackbar("Link Expired, please request for new token to reset your password", { variant: "error" });
            navigate("/password/forgot")
        }
      }
    
  }

  fetchUser()
}, [token, enqueueSnackbar])











  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const password = passwordRef.current?.value
    const confirmPassword = confirmPasswordRef.current?.value
    if (password === undefined || confirmPassword === undefined) {
        enqueueSnackbar("Fileds cannot be empty", { variant: "error" });
      } else if (password !== confirmPassword) {
        enqueueSnackbar("Passwords do not match", { variant: "error" });
      } else if (password.length < 7 || confirmPassword.length < 7) {
        enqueueSnackbar("Passwords must be at least 7 characters long", { variant: "error" });
      }

      const data = {
        password
      }


      try {
        const response = await axios.post(`${baseURL}/users/reset-password/${token}`, data)
        if (response.status === 200 || response.status === 201) {
          enqueueSnackbar("Password reset is Sucessful", { variant: "success" });
          navigate("/login/patient")
        }
      } catch (error: any) {
        if (error.response && error.response.status === 404) {
          enqueueSnackbar("Something went wrong retry again", { variant: "error" });
        } else {
          console.error("An error occurred:", error);
        }
      }

  };

  return (
    <div className="min-h-screen bg-slate-300 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Reset Your Password</h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Please create a new password for your account.
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                New Password
              </label>
              <div className="mt-1">
                <input
                  ref={passwordRef}
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  required
                  min={7}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Enter your new password"
                />
              </div>
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                Confirm Password
              </label>
              <div className="mt-1">
                <input
                  ref={confirmPasswordRef}
                  min={7}
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  autoComplete="new-password"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Confirm your new password"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Reset Password
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;