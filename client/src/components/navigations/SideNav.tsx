import { CiChat1 } from "react-icons/ci";
import { HiPlusSm, HiChevronLeft } from "react-icons/hi";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { GoGear } from "react-icons/go";
import { TiDocument } from "react-icons/ti";
import { IoIosArrowRoundForward } from "react-icons/io";

import { Link } from "react-router-dom";
import axios from "axios";

const SideNav = () => {
  const initiateChat = async () => {
    try {
      const postData = {
        email: "yeboahandy@gmail.com",
        user_id: "662b7c1a1f61bc617c34635f",
      };
      const response = await axios.post(
        "http://localhost:6200/api/v1/chats/initiate-chat",
        postData
      );
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <aside
      className="fixed top-0 left-0 z-40 w-64 h-screen pt-6 transition-transform -translate-x-full bg-[#F6F8FA] md:translate-x-0 dark:bg-gray-800 dark:-gray-700"
      aria-label="Sidenav"
      id="drawer-navigation"
    >
      <div className="py-2 px-4 h-full bg-[#F6F8FA] dark:bg-gray-800  flex flex-col justify-between">
        <div className=" rounded-[150px] bg-gray-300 dark:bg-gray-700 p-1 w-2/3">
          <div
            onClick={initiateChat}
            className="flex items-center space-x-2 text-sm  p-2 dark:text-slate-400 cursor-pointer"
          >
            <span>
              <HiPlusSm size={24} />
            </span>
            <span>New Chat</span>
          </div>
        </div>

        {/* Static Navigations */}
        <ul className="space-y-1 mt-6 mb-12 ">
          <span>History</span>
          <li>
            <Link
              to="/"
              className="flex items-center p-2 text-base text-gray-900 rounded-lg dark:text-slate-300 hover:bg-gray-300 dark:hover:bg-gray-700 group"
            >
              <span>
                <CiChat1 />
              </span>
              <span className="ml-4">Recent chat...</span>
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="flex items-center p-2 text-base text-gray-900 rounded-lg dark:text-slate-300 hover:bg-gray-300 dark:hover:bg-gray-700 group"
            >
              <span>
                <CiChat1 />
              </span>
              <span className="ml-4">Recent chat...</span>
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="flex items-center p-2 text-base text-gray-900 rounded-lg dark:text-slate-300 hover:bg-gray-300 dark:hover:bg-gray-700 group"
            >
              <span>
                <CiChat1 />
              </span>
              <span className="ml-4">Recent chat...</span>
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="flex items-center p-2 text-base text-gray-900 rounded-lg dark:text-slate-300 hover:bg-gray-300 dark:hover:bg-gray-700 group"
            >
              <span>
                <CiChat1 />
              </span>
              <span className="ml-4">Recent chat...</span>
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="flex items-center p-2 text-base text-gray-900 rounded-lg dark:text-slate-300 hover:bg-gray-300 dark:hover:bg-gray-700 group"
            >
              <span>
                <CiChat1 />
              </span>
              <span className="ml-4">Recent chat...</span>
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="flex items-center p-2 text-base text-gray-900 rounded-lg dark:text-slate-300 hover:bg-gray-300 dark:hover:bg-gray-700 group"
            >
              <span>
                <CiChat1 />
              </span>
              <span className="ml-4">Recent chat...</span>
            </Link>
          </li>
          <Link
            to="/dashboard/patient/report"
            className="flex items-center justify-between space-x-2 my-4 py-2 pr-2 dark:text-slate-400 cursor-pointer"
          >
            <span>Reports</span>
            <span>
              {" "}
              <IoIosArrowRoundForward size={18} />{" "}
            </span>
          </Link>
        </ul>

        {/* Static Navigations */}
        <Link
          to="/palm-gpt"
          className="w-10/12 mx-auto flex flex-col items-center justify-center text-sm rounded-[12px] h-[200px] bg-gray-500/30 space-y-4 text-gray-400/80"
        >
          <span className="">
            {" "}
            <FaRegCircleQuestion size={32} />
          </span>
          <p>Talk to PalmGPT</p>
        </Link>

        <ul className="space-y-1 my-2 ">
          <li>
            <Link
              to="/inbox"
              className="flex items-center p-2 text-sm text-gray-900 rounded-lg dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <span>
                <TiDocument size="1.1em" />
              </span>
              <span className="ml-4">Docs</span>
            </Link>
          </li>
          <li>
            <Link
              to="/PatientAccountSettingsPage"
              className="flex items-center p-2 text-sm text-gray-900 rounded-lg dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <span>
                <GoGear size="1.1em" />
              </span>
              <span className="ml-4">Settings</span>
            </Link>
          </li>
        </ul>
      </div>

      <span className="fixed top-10 -right-3 size-6 inline-flex items-center justify-center bg-[#7443FF] text-white/80 rounded-full dark:bg-[#7443FF]/80">
        <HiChevronLeft size={18} />
      </span>
    </aside>
  );
};

export default SideNav;
