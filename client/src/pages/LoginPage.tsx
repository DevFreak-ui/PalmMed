import Illustration from "../assets/images/illustration.svg";

import LoginForm from "../components/LoginForm";

const Login = () => {
  return (
    <div className="min-h-screen bg-gray-800 p-2 flex items-center justify-center ">
      <section className="flex flex-col lg:flex-row w-[80%]  justify-around ">
        <LoginForm />

        <div className="w-[45%]  flex flex-col  items-center justify-center">
          <div className=" p-12 bg-[url('./assets/Ellipse.svg')]  bg-center ">
            <img src={Illustration} alt="logo" width={448} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
