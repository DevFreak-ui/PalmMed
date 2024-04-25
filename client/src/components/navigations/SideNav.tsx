import LogoLight from '../../assets/images/Logo-light.svg'
import { CiGrid41 } from "react-icons/ci"
import { IoCopyOutline, IoChevronDownOutline } from "react-icons/io5"
import { BsChatSquareText } from "react-icons/bs";
import { HiPlusSm, HiChevronLeft } from "react-icons/hi"


import { Link } from 'react-router-dom';

const SideNav = () => {

    

    return (
      <aside
        className="fixed top-0 left-0 z-40 w-64 h-screen pt-6 transition-transform -translate-x-full bg-[#F6F8FA] md:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
        aria-label="Sidenav"
        id="drawer-navigation"
      >
        <div className="py-2 px-4 h-full bg-[#F6F8FA] dark:bg-gray-800">
          <a href="#" className="mr-4">
            <img src={LogoLight} className="mr-3 h-10" alt="TaskPulse Logo" />
          </a>
          <hr className="border-t border-gray-200 border-dashed dark:border-gray-700" />

          {/* Static Navigations */}
          <ul className="space-y-1 mt-6 mb-12">
            <li>
              <Link
                to="/"
                className="flex items-center p-2 text-base text-gray-900 rounded-lg dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <span>
                  <CiGrid41 size="1.3em" />
                </span>
                <span className="ml-4">Dashboard</span>
              </Link>
            </li>
            <li
              
            >
              <Link
                to="/inbox"
                className="flex items-center p-2 text-base text-gray-900 rounded-lg dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <span>
                  <BsChatSquareText size="1.1em" />
                </span>
                <span className="ml-4">Inbox</span>
                <span
                  className="w-6 max-h-5 p-1 mx-2 bg-[#FF6D78] text-white font-normal rounded-lg rounded-es-none inline-flex 
                            items-center justify-center text-sm dark:text-white/90"
                >
                  3
                </span>
              </Link>
            </li>
            <li
              
            >
              <Link
                to="/docs"
                className="flex items-center p-2 text-base text-gray-900 rounded-lg dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <span>
                  <IoCopyOutline size="1.3em" />
                </span>
                <span className="ml-4">Docs</span>
              </Link>
            </li>
          </ul>

          <ul className="pb-5">
            <li className="mt-8">
              <button
                type="button"
                className="flex items-center p-2 w-full text-base font-medium text-gray-900/20 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white/30 dark:hover:bg-gray-700"
                aria-controls="dropdown-projects"
                data-collapse-toggle="dropdown-projects"
              >
                <span className="flex-1 text-left whitespace-nowrap">
                  PROJECTS
                </span>
                <span className="transition-transform transform duration-300 rotate-0 group-active:rotate-180">
                  <IoChevronDownOutline />
                </span>
              </button>

              <ul
                id="dropdown-projects"
                className="hidden overflow-y-auto max-h-64 3xl:max-h-full py-2 space-y-2 text-black font-medium"
              >
                <li className="relative">
                  {/* Project List */}
                  <button
                    type="button"
                    className="flex items-center p-1 pl-11 w-full relative text-base rounded-lg transition duration-75 group dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                    aria-controls="dropdown-list"
                    data-collapse-toggle="dropdown-list"
                  >
                    <span
                      className="before:block before:absolute before:my-auto before:inset-0 before:rounded-full before:border-[3px] 
                                    before:border-[#FF6D78]/50 before:size-4 before:left-5"
                    ></span>
                    <span className="flex-1 text-left whitespace-nowrap">
                      Levr
                    </span>
                    <span className="transition-transform transform duration-300 rotate-0 group-active:rotate-180">
                      <IoChevronDownOutline />
                    </span>
                  </button>
                  <ul
                    id="dropdown-list"
                    className="hidden pb-2 space-y-1 relative"
                  >
                    <span
                      className="before:block before:absolute before:inset-0 
                                        before:bg-gray-900/15 before:w-[1px] before:h-full before:left-7 before:-top-3 dark:before:bg-gray-500"
                    ></span>
                    <li
                     
                    >
                      <Link
                        to="/board"
                        className="flex items-center p-1 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group dark:text-slate-400 dark:hover:bg-gray-700"
                      >
                        Board
                      </Link>
                    </li>
                    <li
                     
                    >
                      <Link
                        to="/team"
                        className="flex items-center p-1 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group dark:text-slate-400 dark:hover:bg-gray-700"
                      >
                        Teams
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="relative">
                  <button
                    type="button"
                    className="flex items-center p-1 pl-11 w-full relative text-base rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-slate-300 dark:hover:bg-gray-700"
                    aria-controls="dropdown-task"
                    data-collapse-toggle="dropdown-task"
                  >
                    <span
                      className="before:block before:absolute before:my-auto before:inset-0 before:rounded-full before:border-[3px] 
                                    before:border-[#FF6D78]/50 before:size-4 before:left-5"
                    ></span>
                    <span className="flex-1 text-left whitespace-nowrap">
                      TaskPulse
                    </span>
                    <span className="transition-transform transform duration-300 rotate-0 group-active:rotate-180">
                      <IoChevronDownOutline />
                    </span>
                  </button>
                  <ul
                    id="dropdown-task"
                    className="hidden pb-2 space-y-1 relative"
                  >
                    <span
                      className="before:block before:absolute before:inset-0 dark:before:bg-gray-500
                                        before:bg-gray-900/15 before:w-[1px] before:h-full before:left-7 before:-top-3"
                    ></span>
                    <li
                     
                    >
                      <Link
                        to="/board"
                        className="flex items-center p-1 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group dark:text-slate-400 dark:hover:bg-gray-700"
                      >
                        Board
                      </Link>
                    </li>
                    <li
                      
                    >
                      <Link
                        to="/team"
                        className="flex items-center p-1 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group dark:text-slate-400 dark:hover:bg-gray-700"
                      >
                        Teams
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="relative">
                  <button
                    type="button"
                    className="flex items-center p-1 pl-11 w-full relative text-base rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-slate-300 dark:hover:bg-gray-700"
                    aria-controls="dropdown-sn"
                    data-collapse-toggle="dropdown-sn"
                  >
                    <span
                      className="before:block before:absolute before:my-auto before:inset-0 before:rounded-full before:border-[3px] 
                                    before:border-[#FF6D78]/50 before:size-4 before:left-5"
                    ></span>
                    <span className="flex-1 text-left whitespace-nowrap">
                      TaskPulse
                    </span>
                    <span className="transition-transform transform duration-300 rotate-0 group-active:rotate-180">
                      <IoChevronDownOutline />
                    </span>
                  </button>
                  <ul
                    id="dropdown-sn"
                    className="hidden pb-2 space-y-1 relative"
                  >
                    <span
                      className="before:block before:absolute before:inset-0 dark:before:bg-gray-500
                                        before:bg-gray-900/15 before:w-[1px] before:h-full before:left-7 before:-top-3"
                    ></span>
                    <li>
                      <Link
                        to="/board"
                        className="flex items-center p-1 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group dark:text-slate-400 dark:hover:bg-gray-700"
                      >
                        Board
                      </Link>
                    </li>
                    <li
                      
                    >
                      <Link
                        to="/team"
                        className="flex items-center p-1 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group dark:text-slate-400 dark:hover:bg-gray-700"
                      >
                        Teams
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>

          <div
            
          >
            <Link
              to="/create-project"
              className="flex items-center space-x-2 text-sm my-8 p-2 dark:text-slate-400"
            >
              <span>
                <HiPlusSm size={24} />
              </span>
              <span>Create new project</span>
            </Link>
          </div>
        </div>

        <span className="fixed top-10 -right-3 size-6 inline-flex items-center justify-center bg-[#7443FF] text-white/80 rounded-full dark:bg-[#7443FF]/80">
          <HiChevronLeft size={18} />
        </span>
      </aside>
    );
}

export default SideNav