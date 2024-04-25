import teacherLogoImage from "../assets/images/teacherimage.svg";

import LoginForm from "../components/LoginForm";

const Login = () => {
  return (
    <div className="min-h-screen   bg-[url('./assets/images/login-bg.JPG')] bg-no-repeat bg-center p-2 flex items-center justify-center ">
      <section className="flex flex-col lg:flex-row w-[80%]  justify-around ">
        <LoginForm />

        <div className="w-[45%]  flex flex-col  items-center justify-center">
          <div className=" p-12 bg-[url('./assets/Ellipse.svg')]  bg-center ">
            <img src={teacherLogoImage} alt="logo" width={448} />
          </div>

          <h3 className="text-white text-opacity-95 text-2xl font-semibold font-['Inter'] leading-9 mt-10">
            We miss you already!
          </h3>
        </div>
      </section>
    </div>
  );
};

export default Login;
