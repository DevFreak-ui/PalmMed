import { VscClose } from "react-icons/vsc";
import { BiEditAlt } from "react-icons/bi";
import { FaUserDoctor } from "react-icons/fa6";
import { IoCalendarOutline } from "react-icons/io5";  
import { useAppDispatch } from "../../hooks";
import { closeViewPatientDetailsModal } from "../../redux/features/modal/modalSlice";


interface ViewPatientDataModalProps {
  reportId: string
}
const ViewPatientDataModal = ({ reportId }: ViewPatientDataModalProps) => {
  const dispatch = useAppDispatch();

  const handleInnerClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.stopPropagation();
  };

  const handleCloseViewPatientDetailsModal = () => {
    dispatch(closeViewPatientDetailsModal());
  };

  return (
    <div
      className="fixed top-0 left-0 bg-[black]/[.55] w-screen h-screen flex justify-end items-center z-50"
      onClick={handleCloseViewPatientDetailsModal}
    >
      <div
        className="w-[676px] h-screen bg-[#FFFFFF] dark:bg-gray-800 dark:text-white dark:border-gray-700  p-2 md:py-6 md:px-6 text-white/[.5] font-thin overflow-y-auto"
        onClick={handleInnerClick}
      >
        <div className="flex flex-col justify-center text-center text-white mb-6 relative ">
          <button className="absolute right-[1rem] top-[-1.5rem] text-xl text-black dark:text-white p-2 m-4 hover:bg-black/10 rounded-md">
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
              Patient Report Details for Report: {reportId}
            </h1>
          </div>

          <div className="text-start mt-10 ">
            <h1 className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Patient Full Name
            </h1>
            <div className="sm:text-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 placeholder-gray-400 focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white">
              <span className="text-xl font-bold">John Doe</span>
            </div>
          </div>

          <section className=" flex text-black dark:text-slate-300 mt-8">
            <div className="flex flex-col w-1/2 space-y-4">
              <article className="flex space-x-4 items-center text-black dark:text-slate-300 text-base font-light font-['Inter'] leading-normal">
                <span>
                  <FaUserDoctor size={16} />
                </span>
                <span> Doctor Assigned </span>
              </article>
              <article className="flex space-x-4 items-center text-black dark:text-slate-300 text-base font-light font-['Inter'] leading-normal">
                <span>
                  <IoCalendarOutline size={16} />
                </span>
                <span>Date Generated</span>
              </article>
              <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
              <article className="flex space-x-4 items-center text-black dark:text-slate-300 text-base font-light font-['Inter'] leading-normal">
                <span>Prediction Results</span>
              </article>
              <article className="flex space-x-4 items-center text-black dark:text-slate-300 text-base font-light font-['Inter'] leading-normal">
                <span>Confidence Level</span>
              </article>
            </div>

            <div className="flex flex-col w-1/2 space-y-4">
              <article className="flex space-x-4 items-center text-black  dark:text-slate-300 text-base font-light font-['Inter'] leading-normal">
                <span className="font-bold"> Dr. Moses Arhinful </span>
              </article>
              <article className="flex space-x-4 items-center text-black  dark:text-slate-300 text-base font-light font-['Inter'] leading-normal">
                <span className="font-bold"> April 20, 2024 </span>
              </article>
              <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
              <article className="flex space-x-4 items-center text-black  dark:text-slate-300 text-sm font-light leading-normal">
                <span className="font-bold"> Heart Disease Present </span>
              </article>
              <article className="flex space-x-4 items-center text-black  dark:text-slate-300 text-sm font-light leading-normal">
                <span className="font-bold"> 54% </span>
              </article>
            </div>
          </section>
          <div className="my-5 text-left font-regular text-sm text-black  dark:text-slate-300">
            <label className="font-medium my-1" htmlFor="">
              AI Assisted Generated Context
            </label>
            <p>
              Congratulations! Based on the AI model's prediction with a
              confidence level of 54.7, I am pleased to inform you that you do
              not have heart disease. This is great news and a testament to your
              overall heart health. Keep up the good work and continue to
              prioritize your well-being. If you have any concerns or questions,
              feel free to reach out.
            </p>
          </div>

          {/* Patient Details */}
          <div className="my-8 w-full">
            <h1 className="text-left  my-2 font-medium">Patient Details</h1>
            <table className="w-full py-4 text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 font-medium">
              <tbody>
                <tr className="odd:bg-white odd:dark:bg-gray-700/50 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                  <th
                    scope="row"
                    className="pr-6 py-1 font-medium whitespace-nowrap"
                  >
                    Age
                  </th>
                  <td>32</td>
                </tr>
                <tr className="odd:bg-white odd:dark:bg-gray-700/50 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                  <th
                    scope="row"
                    className="pr-6 py-1 font-medium whitespace-nowrap"
                  >
                    Gender
                  </th>
                  <td>Male</td>
                </tr>
                <tr className="odd:bg-white odd:dark:bg-gray-700/50 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                  <th
                    scope="row"
                    className="pr-6 py-1 font-medium whitespace-nowrap"
                  >
                    Chest Pain Types
                  </th>
                  <td>xx</td>
                </tr>
                <tr className="odd:bg-white odd:dark:bg-gray-700/50 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                  <th
                    scope="row"
                    className="pr-6 py-1 font-medium whitespace-nowrap"
                  >
                    Serum Cholestrol
                  </th>
                  <td>xx</td>
                </tr>
                <tr className="odd:bg-white odd:dark:bg-gray-700/50 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                  <th
                    scope="row"
                    className="pr-6 py-1 font-medium whitespace-nowrap"
                  >
                    Fasting Blood Sugar
                  </th>
                  <td>xx</td>
                </tr>
                <tr className="odd:bg-white odd:dark:bg-gray-700/50 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                  <th
                    scope="row"
                    className="pr-6 py-1 font-medium whitespace-nowrap"
                  >
                    Resting ECG
                  </th>
                  <td>xx</td>
                </tr>
                <tr className="odd:bg-white odd:dark:bg-gray-700/50 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                  <th
                    scope="row"
                    className="pr-6 py-1 font-medium whitespace-nowrap"
                  >
                    Maximum Heart Rate
                  </th>
                  <td>xx</td>
                </tr>
                <tr className="odd:bg-white odd:dark:bg-gray-700/50 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                  <th
                    scope="row"
                    className="pr-6 py-1 font-medium whitespace-nowrap"
                  >
                    Exercise Induced Angina
                  </th>
                  <td>xx</td>
                </tr>
                <tr className="odd:bg-white odd:dark:bg-gray-700/50 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                  <th
                    scope="row"
                    className="pr-6 py-1 font-medium whitespace-nowrap"
                  >
                    Depression Induced by Exercise
                  </th>
                  <td>xx</td>
                </tr>
                <tr className="odd:bg-white odd:dark:bg-gray-700/50 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                  <th
                    scope="row"
                    className="pr-6 py-1 font-medium whitespace-nowrap"
                  >
                    Peak Exercise Segment
                  </th>
                  <td>xx</td>
                </tr>
                <tr className="odd:bg-white odd:dark:bg-gray-700/50 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                  <th
                    scope="row"
                    className="pr-6 py-1 font-medium whitespace-nowrap"
                  >
                    Thallium
                  </th>
                  <td>xx</td>
                </tr>
                <tr className="odd:bg-white odd:dark:bg-gray-700/50 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                  <th
                    scope="row"
                    className="pr-6 py-1 font-medium whitespace-nowrap"
                  >
                    Major vessels colored by fluoroscopy
                  </th>
                  <td>xx</td>
                </tr>
              </tbody>
            </table>
          </div>
          <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

          {/* Doctor's Verdict */}
          <div className="my-5 text-left font-normal text-sm text-black  dark:text-slate-300 space-y-2">
            <label className="font-medium" htmlFor="">
              Doctor's final verdict
            </label>
            <p className="dark:bg-gray-700/80 p-3 rounded-lg">
              Congratulations! You will die soon
            </p>
          </div>

          <button className="inline-flex justify-end">Modify Verdict</button>
        </div>
      </div>
    </div>
  );
};

export default ViewPatientDataModal;
