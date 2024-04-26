import { CiChat1 } from "react-icons/ci";
import { BsChatSquareText } from "react-icons/bs";
import { HiPlusSm, HiChevronLeft } from "react-icons/hi";
import { FaRegCircleQuestion } from "react-icons/fa6";

import { Link } from "react-router-dom";

const SideNav = () => {
  return (
    <aside
      className="fixed top-0 left-0 z-40 w-64 h-screen pt-6 transition-transform -translate-x-full bg-[#F6F8FA] md:translate-x-0 dark:bg-gray-800 dark:-gray-700"
      aria-label="Sidenav"
      id="drawer-navigation"
    >
      <div className="py-2 px-4 h-full bg-[#F6F8FA] dark:bg-gray-800  flex flex-col justify-between">
        <div className=" rounded-[150px] bg-gray-300 dark:bg-gray-700 p-1 w-2/3">
          <Link
            to="/create-project"
            className="flex items-center space-x-2 text-sm  p-2 dark:text-slate-400"
          >
            <span>
              <HiPlusSm size={24} />
            </span>
            <span>New Chat</span>
          </Link>
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
         
        </ul>

        {/* Static Navigations */}
        <div className="w-9/12 flex flex-col items-center justify-center text-sm rounded-[12px] h-4/5 bg-gray-500/30 space-y-4 text-gray-400/80">
          <span className=""> <FaRegCircleQuestion size={32} /></span>
          <p>Talk to PalmGPT</p>
        </div>

        <ul className="space-y-1 mt-2 mb-6 ">
          <li>
            <Link
              to="/inbox"
              className="flex items-center p-2 text-base text-gray-900 rounded-lg dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <span>
                <BsChatSquareText size="1.1em" />
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
