import { VscClose } from "react-icons/vsc";
import { closePredictionResultsModal } from "../../redux/features/modal/modalSlice";
import { useAppDispatch } from "../../hooks";
import { FaCircleInfo } from "react-icons/fa6";
import { useState } from "react";
import axios from "axios";


const PredicitonResultsModal = () => {



      const [formData, setFormData] = useState({
        age: "",
        gender: "0",
        cpTypes: "0",
        rbp: "",
        sc: "",
        fbs: "1",
        recg: "0",
        mhr: "",
        exang: "1",
        die: "",
        peak: "0",
        mvcf: "0",
        thal: "0",
      
      });

  
const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === 'checkbox' ? checked : value;
    setFormData((prevData) => ({
      ...prevData,
      [name]: val,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    

  };


  const dispatch = useAppDispatch();

  const handleInnerClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.stopPropagation();
  };

  
  const handleClosePredictionResults = () => {
    dispatch(closePredictionResultsModal());
  };

  const [alertHidden, setAlertHidden] = useState(false)

  return (
    <div
      className=" fixed top-0 left-0 bg-[black]/[.55] w-screen  h-screen pt-32 flex justify-center items-center z-40 "
      onClick={handleClosePredictionResults}
    >
      <div
        className=" w-5/6 md:w-[750px]  bg-[#FFFFFF] dark:bg-gray-800 text-zinc-950  dark:border-gray-700  rounded-xl p-2 md:py-3 md:px-2 text-white/[.5] font-thin overflow-y-auto"
        onClick={handleInnerClick}
      >
        <div className="flex flex-col justify-center  text-left text-white mb-2 relative p-6">
          <button
            className="absolute right-[-1rem] top-[-1rem] text-xl text-black dark:text-white p-2 m-4 hover:bg-black/10 rounded-md "
            onClick={handleClosePredictionResults}
          >
            <VscClose />
          </button>
          <div className="mb-2">
            <h1 className=" text-zinc-950 dark:text-white text-opacity-95 text-xl font-semibold leading-[48px]">
             Preview Report
            </h1>
          </div>
          
          {/* Notes */} 
         
          <table className="w-full mb-4 text-sm text-gray-900 font-normal dark:font-light dark:text-white">
              <tr>
                <th className="pr-6 py-1.5 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                  Prediction:
                </th>
                <td>Yes, likely to have a heart disease.</td>
              </tr>
              <tr>
                <th className="pr-6 py-1.5 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                  Confidence Level:
                </th>
                <td>95%</td>
              </tr>
              <tr className="">
                <th className="pr-6 py-1.5 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                  Context:
                </th>
                <td>
                  <div className=" max-h-36 overflow-y-auto">
                  Congratulations! Based on the AI model's prediction with a confidence level of 54.7, I am pleased to inform 
                  you that you do not have heart disease. This is great news and a testament to your overall heart health. 
                  Keep up the good work and continue to prioritize your well-being. If you have any concerns or questions, 
                  feel free to reach out.
                  </div>
                </td>
              </tr>
            </table>

          {/* Modal Form Starts */}
          <form action="#" className="mt-4 text-sm space-y-3" onSubmit={handleSubmit} >
            
            {/* Patient Details */}
            <div className="max-h-36 overflow-y-auto w-full">
                  <table className="w-full py-4 text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 font-medium">
                      <tbody>
                          <tr className="odd:bg-white odd:dark:bg-gray-700/50 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                              <th scope="row" className="pr-6 py-1 font-medium whitespace-nowrap">
                              Age
                              </th>
                              <td>32</td>
                          </tr>
                          <tr className="odd:bg-white odd:dark:bg-gray-700/50 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                              <th scope="row" className="pr-6 py-1 font-medium whitespace-nowrap">
                              Gender
                              </th>
                              <td>Male</td>
                          </tr>
                          <tr className="odd:bg-white odd:dark:bg-gray-700/50 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                              <th scope="row" className="pr-6 py-1 font-medium whitespace-nowrap">
                              Chest Pain Types
                              </th>
                              <td>xx</td>
                          </tr>
                          <tr className="odd:bg-white odd:dark:bg-gray-700/50 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                              <th scope="row" className="pr-6 py-1 font-medium whitespace-nowrap">
                              Serum Cholestrol
                              </th>
                              <td>xx</td>
                          </tr>
                          <tr className="odd:bg-white odd:dark:bg-gray-700/50 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                              <th scope="row" className="pr-6 py-1 font-medium whitespace-nowrap">
                              Fasting Blood Sugar
                              </th>
                              <td>xx</td>
                          </tr>
                          <tr className="odd:bg-white odd:dark:bg-gray-700/50 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                              <th scope="row" className="pr-6 py-1 font-medium whitespace-nowrap">
                              Resting ECG
                              </th>
                              <td>xx</td>
                          </tr>
                          <tr className="odd:bg-white odd:dark:bg-gray-700/50 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                              <th scope="row" className="pr-6 py-1 font-medium whitespace-nowrap">
                              Maximum Heart Rate
                              </th>
                              <td>xx</td>
                          </tr>
                          <tr className="odd:bg-white odd:dark:bg-gray-700/50 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                              <th scope="row" className="pr-6 py-1 font-medium whitespace-nowrap">
                              Exercise Induced Angina
                              </th>
                              <td>xx</td>
                          </tr>
                          <tr className="odd:bg-white odd:dark:bg-gray-700/50 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                              <th scope="row" className="pr-6 py-1 font-medium whitespace-nowrap">
                              Depression Induced by Exercise
                              </th>
                              <td>xx</td>
                          </tr>
                          <tr className="odd:bg-white odd:dark:bg-gray-700/50 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                              <th scope="row" className="pr-6 py-1 font-medium whitespace-nowrap">
                              Peak Exercise Segment
                              </th>
                              <td>xx</td>
                          </tr>
                          <tr className="odd:bg-white odd:dark:bg-gray-700/50 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                              <th scope="row" className="pr-6 py-1 font-medium whitespace-nowrap">
                              Thallium
                              </th>
                              <td>xx</td>
                          </tr>
                          <tr className="odd:bg-white odd:dark:bg-gray-700/50 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                              <th scope="row" className="pr-6 py-1 font-medium whitespace-nowrap">
                              Major vessels colored by fluoroscopy
                              </th>
                              <td>xx</td>
                          </tr>
                      </tbody>
                  </table>
            </div>
            
            <div className="">
              <label className="font-bold px-1 text-gray-700 dark:text-gray-200" htmlFor="">Enter Final Verdict</label>
              <textarea 
                name="" id="" cols={30} rows={4}
                defaultValue={'Heart Disease Present....'}
                className="w-full border border-gray-500 my-1 rounded-lg text-dark dark:bg-transparent text-gray-900 font-normal dark:font-light dark:text-gray-200">
              </textarea>
            </div>

            <div className="w-full flex justify-center">
              <button className="w-2/5 rounded-lg p-3 bg-slate-900/60 font-medium text-sm" type="submit">Generate Report</button>
            </div>
          </form>
          {/* End of Form */}

        </div>
      </div>
    </div>
  );
};

export default PredicitonResultsModal;
