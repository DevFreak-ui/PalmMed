import { VscClose } from "react-icons/vsc";
import { BiEditAlt } from "react-icons/bi";


import userslogo from "../../assets/images/users-alt.svg";
import tag from "../../assets/images/tag-alt.svg";
import rightarrow from "../../assets/images/sign-right.svg";
import clock from "../../assets/images/clock.svg";
import calendar from "../../assets/images/calendar.svg";
import bookmark from "../../assets/images/bookmark.svg";
import { useAppDispatch } from "../../hooks";
import { closeViewPatientDetailsModal } from "../../redux/features/modal/modalSlice";

const ViewPatientDataModal = () => {
 
    const dispatch = useAppDispatch();

  const handleInnerClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.stopPropagation();
  };

    const handleCloseViewPatientDetailsModal = () => {
    dispatch(closeViewPatientDetailsModal())
} 


  return (
    <div
      className="fixed top-0 left-0 bg-[black]/[.55] w-screen h-screen flex justify-end items-center z-50"
     onClick={handleCloseViewPatientDetailsModal}
    >
      <div
        className="w-[676px] h-screen bg-[#FFFFFF] dark:bg-gray-800 dark:text-white dark:border-gray-700  p-2 md:py-6 md:px-6 text-white/[.5] font-thin"
        onClick={handleInnerClick}
      >
        <div className="flex flex-col justify-center text-center text-white mb-6 relative ">
          <button
            className="absolute right-[1rem] top-[-1.5rem] text-xl text-black dark:text-white p-2 m-4 hover:bg-black/10 rounded-md"
        
          >
            <BiEditAlt />
          </button>

          <button
           onClick={handleCloseViewPatientDetailsModal}
            className="absolute right-[-1rem] top-[-1.5rem] text-xl text-black dark:text-white p-2 m-4 hover:bg-black/10 rounded-md"
          >
            <VscClose />
          </button>

          <span></span>
          <div className="mb-1 mt-14">
            <h1 className="text-zinc-950 dark:text-white text-opacity-95 text-[32px] font-semibold leading-[48px]">
              Patient Report Details
            </h1>
          </div>

          <div className="text-start mt-10 ">
            <h1 className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Patient Full Name 
            </h1>
            <div className="sm:text-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-3.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 placeholder-gray-400 focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white">
              <span className="text-2xl font-bold">
                John Doe
              </span>
            </div>
          </div>

          <section className=" flex text-black dark:text-slate-300 mt-8">
            <div className="flex flex-col w-1/2 space-y-4">
              <article className="flex space-x-4 items-center text-black dark:text-slate-300 text-base font-light font-['Inter'] leading-normal">
                <span>
                  <img src={userslogo} alt="users" />
                </span>
                <span> Doctor Assigned </span>
              </article>
              <article className="flex space-x-4 items-center text-blackdark:text-slate-300  text-base font-light font-['Inter'] leading-normal">
                <span>
                  <img src={tag} alt="users" />
                </span>
                <span> Status </span>
              </article>
              <article className="flex space-x-4 items-center text-blackdark:text-slate-300  text-base font-light font-['Inter'] leading-normal">
                <span>
                  <img src={rightarrow} alt="users" />
                </span>
                <span> Priority </span>
              </article>
              <article className="flex space-x-4 items-center text-black dark:text-slate-300 text-base font-light font-['Inter'] leading-normal">
                <span>
                  <img src={calendar} alt="users" />
                </span>
                <span> Due Date </span>
              </article>
              <article className="flex space-x-4 items-center text-black dark:text-slate-300 text-base font-light font-['Inter'] leading-normal">
                <span>
                  <img src={clock} alt="users" />
                </span>
                <span> Total Time Tracked </span>
              </article>
            </div>

            <div className="flex flex-col w-1/2 space-y-4">
            <article className="flex space-x-4 items-center text-black  dark:text-slate-300 text-base font-light font-['Inter'] leading-normal">
                <span className="font-bold"> Dr. Moses Arhinful </span>
              </article>
              <article className="flex space-x-4 items-center text-black  dark:text-slate-300 text-base font-light font-['Inter'] leading-normal">
                <span className="font-bold"> In Progress </span>
              </article>
              <article className="flex space-x-4 items-center text-black dark:text-slate-300  text-base font-light font-['Inter'] leading-normal">
                <span>
                  <img src={bookmark} alt="users" />
                </span>
                <span className="font-bold"> High </span>
              </article>
              <article className="flex space-x-4 items-center text-black  dark:text-slate-300 text-base font-light font-['Inter'] leading-normal">
                <span className="font-bold"> April 20, 2024 </span>
              </article>
              <article className="flex space-x-4 items-center text-black  dark:text-slate-300 text-base font-light font-['Inter'] leading-normal">
                <span>
                  {" "}
                  <span className="font-bold ">13 </span>h{" "}
                </span>
              </article>
            </div>
          </section>
        </div>
      </div>
 
    </div>
  );
};

export default ViewPatientDataModal;
