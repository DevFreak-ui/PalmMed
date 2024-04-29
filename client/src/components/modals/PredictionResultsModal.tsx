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
      className=" fixed top-0 left-0 bg-[black]/[.55] w-screen h-screen flex justify-center items-center z-40 "
      onClick={handleClosePredictionResults}
    >
      <div
        className=" w-5/6 md:w-[500px]  bg-[#FFFFFF] dark:bg-gray-800 text-zinc-950  dark:border-gray-700  rounded-xl p-2 md:py-3 md:px-4 text-white/[.5] font-thin  "
        onClick={handleInnerClick}
      >
        <div className="flex flex-col justify-center  text-left text-white mb-6 relative  p-6 ">
          <button
            className="absolute right-[-1rem] top-[-1.5rem] text-xl text-black dark:text-white  p-2 m-4 hover:bg-black/10 rounded-md "
            onClick={handleClosePredictionResults}
          >
            <VscClose />
          </button>
          <div className="mb-2">
            <h1 className=" text-zinc-950 dark:text-white text-opacity-95 text-xl font-semibold leading-[48px]">
            Prediction Results
            </h1>
          </div>
          
          {/* Notes */}
         

          {/* Modal Form Starts */}
          <form action="#" className="mt-4" onSubmit={handleSubmit} >
            <p>You have a likely 45% chance of having a heart Disease</p>
            <p className="my-3">GPT model result: Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus alias libero provident vero vel laborum quasi repellendus voluptas quae cumque.</p>
            <label htmlFor="">Doctors Verdict</label>
            <textarea name="" id="" cols="30" rows="10"></textarea>
            <div className="w-full flex justify-center">
              <button className="w-2/5 rounded-lg p-3 bg-slate-900/60 mt-4 font-medium text-sm" type="submit">Generate Report</button>
            </div>
          </form>
          {/* End of Form */}

        </div>
      </div>
    </div>
  );
};

export default PredicitonResultsModal;
