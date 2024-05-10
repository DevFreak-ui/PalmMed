/* eslint-disable @typescript-eslint/no-explicit-any */
import { CiChat1 } from "react-icons/ci";
import { HiPlusSm, HiChevronLeft } from "react-icons/hi";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { GoGear } from "react-icons/go";
import { TiDocument } from "react-icons/ti";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { baseURL, chatBaseURL } from "../../services/baseURL";

const transformChats = (data: any) => {
  return data.map((item: any) => ({
    id: item._id,
    title: item.chat_message[0]?.propmt,
  }));
};

const SideNav = () => {
  const [user, setUser] = useState<any>("");
  const [chats, setChats] = useState<any>([]);

  const fetchData = async () => {
    try {
      const res = await axios.get(`${baseURL}/users/find/me`);
      setUser(res.data.user._id);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchAllChats = async () => {
    try {
      if (user) {
        const res = await axios.get(
          `${chatBaseURL}/chats/get/user/chats?user_id=${user}`
        );
        setChats(res.data.chats);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAllChats();
    fetchData();

    // const interval = setInterval(fetchAllChats, 5000)
    // return () => clearInterval(interval)
  }, [user]);

  const chatsData = transformChats(chats);

  return (
    <aside
      className="fixed top-0 left-0 z-40 w-64 h-screen pt-6 transition-transform -translate-x-full bg-[#F6F8FA] md:translate-x-0 dark:bg-gray-800 dark:-gray-700"
      aria-label="Sidenav"
      id="drawer-navigation"
    >
      <div className="py-2 px-4 h-full bg-[#F6F8FA] dark:bg-gray-800  flex flex-col justify-between">
        <div className="p-1 w-2/3 border-b border-dashed border-gray-600">
          <div className="text-2xl font-bold dark:text-slate-400 cursor-pointer">
            <span>PalmMed</span>
          </div>
        </div>

        {/* Static Navigations */}
        <ul className="mt-6 mb-8 ">
          <span>History</span>

          {chatsData.length > 0 ? (
            chatsData.map((item: any) => (
              <li key={item.id}>
                <Link
                  to={`/dashboard/patient/palm-gpt/${item.id}`}
                  className="flex items-center p-2 text-base text-gray-900 rounded-lg dark:text-slate-300 hover:bg-gray-300 dark:hover:bg-gray-700 group"
                >
                  <span>
                    <CiChat1 />
                  </span>
                  <span className="ml-4">{item.title}</span>
                </Link>
              </li>
            ))
          ) : (
            <p className="my-3">No history available</p>
          )}
        </ul>
        <Link
          to="/dashboard/patient/report"
          className="flex items-center justify-between space-x-2 mb-6 p-2 dark:text-slate-400 cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-700 group rounded-lg"
        >
          <span>Reports</span>
          <span>
            {" "}
            <IoIosArrowRoundForward size={18} />{" "}
          </span>
        </Link>

        {/* Static Navigations */}
        <Link
          to="/dashboard/patient/chat-guide"
          className="w-10/12 p-2 text-center mx-auto flex flex-col items-center justify-center text-sm font-medium rounded-[12px] h-[200px] bg-gray-500/30 space-y-4 text-gray-400/80"
        >
          <span className="">
            {" "}
            <FaRegCircleQuestion size={26} />
          </span>
          <p>Gain insight into your health report. Click me to see how</p>
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
