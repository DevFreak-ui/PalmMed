import { VscClose } from "react-icons/vsc";
import { closeFormModal } from "../../redux/features/modal/modalSlice";
import { useAppDispatch } from "../../hooks";


const FormModal = () => {

  const dispatch = useAppDispatch();

  const handleInnerClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.stopPropagation();
  };

  const handleCloseFormModal = () => {
    dispatch(closeFormModal());
  };

  return (
    <div
      className=" fixed top-0 left-0 bg-[black]/[.55] w-screen h-screen flex justify-center items-center z-50 "
      onClick={handleCloseFormModal}
    >
      <div
        className=" w-5/6 md:w-[600px]  bg-[#FFFFFF] dark:bg-gray-800 text-zinc-950  dark:border-gray-700  rounded-xl p-2 md:py-6 md:px-6 text-white/[.5] font-thin  "
        onClick={handleInnerClick}
      >
        <div className="flex flex-col justify-center  text-center text-white mb-6 relative  p-6 ">
          <button
            className="absolute right-[-1rem] top-[-1.5rem] text-xl  text-black dark:text-white  p-2 m-4 hover:bg-black/10 rounded-md "
            onClick={handleCloseFormModal}
          >
            <VscClose />
          </button>
          <div className="mb-10">
            <h1 className=" text-zinc-950   dark:text-white text-opacity-95 text-[32px] font-semibold  leading-[48px]">
              Welcome to PalmMed
            </h1>
            <p className="text-black dark:text-white text-opacity-40 text-lg font-normal font-['Inter'] leading-[27px]">
              Please Input the data below so we can carefully anaylze your symptons for diagnosis
            </p>
          </div>
          <form action="#" className="my-8">
            <div>
              <input
                type="email"
                name="email"
                id="email"
                className="   text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-3.5 bg-white bg-opacity-10  placeholder-gray-400  focus:ring-purple-500 focus:border-purple-500"
                placeholder="prince@reallygreattech.com"
                required
              />
            </div>
          </form>

          <div className="w-full flex items-center h-[47px] bg-[#E1DCF1] bg-opacity-25 border-b border-purple-900 border-opacity-90 my-8">
            <span className=" ml-3 text-black text-opacity-40 text-base font-medium font-['Inter'] leading-normal">
              0 Project Members
            </span>
          </div>
          <div className="mx-auto my-8">
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormModal;
