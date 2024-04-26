import { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios'; // Import axios for making HTTP requests
import { Link } from 'react-router-dom';
import FeatureCard from '../components/cards/FeatureCard';
import GoogleButton from '../components/buttons/GoogleButton.tsx';
import AppleButton from '../components/buttons/AppleButton.tsx';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';


const Register = () => {
    
  const navigate = useNavigate()
  const { enqueueSnackbar } = useSnackbar();

  // State variables to capture form data
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
   
  });

  // Handler to update form data
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
  const { name, value, type } = e.target;
  let val: string | boolean = value;
  if (type === 'checkbox') {
    val = (e.target as HTMLInputElement).checked;
  }
  setFormData((prevData) => ({
    ...prevData,
    [name]: val,
  }));
};
  // console.log(formData);

  // Handler for form submission
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
      console.log(formData);
    try {
      // Send form data to the backend
      const response = await axios.post('http://localhost:6200/api/v1/users/register', formData);
      console.log(response.data); // Handle success response
      enqueueSnackbar("User Created Successfully", { variant: "success" })
      navigate("/login")

    } catch (error) {
      console.error('Registration failed:', error); // Handle error response
       enqueueSnackbar("Registration Error" , {variant:"error"})
    }
  };
  return (
    <div className="min-h-screen bg-[url('./assets/images/register-bg.JPG')] bg-no-repeat bg-center p-2 flex items-center justify-center">
      <section className="flex flex-col lg:flex-row w-[80%] justify-around">
        <div className="w-[45%] flex flex-col mt-8">
          <h1 className="text-neutral-100 text-opacity-95 text-[32px] font-semibold font-['Inter'] leading-[48px] my-6">
            PalmMed Bot
          </h1>

          <article className="py-6 flex-col flex space-y-8">
            <FeatureCard
              title="Get a personalized risk assessment"
              description="Quickly gauge your heart disease risk with a simple health questionnaire."
            />
            <FeatureCard
              title="Learn about your heart health"
              description="Discover key factors affecting your heart and tips to enhance well-being."
            />
            <FeatureCard
              title="Live Support"
              description="Immediate assistance available if your assessment raises any concerns."
            />
          </article>
        </div>

        <section className="rounded-lg shadow-lg max-w-[500px] bg-gray-50">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-black md:text-2xl">
              Create Your Free Account
            </h1>

            <div className="flex items-start justify-between">
              <GoogleButton buttonText="Sign Up with Google" />
              <AppleButton buttonText="Sign Up with Apple" />
            </div>

            <div className="flex items-center text-base text-gray-400  font-bold before:flex-1 before:border-t before:border-gray-500 before:me-6 after:flex-1 after:border-t after:border-gray-500 after:ms-6 dark:text-neutral-500 dark:before:border-neutral-600 dark:after:border-neutral-600">
              or
            </div>

            <form className="space-y-4 md:space-y-4" onSubmit={handleSubmit}>
              <div className="flex space-x-4">
                <div className="w-1/2">
                  <label htmlFor="firstName" className="block mb-2 text-sm font-medium text-gray-900">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstname"
                    id="firstName"
                    className="text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-3.5 bg-gray-200 placeholder-gray-400 focus:ring-purple-500 focus:border-purple-500"
                    placeholder="John"
                    value={formData.firstname}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="w-1/2">
                  <label htmlFor="surname" className="block mb-2 text-sm font-medium text-gray-900">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastname"
                    id="surname"
                    className="text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-3.5 bg-gray-200 placeholder-gray-400 focus:ring-purple-500 focus:border-purple-500"
                    placeholder="Doe"
                    value={formData.lastname}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-3.5 bg-gray-200 placeholder-gray-400 focus:ring-purple-500 focus:border-purple-500"
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
                  className="text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-3.5 bg-gray-200 placeholder-gray-400 focus:ring-purple-500 focus:border-purple-500"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    aria-describedby="terms"
                    type="checkbox"
                    className="w-5 h-5 border rounded focus:ring-3 bg-gray-200 border-gray-500 focus:ring-purple-600 ring-offset-purple-800"
                    name="termsAgreed"
                    
                    required
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="terms" className="font-light text-gray-500">
                    By signing up, you are creating a TaskPulse account, and you agree to TaskPulse’s{' '}
                    <a className="font-medium text-primary-600 underline text-primary-500" href="#">
                      Terms of Use
                    </a>{' '}
                    <span>and</span>{' '}
                    <a className="font-medium text-primary-600 underline text-primary-500" href="#">
                      Privacy Policy
                    </a>
                  </label>
                </div>
              </div>
            <button className='p-3 rounded-xl bg-gray-400'>Create an Account</button>
              <p className="text-zinc-950 text-opacity-90 text-[15px] font-light font-['Inter'] leading-snug">
                Already have an account?{' '}
                <Link to="/login" className="text-violet-500 text-[15px] font-semibold font-['Inter'] leading-snug">
                  Sign In here
                </Link>
              </p>
            </form>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Register;
