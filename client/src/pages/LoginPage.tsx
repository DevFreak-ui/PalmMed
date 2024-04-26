import  { useState } from "react";
import Illustration from "../assets/images/illustration.svg";
import GoogleButton from "../components/buttons/GoogleButton.tsx";
import AppleButton from "../components/buttons/AppleButton.tsx";
import { Link } from "react-router-dom";
import axios from "axios"; // Import axios for making HTTP requests
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const Login = () => {

const navigate = useNavigate()
  const { enqueueSnackbar } = useSnackbar();


  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:6200/api/v1/users/login", formData);
      console.log(response.data); // Handle response from the server as needed
      // Redirect user or perform additional actions upon successful login
      enqueueSnackbar("Login Successful", { variant: "success" })
      navigate("/")
    } catch (error) {
      console.error("Login failed:");
      enqueueSnackbar("Login Error" , {variant:"error"})
      // Handle login failure, show error message to the user, etc.
    }
  };

  return (
    <div className="min-h-screen bg-gray-800 p-2 flex items-center justify-center">
      <section className="flex flex-col lg:flex-row w-[80%] justify-around">
        <section className="rounded-lg shadow-lg w-[500px] bg-gray-50">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-black md:text-2xl">
              Sign In to Your PalmMed Account
            </h1>

            <form className="space-y-4 md:space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-3.5 bg-gray-500 bg-opacity-10  placeholder-gray-400  focus:ring-purple-500 focus:border-purple-500"
                  placeholder="prince@reallygreattech.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-3.5 bg-gray-500 bg-opacity-10 placeholder-gray-400  focus:ring-purple-500 focus:border-purple-500"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="py-2">
                <button type="submit" className="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Sign In
                </button>
              </div>

              <p className="text-zinc-950 text-opacity-90 text-[15px] font-light font-['Inter'] leading-snug">
                Don't have an account?{" "}
                <Link
                  to="/"
                  className="text-violet-500 text-[15px] font-semibold font-['Inter'] leading-snug"
                >
                  Register here
                </Link>
              </p>

              <div className="flex items-center text-base text-gray-400  font-bold before:flex-1 before:border-t before:border-gray-500 before:me-6 after:flex-1 after:border-t after:border-gray-500 dark:text-neutral-500 dark:before:border-neutral-600 dark:after:border-neutral-600">
                or
              </div>
              <div className="flex items-start justify-between">
               
                 <GoogleButton buttonText="Sign In with Google" />
            <AppleButton buttonText="Sign In with Apple" />
              </div>
            </form>
          </div>
        </section>
        <div className="w-[45%] flex flex-col items-center justify-center">
          <div className="p-12 bg-[url('./assets/Ellipse.svg')]  bg-center ">
            {/* Replace the below image with your Illustration component */}
            <img src={Illustration} alt="logo" width={448} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
