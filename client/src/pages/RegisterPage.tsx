import SignUpForm from "../components/SignUpForm"
import FeatureCard from "../components/cards/FeatureCard"

const Register = () => {
  return (
    <div className="min-h-screen   bg-[url('./assets/images/register-bg.JPG')] bg-no-repeat bg-center p-2 flex items-center justify-center ">
      <section className="flex flex-col lg:flex-row w-[80%]  justify-around">
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

        <SignUpForm />
      </section>
    </div>
  );
};

export default Register;
