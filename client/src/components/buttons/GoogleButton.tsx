import googleLogo from  "../../assets/images/googlelogo.svg"

interface GoogleButtonProps {
  buttonText: string;
}
const GoogleButton = ({ buttonText }: GoogleButtonProps) => {
  return (
    <button className="flex border-2 border-gray-300 items-center justify-center rounded-lg p-3 h-[50px] w-[200px] ">
      <img src={googleLogo} alt="" />
      <span className="ms-3 text-zinc-950 text-[14px] font-medium font-['Inter'] leading-snug">
        {buttonText}
      </span>
    </button>
  );
};

export default GoogleButton;
