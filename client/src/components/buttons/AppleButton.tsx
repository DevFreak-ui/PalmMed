import appleLogo from "../../assets/images/applelogo.svg"

interface AppleButtonProps {
  buttonText: string;
}
const AppleButton = ({buttonText}:AppleButtonProps) => {
  return (
    <button className="flex border-2 border-gray-300 items-center justify-center rounded-lg p-3 h-[50px] w-[200px] ">
      <img src={appleLogo} alt="" />
      <span className=" text-zinc-950 text-[14px] font-medium font-['Inter'] leading-snug">
        {buttonText}
      </span>
    </button>
  );
};

export default AppleButton;
