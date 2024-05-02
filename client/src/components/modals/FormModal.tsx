import { VscClose } from "react-icons/vsc";
import { closeFormModal } from "../../redux/features/modal/modalSlice";
import { useAppDispatch } from "../../hooks";
import { FaCircleInfo } from "react-icons/fa6";
import { useState } from "react";
import axios from "axios";
import { openPredictionResultsModal } from "../../redux/features/modal/modalSlice";
import { baseURL } from "../../services/baseURL";
import { updatePredictionResults } from "../../redux/features/predictionResult/predictionResultSlice";

interface IFormModal {
  id: string;
}
const FormModal = ({ id }: IFormModal) => {
  const [isLoading, setIsLoading] = useState(false);
  const [alertHidden, setAlertHidden] = useState(false);

  const handleOpenPredictionResultsModal = () => {
    dispatch(openPredictionResultsModal());
  };

  const [formData, setFormData] = useState({
    "age": "23", //
    "sex": "0", //
    "cp": "0", //
    "trestbps": "3", //
    "chol": "3",
    "fbs": "1", //
    "restecg": "0", //
    "thalach": "0", //
    "exang": "1", //
    "oldpeak": "0", //
    "slope": "2", //
    "ca": "2",
    "thal": "0", //
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === "checkbox" ? checked : value;
    setFormData((prevData) => ({
      ...prevData,
      [name]: val,
    }));
  };

  const dispatch = useAppDispatch();

  const handleInnerClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.stopPropagation();
  };

  const handleCloseFormModal = () => {
    dispatch(closeFormModal());
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    console.log(formData);
    setIsLoading(true);
    try {
      e.preventDefault();
      // show loader
      // const finaljson = JSON.stringify(formData)
      const response = await axios.post(
        `${baseURL}/predictions/predict/${id}`,
        formData
      );
      console.log(response.data);
      const gptData = response.data.resData;
      const mainResults = response.data.results;

      console.log(gptData, mainResults);
      if (response.data) {
        console.log(response.data);
        dispatch(updatePredictionResults(response.data));
        handleCloseFormModal();
        handleOpenPredictionResultsModal();
        setIsLoading(false);
      }
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  const Loader = () => {
    return (
      <div role="status">
        <svg
          aria-hidden="true"
          className="w-12 h-12 text-gray-200 animate-spin dark:text-gray-600 fill-white"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
        <span className="sr-only">Loading...</span>
      </div>
    );
  };

  return (
    <div
      className=" fixed top-0 left-0 bg-[black]/[.55] w-screen h-screen flex justify-center items-center z-40 "
      onClick={handleCloseFormModal}
    >
      <div
        className=" w-5/6 md:w-[500px]  bg-[#FFFFFF] dark:bg-gray-800 text-zinc-950  dark:border-gray-700  rounded-xl p-2 md:py-3 md:px-4 text-white/[.5] font-thin  "
        onClick={handleInnerClick}
      >
        <div className="flex flex-col justify-center  text-left text-white mb-6 relative  p-6 ">
          <button
            className="absolute right-[-1rem] top-[-1.5rem] text-xl text-black dark:text-white  p-2 m-4 hover:bg-black/10 rounded-md "
            onClick={handleCloseFormModal}
          >
            <VscClose />
          </button>
          <div className="mb-2">
            <h1 className=" text-zinc-950 dark:text-white text-opacity-95 text-xl font-semibold leading-[48px]">
              One Time Prediction Form
            </h1>
          </div>

          {/* Notes */}
          <div
            className={`flex p-4 mb-2 text-sm text-yellow-500 border-t border-b border-yellow-300 dark:bg-gray-800 dark:text-yellow-400
            ${alertHidden ? "hidden" : ""}
          `}
            role="alert"
          >
            <svg
              className="flex-shrink-0 inline w-4 h-4 me-3 mt-[2px]"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
            </svg>
            <span className="sr-only">Note</span>
            <div>
              <span className="font-medium">PLEASE NOTE: </span>
              By no means does this prediction replaces a medical professional
              and if possible, seek medical advice from a certified
              preofessional. Read more under
              <a className="text-blue-500 underline" href="#">
                {" "}
                privacy policy.
              </a>
            </div>
            <button
              onClick={() => setAlertHidden(true)}
              type="button"
              className="ms-auto -mx-1.5 -my-1.5 bg-yellow-50 text-yellow-500 rounded-lg focus:ring-0 p-1.5 hover:bg-yellow-200 inline-flex items-center justify-center h-5 w-5 dark:bg-gray-800 dark:text-yellow-300 dark:hover:bg-gray-700"
            >
              <span className="sr-only">Close</span>
              <svg
                className="w-2 h-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
            </button>
          </div>

          {/* Modal Form Starts */}
          <form action="#" className="mt-4" onSubmit={handleSubmit}>
            <div className="overflow-y-auto max-h-96 space-y-3 pr-5">
              <div className="flex space-x-4">
                <div className="w-1/2">
                  <label
                    htmlFor="age"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Age
                  </label>
                  <input
                    value={formData.age}
                    onChange={handleInputChange}
                    type="number"
                    name="age"
                    id="age"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="34"
                    required
                  />
                </div>
                <div className="w-1/2">
                  <label
                    htmlFor="gender"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Gender
                  </label>
                  <select
                    onChange={handleInputChange}
                    value={formData.sex}
                    name="sex"
                    id="gender"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option value="0">Male</option>
                    <option value="1">Female</option>
                  </select>
                </div>
              </div>
              <div>
                <span className="inline-flex space-x-2 items-center mb-2 relative">
                  <label
                    htmlFor="cp-types"
                    className="block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Chest Pain Types
                  </label>
                  <button
                    data-tooltip-target="tooltip-right"
                    data-tooltip-placement="right"
                    className="text-gray-500"
                  >
                    <FaCircleInfo size={15} />
                  </button>
                  <div
                    id="tooltip-right"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                  >
                    Tooltip on cpt
                    <div className="tooltip-arrow" data-popper-arrow></div>
                  </div>
                </span>
                <select
                  onChange={handleInputChange}
                  value={formData.cp}
                  name="cp"
                  id="cp"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option value="0">Typical Angina</option>
                  <option value="1">Atypical Angina</option>
                  <option value="2">Non-Anginal pain</option>
                  <option value="3">Asymptomatic</option>
                </select>
              </div>
              <div>
                <span className="inline-flex space-x-2 items-center mb-2">
                  <label
                    htmlFor="rbp"
                    className="block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Resting Blood Pressure
                  </label>
                  <button
                    data-tooltip-target="tooltip-rbp"
                    data-tooltip-placement="right"
                    className="text-gray-500"
                  >
                    <FaCircleInfo size={15} />
                  </button>
                  <div
                    id="tooltip-rbp"
                    role="tooltip"
                    className="absolute z-50 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                  >
                    Tooltip on rbp
                    <div className="tooltip-arrow" data-popper-arrow></div>
                  </div>
                </span>
                <input
                  onChange={handleInputChange}
                  value={formData.trestbps}
                  name="trestbps"
                  type="number"
                  id="trestbps"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="value (mmHg)"
                  required
                />
              </div>
              <div>
                <span className="inline-flex space-x-2 items-center mb-2">
                  <label
                    htmlFor="sc"
                    className="block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Serum Cholestrol
                  </label>
                  <button
                    data-tooltip-target="tooltip-sc"
                    data-tooltip-placement="right"
                    className="text-gray-500"
                  >
                    <FaCircleInfo size={15} />
                  </button>
                  <div
                    id="tooltip-sc"
                    role="tooltip"
                    className="absolute z-50 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                  >
                    Tooltip on Serum Cholestrol
                    <div className="tooltip-arrow" data-popper-arrow></div>
                  </div>
                </span>
                <input
                  onChange={handleInputChange}
                  value={formData.chol}
                  name="chol"
                  type="number"
                  id="chol"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="value (mg/dl)"
                  required
                />
              </div>
              <div>
                <span className="inline-flex space-x-2 items-center mb-2">
                  <label
                    htmlFor="fbs"
                    className="block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Fasting Blood Sugar
                  </label>
                  <button
                    data-tooltip-target="tooltip-fbs"
                    data-tooltip-placement="right"
                    className="text-gray-500"
                  >
                    <FaCircleInfo size={15} />
                  </button>
                  <div
                    id="tooltip-fbs"
                    role="tooltip"
                    className="absolute z-50 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                  >
                    Tooltip on Fasting Blood Sugar
                    <div className="tooltip-arrow" data-popper-arrow></div>
                  </div>
                </span>
                <select
                  onChange={handleInputChange}
                  value={formData.fbs}
                  name="fbs"
                  id="fbs"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  {/* <option selected>above 120mg/dl</option> */}
                  <option value="1" selected>
                    Above 120mg/dl
                  </option>
                  <option value="0">Below 120mg/dl</option>
                </select>
              </div>
              <div>
                <span className="inline-flex space-x-2 items-center mb-2">
                  <label
                    htmlFor="recg"
                    className="block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Resting ECG
                  </label>
                  <button
                    data-tooltip-target="tooltip-recg"
                    data-tooltip-placement="right"
                    className="text-gray-500"
                  >
                    <FaCircleInfo size={15} />
                  </button>
                  <div
                    id="tooltip-recg"
                    role="tooltip"
                    className="absolute z-50 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                  >
                    Tooltip on Resting ECG
                    <div className="tooltip-arrow" data-popper-arrow></div>
                  </div>
                </span>
                <select
                  onChange={handleInputChange}
                  value={formData.restecg}
                  name="restecg"
                  id="restecg"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option value="0">Normal</option>
                  <option value="1">Having ST-T Wave Abnormality</option>
                  <option value="2">Left Ventricular Hypothrophy</option>
                </select>
              </div>
              <div>
                <span className="inline-flex space-x-2 items-center mb-2">
                  <label
                    htmlFor="mhr"
                    className="block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Maximum Heart Rate
                  </label>
                  <button
                    data-tooltip-target="tooltip-mhr"
                    data-tooltip-placement="right"
                    className="text-gray-500"
                  >
                    <FaCircleInfo size={15} />
                  </button>
                  <div
                    id="tooltip-mhr"
                    role="tooltip"
                    className="absolute z-50 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                  >
                    Tooltip on Maximum Heart Rate Achieved
                    <div className="tooltip-arrow" data-popper-arrow></div>
                  </div>
                </span>
                <input
                  onChange={handleInputChange}
                  value={formData.thalach}
                  name="thalach"
                  type="number"
                  id="thalach"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="value"
                  required
                />
              </div>
              <div>
                <span className="inline-flex space-x-2 items-center mb-2">
                  <label
                    htmlFor="exang"
                    className="block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Exercise Induced Angina
                  </label>
                  <button
                    data-tooltip-target="tooltip-exang"
                    data-tooltip-placement="right"
                    className="text-gray-500"
                  >
                    <FaCircleInfo size={15} />
                  </button>
                  <div
                    id="tooltip-exang"
                    role="tooltip"
                    className="absolute z-50 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                  >
                    Tooltip on Exercise Angina
                    <div className="tooltip-arrow" data-popper-arrow></div>
                  </div>
                </span>
                <select
                  onChange={handleInputChange}
                  value={formData.exang}
                  name="exang"
                  id="exang"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option value="1">Yes</option>
                  <option value="0">No</option>
                </select>
              </div>
              <div>
                <span className="inline-flex space-x-2 items-center mb-2">
                  <label
                    htmlFor="die"
                    className="block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Depression Induced by Exercise
                  </label>
                  <button
                    data-tooltip-target="tooltip-die"
                    data-tooltip-placement="right"
                    className="text-gray-500"
                  >
                    <FaCircleInfo size={15} />
                  </button>
                  <div
                    id="tooltip-die"
                    role="tooltip"
                    className="absolute z-50 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                  >
                    Tooltip on Maximum Heart Rate Achieved
                    <div className="tooltip-arrow" data-popper-arrow></div>
                  </div>
                </span>
                <input
                  onChange={handleInputChange}
                  value={formData.oldpeak}
                  name="oldpeak"
                  type="number"
                  id="oldpeak"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="value"
                  required
                />
              </div>
              <div>
                <span className="inline-flex space-x-2 items-center mb-2">
                  <label
                    htmlFor="peak"
                    className="block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Peak Exercise Segment
                  </label>
                  <button
                    data-tooltip-target="tooltip-peak"
                    data-tooltip-placement="right"
                    className="text-gray-500"
                  >
                    <FaCircleInfo size={15} />
                  </button>
                  <div
                    id="tooltip-peak"
                    role="tooltip"
                    className="absolute z-50 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                  >
                    Tooltip on Peak Execis ST Segment
                    <div className="tooltip-arrow" data-popper-arrow></div>
                  </div>
                </span>
                <select
                  onChange={handleInputChange}
                  value={formData.slope}
                  name="slope"
                  id="slope"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option value="1">Upsloping</option>
                  <option value="2">Flat</option>
                  <option value="3">Downsloping</option>
                </select>
              </div>
              <div>
                <span className="inline-flex space-x-2 items-center mb-2">
                  <label
                    htmlFor="thal"
                    className="block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Thallium
                  </label>
                  <button
                    data-tooltip-target="tooltip-thal"
                    data-tooltip-placement="right"
                    className="text-gray-500"
                  >
                    <FaCircleInfo size={15} />
                  </button>
                  <div
                    id="tooltip-thal"
                    role="tooltip"
                    className="absolute z-50 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                  >
                    Tooltip on Thallium
                    <div className="tooltip-arrow" data-popper-arrow></div>
                  </div>
                </span>
                <select
                  onChange={handleInputChange}
                  value={formData.thal}
                  name="thal"
                  id="thal"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option value="0">Normal</option>
                  <option value="1">Fixed Defect</option>
                  <option value="2">Reversible Defect</option>
                </select>
              </div>
              <div>
                <span className="inline-flex space-x-2 items-center mb-2">
                  <label
                    htmlFor="mvcf"
                    className="block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Major vessels colored by fluoroscopy
                  </label>
                  <button
                    data-tooltip-target="tooltip-mvcf"
                    data-tooltip-placement="right"
                    className="text-gray-500"
                  >
                    <FaCircleInfo size={15} />
                  </button>
                  <div
                    id="tooltip-mvcf"
                    role="tooltip"
                    className="absolute z-50 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                  >
                    Tooltip on fluoroscopy
                    <div className="tooltip-arrow" data-popper-arrow></div>
                  </div>
                </span>
                <input
                  onChange={handleInputChange}
                  value={formData.ca}
                  name="ca"
                  type="number"
                  id="ca"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="value"
                  required
                />
              </div>
              <div className="flex items-start mb-5 px-1 pb-1">
                <div className="flex items-center h-5">
                  <input
                    id="conditions"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                    required
                  />
                </div>
                <label
                  htmlFor="conditions"
                  className="ms-2 text-sm  text-gray-900 dark:text-gray-300"
                >
                  I agree with the{" "}
                  <a
                    href="#"
                    className="text-blue-600 hover:underline dark:text-blue-500"
                  >
                    terms and conditions
                  </a>
                </label>
              </div>
            </div>
            <div className="w-full flex justify-center mt-2">
              <button
                className="w-2/5 rounded-lg p-3 bg-slate-900/60 mt-4 font-medium text-sm"
                type="submit"
              >
                Make Prediction
              </button>
            </div>
          </form>
          {isLoading && (
            <div className="fixed top-2 left-4 z-50 text-red-500 text-2xl w-screen h-screen flex items-center justify-center">
              {/* <span>Loading ....</span> */}
              <Loader />
            </div>
          )}
          {/* End of Form */}
        </div>
      </div>
    </div>
  );
};

export default FormModal;
