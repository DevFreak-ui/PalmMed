import { VscClose } from "react-icons/vsc";
import { closePredictionResultsModal } from "../../redux/features/modal/modalSlice";
import { useAppSelector, useAppDispatch } from "../../hooks";
import { useState } from "react";
import axios from "axios";
import { baseURL } from "../../services/baseURL";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";

const PredicitonResultsModal = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [doctorVerdict, setDoctorVerdict] = useState("");
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const predictionData = useAppSelector((state) => {
    return state.predictionResult.predictionData;
  });

  const handleClosePredictionResultModal = () => {
    dispatch(closePredictionResultsModal());
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

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      const verdict = { verdict: doctorVerdict };
      setIsLoading(true);
      try {
        e.preventDefault();
        // show loader
        const response = await axios.post(
          `${baseURL}/reports/create/report/${predictionData.results._id}`,
          verdict
        );
       

       
          console.log(response.data);
          setIsLoading(false);
          handleClosePredictionResultModal();
          enqueueSnackbar("Report Created Successfully", {
            variant: "success",
          });
          navigate("/dashboard/doctor/patient-reports");
      
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
      className=" fixed top-0 left-0 bg-[black]/[.55] w-screen  h-screen  flex justify-center items-center z-40 "
      onClick={handleClosePredictionResults}
    >
      <div
        className=" w-5/6 md:w-[650px]  bg-[#FFFFFF] dark:bg-gray-800 text-zinc-950  dark:border-gray-700  rounded-xl p-2 md:py-3 md:px-2 text-white/[.5] font-thin overflow-y-auto"
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
              <td>{predictionData.results.prediction.prediction}</td>
            </tr>
            <tr>
              <th className="pr-6 py-1.5 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                Confidence Level:
              </th>
              <td>{predictionData.results.prediction.confidence}%</td>
            </tr>
            <tr className="">
              <th className="flex pr-6 py-1.5 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                Context:
              </th>
              <td>
                <div className=" max-h-36 overflow-y-auto">
                  {predictionData.resData}
                </div>
              </td>
            </tr>
          </table>

          {/* Modal Form Starts */}
          <form
            action="#"
            className="mt-4 text-sm space-y-3"
            onSubmit={handleSubmit}
          >
            {/* Patient Details */}
            <div className="max-h-36 overflow-y-auto w-full">
              <table className="w-full py-4 text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 font-medium">
                <tbody>
                  <tr className="odd:bg-white odd:dark:bg-gray-700/50 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                    <th
                      scope="row"
                      className="pr-6 py-1 font-medium whitespace-nowrap"
                    >
                      Age
                    </th>
                    <td>{predictionData.results.age}</td>
                  </tr>
                  <tr className="odd:bg-white odd:dark:bg-gray-700/50 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                    <th
                      scope="row"
                      className="pr-6 py-1 font-medium whitespace-nowrap"
                    >
                      Gender
                    </th>
                    <td>
                      {predictionData.results.sex === 0 ? "Male" : "Female"}
                    </td>
                  </tr>
                  <tr className="odd:bg-white odd:dark:bg-gray-700/50 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                    <th
                      scope="row"
                      className="pr-6 py-1 font-medium whitespace-nowrap"
                    >
                      Chest Pain Types
                    </th>
                    {predictionData.results.cp === 0
                      ? "Typical Angina"
                      : predictionData.results.cp === 1
                      ? "Atypical Angina"
                      : predictionData.results.cp === 2
                      ? "Non-Anginal pain"
                      : predictionData.results.cp === 3
                      ? "Asymptomatic"
                      : "Not Available"}
                  </tr>
                  <tr className="odd:bg-white odd:dark:bg-gray-700/50 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                    <th
                      scope="row"
                      className="pr-6 py-1 font-medium whitespace-nowrap"
                    >
                      Serum Cholestrol
                    </th>
                    <td>{predictionData.results.chol}</td>
                  </tr>
                  <tr className="odd:bg-white odd:dark:bg-gray-700/50 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                    <th
                      scope="row"
                      className="pr-6 py-1 font-medium whitespace-nowrap"
                    >
                      Fasting Blood Sugar
                    </th>
                    <td> {predictionData.results.fbs === 1 ? "Yes" : "No"}</td>
                  </tr>
                  <tr className="odd:bg-white odd:dark:bg-gray-700/50 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                    <th
                      scope="row"
                      className="pr-6 py-1 font-medium whitespace-nowrap"
                    >
                      Resting ECG
                    </th>
                    <td>
                      {" "}
                      {predictionData.results.restecg === 0
                        ? "Normal"
                        : predictionData.results.cp === 1
                        ? "Having ST-T Wave Abnormality"
                        : predictionData.results.cp === 2
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
                    <td>{predictionData.results.ca}</td>
                  </tr>
                  <tr className="odd:bg-white odd:dark:bg-gray-700/50 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                    <th
                      scope="row"
                      className="pr-6 py-1 font-medium whitespace-nowrap"
                    >
                      Exercise Induced Angina
                    </th>
                    <td>{predictionData.results.exang === 1 ? "Yes" : "No"}</td>
                  </tr>
                  <tr className="odd:bg-white odd:dark:bg-gray-700/50 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                    <th
                      scope="row"
                      className="pr-6 py-1 font-medium whitespace-nowrap"
                    >
                      Depression Induced by Exercise
                    </th>
                    <td>{predictionData.results.chol}</td>
                  </tr>
                  <tr className="odd:bg-white odd:dark:bg-gray-700/50 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                    <th
                      scope="row"
                      className="pr-6 py-1 font-medium whitespace-nowrap"
                    >
                      Peak Exercise Segment
                    </th>
                    <td>
                      {" "}
                      {predictionData.results.oldpeak === 0
                        ? "Upsloping"
                        : predictionData.results.oldpeak === 1
                        ? "Flat"
                        : predictionData.results.oldpeak === 2
                        ? "Downsloping"
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
                      {" "}
                      {predictionData.results.thal === 0
                        ? "Normal"
                        : predictionData.results.thal === 1
                        ? "Fixed Defect"
                        : predictionData.results.thal === 2
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
                    <td>
                      {" "}
                      {predictionData.results.thalach === 0
                        ? "0"
                        : predictionData.results.thalach === 1
                        ? "1"
                        : predictionData.results.thalach === 2
                        ? "2"
                        : "Not Available"}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="">
              <label
                className="font-bold px-1 text-gray-700 dark:text-gray-200"
                htmlFor="doctorverdict"
              >
                Enter Final Verdict
              </label>
              <textarea
                name="doctorverdict"
                id="doctorverdict"
                cols={30}
                rows={4}
                placeholder="Heart Disease likely present. Patient needs to schedule appointment propmptly..."
                value={doctorVerdict}
                onChange={(evt) => setDoctorVerdict(evt.target.value)}
                className="w-full border border-gray-500 my-1 rounded-lg text-dark dark:bg-transparent text-gray-900 font-normal dark:font-light dark:text-gray-200"
              ></textarea>
            </div>

            <div className="w-full flex justify-center">
              <button
                className="w-2/5 rounded-lg p-3 bg-slate-900/60 font-medium text-sm"
                type="submit"
              >
                Generate Report
              </button>
            </div>
          </form>
          {/* End of Form */}
          {isLoading && (
            <div className="fixed top-2 left-4 z-50 text-red-500 text-2xl w-screen h-screen flex items-center justify-center">
              {/* <span>Loading ....</span> */}
              <Loader />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PredicitonResultsModal;
