import { VscClose } from "react-icons/vsc";
import { closeFormModal } from "../../redux/features/modal/modalSlice";
import { useAppDispatch } from "../../hooks";
import { FaCircleInfo } from "react-icons/fa6";
import { useState } from "react";


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

  const [alertHidden, setAlertHidden] = useState(false)

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
          <div className={`flex p-4 mb-2 text-sm text-yellow-500 border-t border-b border-yellow-300 dark:bg-gray-800 dark:text-yellow-400
            ${alertHidden ? "hidden" : ""}
          `}
          role="alert">
            <svg className="flex-shrink-0 inline w-4 h-4 me-3 mt-[2px]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
            </svg>
            <span className="sr-only">Note</span>
            <div>
              <span className="font-medium">PLEASE NOTE: </span>
                By no means does this prediction replaces a medical professional and if possible, 
                seek medical advice from a certified preofessional. Read more under 
                <a className="text-blue-500 underline" href="#"> privacy policy.</a>
            </div>
            <button 
                onClick={() => setAlertHidden(true)}
                type="button" className="ms-auto -mx-1.5 -my-1.5 bg-yellow-50 text-yellow-500 rounded-lg focus:ring-0 p-1.5 hover:bg-yellow-200 inline-flex items-center justify-center h-5 w-5 dark:bg-gray-800 dark:text-yellow-300 dark:hover:bg-gray-700">
                <span className="sr-only">Close</span>
                <svg className="w-2 h-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                </svg>
            </button>
          </div>

          {/* Modal Form Starts */}
          <form action="#" className="mt-4">
            <div className="overflow-y-auto max-h-96 space-y-3 pr-5">
              <div className="flex space-x-4">
                <div className="w-1/2">
                  <label htmlFor="age" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Age</label>
                  <input type="number" id="age" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="34" required />
                </div>
                <div className="w-1/2">
                    <label htmlFor="gender" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Gender</label>
                    <select id="gender" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                      <option value="m">Male</option>
                      <option value="fm">Female</option>
                    </select>
                </div>
              </div>
              <div>
                    <span className="inline-flex space-x-2 items-center mb-2 relative">
                      <label htmlFor="cp-types" className="block text-sm font-medium text-gray-900 dark:text-white">
                        Chest Pain Types
                      </label>
                      <button data-tooltip-target="tooltip-right" data-tooltip-placement="right"  className="text-gray-500"><FaCircleInfo size={15}/></button>
                      <div id="tooltip-right" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                          Tooltip on cpt
                          <div className="tooltip-arrow" data-popper-arrow></div>
                      </div>
                    </span>
                    <select id="cp-types" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                      <option value="0">Typical Angina</option>
                      <option value="1">Atypical Angina</option>
                      <option value="2">Non-Anginal pain</option>
                      <option value="3">Asymptomatic</option>
                    </select>
              </div>
              <div>
                  <span className="inline-flex space-x-2 items-center mb-2">
                    <label htmlFor="rbp" className="block text-sm font-medium text-gray-900 dark:text-white">
                      Resting Blood Pressure
                    </label>
                    <button data-tooltip-target="tooltip-rbp" data-tooltip-placement="right"  className="text-gray-500"><FaCircleInfo size={15}/></button>
                    <div id="tooltip-rbp" role="tooltip" className="absolute z-50 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                        Tooltip on rbp
                        <div className="tooltip-arrow" data-popper-arrow></div>
                    </div>
                  </span>
                  <input type="number" id="rbp" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="value (mmHg)" required />
              </div>
              <div>
                  <span className="inline-flex space-x-2 items-center mb-2">
                    <label htmlFor="sc" className="block text-sm font-medium text-gray-900 dark:text-white">
                      Serum Cholestrol
                    </label>
                    <button data-tooltip-target="tooltip-sc" data-tooltip-placement="right"  className="text-gray-500"><FaCircleInfo size={15}/></button>
                    <div id="tooltip-sc" role="tooltip" className="absolute z-50 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                        Tooltip on Serum Cholestrol
                        <div className="tooltip-arrow" data-popper-arrow></div>
                    </div>
                  </span>
                  <input type="number" id="sc" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="value (mg/dl)" required />
              </div>
              <div>
                  <span className="inline-flex space-x-2 items-center mb-2">
                    <label htmlFor="fbs" className="block text-sm font-medium text-gray-900 dark:text-white">
                      Fasting Blood Sugar
                    </label>
                    <button data-tooltip-target="tooltip-fbs" data-tooltip-placement="right"  className="text-gray-500"><FaCircleInfo size={15}/></button>
                    <div id="tooltip-fbs" role="tooltip" className="absolute z-50 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                        Tooltip on Fasting Blood Sugar
                        <div className="tooltip-arrow" data-popper-arrow></div>
                    </div>
                  </span>
                  <select id="fbs" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option selected>above 120mg/dl</option>
                    <option value="1">Yes</option>
                    <option value="0">No</option>
                  </select>
              </div>
              <div>
                  <span className="inline-flex space-x-2 items-center mb-2">
                    <label htmlFor="recg" className="block text-sm font-medium text-gray-900 dark:text-white">
                      Resting ECG
                    </label>
                    <button data-tooltip-target="tooltip-recg" data-tooltip-placement="right"  className="text-gray-500"><FaCircleInfo size={15}/></button>
                    <div id="tooltip-recg" role="tooltip" className="absolute z-50 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                        Tooltip on Resting ECG
                        <div className="tooltip-arrow" data-popper-arrow></div>
                    </div>
                  </span>
                  <select id="recg" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option value="0">Normal</option>
                    <option value="1">Having ST-T Wave Abnormality</option>
                    <option value="2">Left Ventricular Hypothrophy</option>
                  </select>
              </div>
              <div>
                  <span className="inline-flex space-x-2 items-center mb-2">
                    <label htmlFor="mhr" className="block text-sm font-medium text-gray-900 dark:text-white">
                      Maximum Heart Rate
                    </label>
                    <button data-tooltip-target="tooltip-mhr" data-tooltip-placement="right"  className="text-gray-500"><FaCircleInfo size={15}/></button>
                    <div id="tooltip-mhr" role="tooltip" className="absolute z-50 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                        Tooltip on Maximum Heart Rate Achieved
                        <div className="tooltip-arrow" data-popper-arrow></div>
                    </div>
                  </span>
                  <input type="number" id="mhr" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="value" required />
              </div>
              <div>
                  <span className="inline-flex space-x-2 items-center mb-2">
                    <label htmlFor="exang" className="block text-sm font-medium text-gray-900 dark:text-white">
                      Exercise Induced Angina
                    </label>
                    <button data-tooltip-target="tooltip-exang" data-tooltip-placement="right"  className="text-gray-500"><FaCircleInfo size={15}/></button>
                    <div id="tooltip-exang" role="tooltip" className="absolute z-50 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                        Tooltip on Exercise Angina
                        <div className="tooltip-arrow" data-popper-arrow></div>
                    </div>
                  </span>
                  <select id="exang" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option value="1">Yes</option>
                    <option value="0">No</option>
                  </select>
              </div>
              <div>
                  <span className="inline-flex space-x-2 items-center mb-2">
                    <label htmlFor="die" className="block text-sm font-medium text-gray-900 dark:text-white">
                      Depression Induced by Exercise
                    </label>
                    <button data-tooltip-target="tooltip-die" data-tooltip-placement="right"  className="text-gray-500"><FaCircleInfo size={15}/></button>
                    <div id="tooltip-die" role="tooltip" className="absolute z-50 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                        Tooltip on Maximum Heart Rate Achieved
                        <div className="tooltip-arrow" data-popper-arrow></div>
                    </div>
                  </span>
                  <input type="number" id="die" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="value" required />
              </div>
              <div>
                  <span className="inline-flex space-x-2 items-center mb-2">
                    <label htmlFor="peak" className="block text-sm font-medium text-gray-900 dark:text-white">
                      Peak Exercise Segment
                    </label>
                    <button data-tooltip-target="tooltip-peak" data-tooltip-placement="right"  className="text-gray-500"><FaCircleInfo size={15}/></button>
                    <div id="tooltip-peak" role="tooltip" className="absolute z-50 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                        Tooltip on Peak Execis ST Segment
                        <div className="tooltip-arrow" data-popper-arrow></div>
                    </div>
                  </span>
                  <select id="peak" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option value="0">Upsloping</option>
                    <option value="1">Flat</option>
                    <option value="2">Downsloping</option>
                  </select>
              </div>
              <div>
                  <span className="inline-flex space-x-2 items-center mb-2">
                    <label htmlFor="thal" className="block text-sm font-medium text-gray-900 dark:text-white">
                      Thallium
                    </label>
                    <button data-tooltip-target="tooltip-thal" data-tooltip-placement="right"  className="text-gray-500"><FaCircleInfo size={15}/></button>
                    <div id="tooltip-thal" role="tooltip" className="absolute z-50 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                        Tooltip on Thallium
                        <div className="tooltip-arrow" data-popper-arrow></div>
                    </div>
                  </span>
                  <select id="thal" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option value="0">Normal</option>
                    <option value="1">Fixed Defect</option>
                    <option value="2">Reversible Defect</option>
                  </select>
              </div>
              <div>
                  <span className="inline-flex space-x-2 items-center mb-2">
                    <label htmlFor="mvcf" className="block text-sm font-medium text-gray-900 dark:text-white">
                      Major vessels colored by fluoroscopy
                    </label>
                    <button data-tooltip-target="tooltip-mvcf" data-tooltip-placement="right"  className="text-gray-500"><FaCircleInfo size={15}/></button>
                    <div id="tooltip-mvcf" role="tooltip" className="absolute z-50 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                        Tooltip on fluoroscopy
                        <div className="tooltip-arrow" data-popper-arrow></div>
                    </div>
                  </span>
                  <select id="mvcf" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                  </select>
              </div>
              <div className="flex items-start mb-5 px-1 pb-1">
                <div className="flex items-center h-5">
                  <input id="conditions" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                </div>
                <label htmlFor="conditions" className="ms-2 text-sm  text-gray-900 dark:text-gray-300">
                I agree with the <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a>
                </label>
              </div>
            </div>
            <div className="w-full flex justify-center">
              <button className="w-2/5 rounded-lg p-3 bg-slate-900/60 mt-4 font-medium text-sm" type="submit">Make Prediction</button>
            </div>
          </form>
          {/* End of Form */}

        </div>
      </div>
    </div>
  );
};

export default FormModal;
