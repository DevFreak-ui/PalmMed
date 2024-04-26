import GoogleButton from "./buttons/GoogleButton.tsx";
import AppleButton from "./buttons/AppleButton.tsx";
import { Link } from "react-router-dom";


const LoginForm = () => {
  return (
    <section className=" rounded-lg shadow-lg  w-[500px] bg-gray-50 ">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
        <h1 className="text-xl font-bold leading-tight tracking-tight text-black md:text-2xl ">
          Sign In to Your Account
        </h1>

        {/* <p className="font-bold text-center text-xl">PalmMed</p> */}

        <form className="space-y-4 md:space-y-4" action="#">
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Your email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="   text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-3.5 bg-gray-500 bg-opacity-10  placeholder-gray-400  focus:ring-purple-500 focus:border-purple-500"
              placeholder="prince@reallygreattech.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              className="text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-3.5 bg-gray-500 bg-opacity-10 placeholder-gray-400  focus:ring-purple-500 focus:border-purple-500"
              required
            />
          </div>
          <div className="py-2">
           <button>Login</button>
          </div>

          <p className="text-zinc-950 text-opacity-90 text-[15px] font-light font-['Inter'] leading-snug">
            Don't have an account?{" "}
            <Link
              to="/"
              className="text-violet-500 text-[15px] font-semibold font-['Inter'] leading-snug "
            >
              Register here
            </Link>
          </p>

          <div className="flex items-center text-base text-gray-400  font-bold before:flex-1 before:border-t before:border-gray-500 before:me-6 after:flex-1 after:border-t after:border-gray-500 after:ms-6 dark:text-neutral-500 dark:before:border-neutral-600 dark:after:border-neutral-600">
            or
          </div>
          <div className="flex items-start justify-between">
            <GoogleButton buttonText="Sign In with Google" />
            <AppleButton buttonText="Sign In with Apple" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default LoginForm;
