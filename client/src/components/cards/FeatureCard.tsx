import checkIcon from "../../assets/images/check-circle.svg";

interface FeatureProps {
  title: string;
  description: string;
}
const FeatureCard = ({ title, description }: FeatureProps) => {
  return (
    <div className="flex items-start ">
      <img src={checkIcon} alt="checkicon" width={24} className="mt-1 me-3" />
      <div className="space-y-1">
        <h2 className="text-neutral-100 text-opacity-95 text-2xl font-semibold  leading-9">
          {title}
        </h2>
        <p className="text-white text-[17px] font-medium font-['Inter'] leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;
