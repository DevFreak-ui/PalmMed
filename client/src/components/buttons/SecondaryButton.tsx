interface PrimaryButtonProps {
  buttonText: string;
  width: string;
  onclick: () => void;
}
const SecondaryButton = ({ buttonText, width, onclick }: PrimaryButtonProps) => {
  return (
    <button
      style={{ width: width }}
      className={` h-[53px]  border border-gray-400  dark:bg-gray-700 dark:border-gray-600 bg-gray-50 text-black dark:text-slate-300 bg-opacity-90 rounded-[9px]`}
      onClick={onclick}
    >
      <span className=" text-base font-semibold font-['Inter'] leading-normal">
        {buttonText}
      </span>
    </button>
  );
};

export default SecondaryButton;
