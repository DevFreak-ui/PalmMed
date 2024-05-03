import { VscClose } from "react-icons/vsc";
import { FaUserDoctor } from "react-icons/fa6";
import { IoCalendarOutline } from "react-icons/io5";
import { useAppDispatch,useAppSelector } from "../../hooks";
import { closeViewPatientDetailsModal } from "../../redux/features/modal/modalSlice";
import { BsStars } from "react-icons/bs";
import { Link } from "react-router-dom";
import axios from "axios";
import { baseURL } from "../../services/baseURL";
import { reportTypes } from "../../types/reportDetails";
import { useState,useEffect } from "react";
import moment from "moment";
const PatientViewReportDetails = () => {
  const [reportDetails, setReportDetails] = useState(reportTypes);
    const reportId = useAppSelector((state) => {
      return state.reportId.reportId;
    });
  
  
   const fetchReportDetails = async () => {
     try {
       const res = await axios.get(`${baseURL}/reports/${reportId}`);
       setReportDetails(res.data);
     } catch (error) {
       console.error(error, "Report Does not exist");
     }
   };

   useEffect(() => {
     fetchReportDetails();
   }, []);

   console.log(reportDetails);

 
    const dispatch = useAppDispatch();

  const handleInnerClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.stopPropagation();
  };

    const handleCloseViewPatientDetailsModal = () => {
    dispatch(closeViewPatientDetailsModal())
  } 
  
  console.log(reportDetails)


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
          <button
            onClick={handleCloseViewPatientDetailsModal}
            className="absolute right-[-1rem] top-[-1.5rem] text-xl text-black dark:text-white p-2 m-4 hover:bg-black/10 rounded-md"
          >
            <VscClose />
          </button>

          <span></span>
          <div className="mb-1 mt-14">
            <h1 className="text-zinc-950 dark:text-white text-opacity-95 text-[32px] font-semibold leading-[48px]">
              Report Details for{" "}
              {reportDetails.report.prediction_id.user_id.firstname}
              {""} {reportDetails.report.prediction_id.user_id.lastname}
            </h1>
          </div>

          <div className="text-start mt-10 ">
            <h1 className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Full Name
            </h1>
            <div className="sm:text-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 placeholder-gray-400 focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white">
              <span className="text-lg font-semibold">
                {reportDetails.report.prediction_id.user_id.firstname}
                {""} {reportDetails.report.prediction_id.user_id.lastname}
              </span>
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
                <span className="font-bold">
                  {" "}
                  Dr. {
                    reportDetails.report.prediction_id.doctor_id.firstname
                  }{" "}
                  {reportDetails.report.prediction_id.doctor_id.lastname}{" "}
                </span>
              </article>
              <article className="flex space-x-4 items-center text-black  dark:text-slate-300 text-base font-light font-['Inter'] leading-normal">
                <span className="font-bold">
                  {" "}
                  {moment(reportDetails.report.createdAt).format(
                    "YY-MM-DD"
                  )}{" "}
                </span>
              </article>
              <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
              <article className="flex space-x-4 items-center text-black  dark:text-slate-300 text-sm font-light leading-normal">
                <span className="font-bold">
                  {" "}
                  {
                    reportDetails.report.prediction_id.prediction.prediction
                  }{" "}
                </span>
              </article>
              <article className="flex space-x-4 items-center text-black  dark:text-slate-300 text-sm font-light leading-normal">
                <span className="font-bold">
                  {" "}
                  {
                    reportDetails.report.prediction_id.prediction.confidence
                  }%{" "}
                </span>
              </article>
            </div>
          </section>

          {/* Patient Details */}
          <div className="my-8 w-full">
            <h1 className="text-left  my-2 font-medium">Submitted Details</h1>
            <table className="w-full py-4 text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 font-medium">
              <tbody>
                <tr className="odd:bg-white odd:dark:bg-gray-700/50 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                  <th
                    scope="row"
                    className="pr-6 py-1 font-medium whitespace-nowrap"
                  >
                    Age
                  </th>
                  <td>{reportDetails.report.prediction_id.age}</td>
                </tr>
                <tr className="odd:bg-white odd:dark:bg-gray-700/50 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                  <th
                    scope="row"
                    className="pr-6 py-1 font-medium whitespace-nowrap"
                  >
                    Gender
                  </th>
                  <td>
                    {reportDetails.report.prediction_id.sex === 0
                      ? "Male"
                      : "Female"}
                  </td>
                </tr>
                <tr className="odd:bg-white odd:dark:bg-gray-700/50 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                  <th
                    scope="row"
                    className="pr-6 py-1 font-medium whitespace-nowrap"
                  >
                    Chest Pain Types
                  </th>
                  <td>
                    {reportDetails.report.prediction_id.cp === 0
                      ? "Typical Angina"
                      : reportDetails.report.prediction_id.cp === 1
                      ? "Atypical Angina"
                      : reportDetails.report.prediction_id.cp === 2
                      ? "Non-Anginal pain"
                      : reportDetails.report.prediction_id.cp === 3
                      ? "Asymptomatic"
                      : "Not Available"}
                  </td>
                </tr>
                <tr className="odd:bg-white odd:dark:bg-gray-700/50 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                  <th
                    scope="row"
                    className="pr-6 py-1 font-medium whitespace-nowrap"
                  >
                    Serum Cholestrol
                  </th>
                  <td>{reportDetails.report.prediction_id.chol}</td>
                </tr>
                <tr className="odd:bg-white odd:dark:bg-gray-700/50 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                  <th
                    scope="row"
                    className="pr-6 py-1 font-medium whitespace-nowrap"
                  >
                    Fasting Blood Sugar
                  </th>
                  <td>
                    {reportDetails.report.prediction_id.fbs === 1
                      ? "Above 120mg/dl"
                      : reportDetails.report.prediction_id.cp === 0
                      ? "Below 120mg/dl"
                      : "Not Available"}
                  </td>
                </tr>
                <tr className="odd:bg-white odd:dark:bg-gray-700/50 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                  <th
                    scope="row"
                    className="pr-6 py-1 font-medium whitespace-nowrap"
                  >
                    Resting ECG
                  </th>
                  <td>
                    {reportDetails.report.prediction_id.restecg === 0
                      ? "Normal"
                      : reportDetails.report.prediction_id.restecg === 1
                      ? "Having ST-T Wave Abnormality"
                      : reportDetails.report.prediction_id.restecg === 2
                      ? "Left Ventricular Hypothrophy"
                      : "Not Available"}
                  </td>
                </tr>
                <tr className="odd:bg-white odd:dark:bg-gray-700/50 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                  <th
                    scope="row"
                    className="pr-6 py-1 font-medium whitespace-nowrap"
                  >
                    Maximum Heart Rate
                  </th>
                  <td>{reportDetails.report.prediction_id.thalach}</td>
                </tr>
                <tr className="odd:bg-white odd:dark:bg-gray-700/50 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                  <th
                    scope="row"
                    className="pr-6 py-1 font-medium whitespace-nowrap"
                  >
                    Exercise Induced Angina
                  </th>
                  <td>
                    {" "}
                    {reportDetails.report.prediction_id.exang === 0
                      ? "No"
                      : reportDetails.report.prediction_id.exang === 1
                      ? "Yes"
                      : "Not Available"}
                  </td>
                </tr>
                <tr className="odd:bg-white odd:dark:bg-gray-700/50 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                  <th
                    scope="row"
                    className="pr-6 py-1 font-medium whitespace-nowrap"
                  >
                    Depression Induced by Exercise
                  </th>
                  <td>{reportDetails.report.prediction_id.oldpeak}</td>
                </tr>
                <tr className="odd:bg-white odd:dark:bg-gray-700/50 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                  <th
                    scope="row"
                    className="pr-6 py-1 font-medium whitespace-nowrap"
                  >
                    Peak Exercise Segment
                  </th>
                  <td>
                    {reportDetails.report.prediction_id.slope === 0
                      ? "Upslopping"
                      : reportDetails.report.prediction_id.slope === 1
                      ? "Flat"
                      : reportDetails.report.prediction_id.slope === 2
                      ? "Downslopping"
                      : "Not Available"}
                  </td>
                </tr>
                <tr className="odd:bg-white odd:dark:bg-gray-700/50 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                  <th
                    scope="row"
                    className="pr-6 py-1 font-medium whitespace-nowrap"
                  >
                    Thallium
                  </th>
                  <td>
                    {reportDetails.report.prediction_id.thal === 0
                      ? "Normal"
                      : reportDetails.report.prediction_id.thal === 1
                      ? "Fixed Defect"
                      : reportDetails.report.prediction_id.thal === 2
                      ? "Reversible Defect"
                      : "Not Available"}
                  </td>
                </tr>
                <tr className="odd:bg-white odd:dark:bg-gray-700/50 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                  <th
                    scope="row"
                    className="pr-6 py-1 font-medium whitespace-nowrap"
                  >
                    Major vessels colored by fluoroscopy
                  </th>
                  <td>{reportDetails.report.prediction_id.ca}</td>
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
              {reportDetails.report.verdict}
            </p>
          </div>

          {/* Get Insight */}
          <Link
            to="/"
            className="flex text-sm justify-end text-md dark:text-gray-400 space-x-1"
          >
            <p>Click me</p>
            <span className="animate-spin">
              <BsStars size={18} />
            </span>
            <span>to find out more about your report</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PatientViewReportDetails;
