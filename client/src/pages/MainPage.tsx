import { IoIosSend } from "react-icons/io";
import { FaRegPenToSquare } from "react-icons/fa6";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { TiLightbulb } from "react-icons/ti";
import { useAppDispatch, useAppSelector } from "../hooks";
import {
  openFormModal,
  closeFormModal,
  closePredictionResultsModal,
} from "../redux/features/modal/modalSlice";
import { useState, useEffect } from "react";
import Chat from "../components/Chat";
import { Link } from "react-router-dom";
import PredicitonResultsModal from "../components/modals/PredictionResultsModal";
import { openPredictionResultsModal } from "../redux/features/modal/modalSlice";
import axios from "axios";
import { baseURL } from "../services/baseURL";

const MainPage = () => {
  const [user, setUser] = useState<any>();
  const fetchData = async () => {
    const res = await axios.get(`${baseURL}/users/find/me`);
    setUser(res.data.user);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const [chatInitiated, setChatInitiated] = useState(true);

  const is_PredictionResultsModal_Open = useAppSelector((state) => {
    return state.modalForm.predictionResultsModal_isOpen;
  });

  const dispatch = useAppDispatch();

  const handleOpenFormModal = () => {
    dispatch(openFormModal());
  };
  const handleCloseFormModal = () => {
    dispatch(closeFormModal());
  };

  const handleOpenPredictionResultModal = () => {
    dispatch(openPredictionResultsModal());
  };
  const handleClosePredictionResultModal = () => {
    dispatch(closePredictionResultsModal());
  };

  const handleFormSubmission = () => {
    setChatInitiated(false);
  };

  return (
    <>
      {chatInitiated ? (
        <section className="h-screen-50 mt-8 w-full relative">
          {/* Header/Welcome Message */}
          <div className="md:w-7/12 mx-auto text-4xl font-bold leading-tight my-16">
            <p className="bg-gradient-to-r from-blue-600 via-[#ee2729] to-[#fdb070] text-transparent bg-clip-text">
              Hello, {user?.firstname}
            </p>
            <p className="text-gray-400/50 font-normal">
              Welcome to the one stop medical bot!
            </p>
          </div>

          {/* CTA Cards */}
          <div className="md:w-2/5 grid grid-cols-3 gap-4 mx-auto text-sm font-medium dark:font-normal leading-tight text-gray-600/80 dark:text-gray-200/80">
            <Link
              to="/dashboard/patient/report"
              className="h-40 bg-gray-300/50 rounded-lg dark:bg-gray-800/80 p-3 relative overflow-hidden hover:drop-shadow-md cursor-pointer"
            >
              <p>Access all your medical reports</p>
              <span className="absolute size-12 bg-gray-400/50 dark:bg-gray-950/50 rounded-full -right-2 -bottom-2 inline-flex justify-center items-center">
                <AiOutlineThunderbolt size={20} />
              </span>
            </Link>
            <Link
              to="/dashboard/patient/chat-guide"
              className="h-40 bg-gray-300/50 rounded-lg dark:bg-gray-800/80 p-3 relative overflow-hidden hover:drop-shadow-md cursor-pointer"
            >
              <p>
                {" "}
                Ask any question with our task specific trained GPT, PalmGPT.
                Read more!
              </p>
              <span className="absolute size-12 bg-gray-400/50 dark:bg-gray-950/50 rounded-full -right-2 -bottom-2 inline-flex justify-center items-center">
                <TiLightbulb size={20} />
              </span>
            </Link>
            <div className="h-40 bg-gray-300/50 rounded-lg dark:bg-gray-800/80 p-3 relative overflow-hidden hover:drop-shadow-md cursor-pointer">
              <p>
                Explore our docs. Get insights from the development perspective
              </p>
              <span className="absolute size-12 bg-gray-400/50 dark:bg-gray-950/50 rounded-full -right-2 -bottom-2 inline-flex justify-center items-center">
                <FaRegPenToSquare size={16} />
              </span>
            </div>
          </div>

          {/* User Input Field */}
          <form
            data-tooltip-target="tooltip-default"
            data-tooltip-placement="bottom"
            className="flex w-3/5 border-[1px] border-gray-500/30 my-6 mx-auto rounded-lg p-1 items-center space-x-1 cursor-not-allowed"
            onSubmit={(e) => {
              e.preventDefault(); // This will stop the form from submitting normally
              handleFormSubmission(); // Call your function to handle the form data
            }}
          >
            <input
              className="bg-transparent focus:ring-0 focus:outline-none border-0 w-[98%] cursor-not-allowed"
              type="text"
              placeholder="Message palmMed..."
              disabled
            />
            <button
              type="button"
              disabled
              className="bg-gray-400/50 text-white/70 rounded-md inline-flex justify-center items-center p-2 cursor-not-allowed"
            >
              <IoIosSend size={18} />
            </button>
            {/* Tootip Message */}
            <div
              id="tooltip-default"
              role="tooltip"
              className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-normal text-white/80 transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
            >
              I see you! Subscribe to our premium version and Start a custom
              chart
              <div className="tooltip-arrow" data-popper-arrow></div>
            </div>
          </form>

          {is_PredictionResultsModal_Open && <PredicitonResultsModal />}
        </section>
      ) : (
        <Chat />
      )}
    </>
  );
};

export default MainPage;
