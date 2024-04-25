import SignUpForm from "../components/SignUpForm";
import taskpulselogo from "../assets/images/logo-white.svg";
import FeatureCard from "../components/cards/FeatureCard";

const Register = () => {
  return (
    <div className="min-h-screen   bg-[url('./assets/images/register-bg.JPG')] bg-no-repeat bg-center p-2 flex items-center justify-center ">
      <section className="flex flex-col lg:flex-row w-[80%]  justify-around">
        <div className="w-[45%] flex flex-col ">
          <img src={taskpulselogo} alt="logo" width={97} />
          <h1 className="text-neutral-100 text-opacity-95 text-[32px] font-semibold font-['Inter'] leading-[48px] my-6">
            Task Pulse
          </h1>

          <article className="py-6 flex-col flex space-y-8">
            <FeatureCard
              title="Effortless Task Management"
              description="Jumpstart your productivity with our intuitive interface and time-tracking features."
            />
            <FeatureCard
              title="Customizable Access"
              description="Manage team roles with flexible permissions, ensuring privacy and collaborative efficiency."
            />
            <FeatureCard
              title="Invite People to Collaborate on Projects"
              description="Bring your team together to track progress and achieve goals with collaborative task management."
            />
          </article>
        </div>

        <SignUpForm />
      </section>
    </div>
  );
};

export default Register;
