interface PrimaryButtonProps {
  buttonText: string,
  width: string,
  onclick: ()=>void
}
const PrimaryButton = ({buttonText,width,onclick}:PrimaryButtonProps) => {
  return (
    <button style={{width:width}}
      className={` h-[53px] bg-violet-600 bg-opacity-90 rounded-[9px]`}
      onClick={onclick}
    >
      <span className="text-white text-base font-semibold font-['Inter'] leading-normal">
        {buttonText}
      </span>
    </button>
  );
}

export default PrimaryButton
