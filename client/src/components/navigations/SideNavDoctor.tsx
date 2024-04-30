import { IoCopyOutline } from "react-icons/io5"
import { BsChatSquareText } from "react-icons/bs";
import { FaRegCircleQuestion, FaS } from "react-icons/fa6";
import { GoGear } from "react-icons/go";
import { TiDocument } from "react-icons/ti";
import { CiBoxList } from "react-icons/ci";
import { selectPageTitle } from "../../redux/features/topNavbar/topNavbarSlice";
import { MdOutlineChevronLeft } from "react-icons/md";
import { Link } from "react-router-dom";
import { TbSquareToggle } from "react-icons/tb";
import { TbCheckupList } from "react-icons/tb";
import { useAppSelector, useAppDispatch } from "../../hooks"
import { toggleSideNav } from "../../redux/features/SideNav/sidenavSlice"

const SideNavDoctor = () => {
    const dispatch = useAppDispatch()

    const isSideNavActive = useAppSelector((state) => {
      return state.sideNav.sideNavIsOpen
    })

    const handleSideNavChange = () => {
      dispatch(toggleSideNav())
    }
    
  return (
    <>

      {isSideNavActive ? (
        <aside
        className="fixed top-0 left-0 z-40 w-64 h-screen pt-6 transition-transform -translate-x-full bg-[#F6F8FA] md:translate-x-0 dark:bg-gray-800 dark:-gray-700"
        aria-label="Sidenav"
        id="drawer-navigation"
      >
        <div className="py-2 px-4 h-full bg-[#F6F8FA] dark:bg-gray-800">
          <span className="p-1 py-1.5 font-bold text-2xl rounded-md flex items-center space-x-2 text-gray-400">
            <TbSquareToggle size={20} />
            <span>Dashboard</span>
          </span>
  
          <div className="flex justify-between flex-col h-full pb-8">
            {/* Static Navigations */}
            <ul className="space-y-1 mt-6 mb-12">
              <li
                  onClick={() => {
                          dispatch(selectPageTitle("Patient List"));
                        }}
              >
                <Link to="/dashboard/doctor/patient-list"
                 
                  className="flex items-center p-2 text-base text-gray-900 rounded-lg dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <span>
                   <CiBoxList size="1.4em"/>
                  </span>
                  <span className="ml-4">Patient List</span>
                </Link>
              </li>
              <li
                onClick={() => {
                          dispatch(selectPageTitle("Patient Reports"));
                        }}
              >
                <Link
                  to="/dashboard/doctor/patient-reports"
                  className="flex items-center p-2 text-base text-gray-900 rounded-lg dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <span>
                  <TbCheckupList size="1.3em" />
                  </span>
                  <span className="ml-4">Patient Reports</span>
                  
                </Link>
              </li>
              <li
             
              >
                <Link
                  to="/docs"
                  className="flex items-center p-2 text-base text-gray-900 rounded-lg dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <span>
                    <IoCopyOutline size="1.2em" />
                  </span>
                  <span className="ml-4">Docs</span>
                </Link>
              </li>
            </ul>
  
  
            {/* Navigate PalmGPT */}
            <Link
              to="/"
              className="w-10/12 mx-auto flex flex-col items-center justify-center text-sm rounded-[12px] h-[200px] bg-gray-500/30 space-y-4 text-gray-400/80">
              <span className=""> <FaRegCircleQuestion size={32} /></span>
              <p>Talk to PalmGPT</p>
            </Link>
    
            <ul className="space-y-1 my-2 ">
            
              <li>
                <Link
                  to="/inbox"
                  className="flex items-center p-2 text-sm text-gray-900 rounded-lg dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <span>
                    <TiDocument size="1.1em"/>
                  </span>
                  <span className="ml-4">API Reference</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/inbox"
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
        </div>
  
        <span 
          onClick={handleSideNavChange}
          className="fixed top-10 -right-3 size-6 inline-flex items-center justify-center bg-[#7443FF] text-white/80 rounded-full dark:bg-[#7443FF]/80 cursor-pointer">
          <MdOutlineChevronLeft size={20}/>
        </span>
      </aside>
      ) : (
        <aside
          className="fixed top-0 left-0 z-40 w-20 h-screen pt-6 transition-transform -translate-x-full bg-[#F6F8FA] md:translate-x-0 dark:bg-gray-800 dark:-gray-700"
          aria-label="Sidenav"
          id="drawer-navigation"
        >
          <div className="py-2 px-4 h-full bg-[#F6F8FA] dark:bg-gray-800  flex flex-col justify-between">
            <span 
              onClick={handleSideNavChange}
              className="p-1 py-3 font-bold text-2xl rounded-md text-gray-400/60 cursor-pointer">
              <TbSquareToggle size={20} />
              <span className="sr-only">Toggle Menu</span>
            </span>

            {/* Static Navigations */}
              <ul className="space-y-1 mb-12">
                <li
                    onClick={() => {
                            dispatch(selectPageTitle("Patient List"));
                          }}
                >
                  <Link to="/dashboard/doctor/patient-list"
                  
                    className="flex items-center p-2 text-base text-gray-900/80 rounded-lg dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  >
                    <span>
                    <CiBoxList size="1.4em"/>
                    </span>
                    <span className="sr-only">Patient List</span>
                  </Link>
                </li>
                <li
                  onClick={() => {
                            dispatch(selectPageTitle("Patient Reports"));
                          }}
                >
                  <Link
                    to="/dashboard/doctor/patient-reports"
                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  >
                    <span>
                      <TbCheckupList size="1.5em" />
                    </span>
                    <span className="sr-only">Patient Reports</span>
                    
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
                    <span className="sr-only">Docs</span>
                  </Link>
                </li>
              </ul>


            {/* Navigate PalmGPT */}
            <Link
              to="/"
              className="w-full mx-auto flex flex-col items-center justify-center text-xs text-center rounded-[12px] h-[200px] bg-gray-500/30 space-y-4 text-gray-400/80">
              <span className=""> <FaRegCircleQuestion size={25} /></span>
              <p>Talk to PalmGPT</p>
            </Link>

            <ul className="space-y-1 my-2 ">
            
              <li>
                <Link
                  to="/inbox"
                  className="flex items-center justify-center p-2 text-sm text-gray-900 rounded-lg dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <span>
                    <TiDocument size="1.4em"/>
                  </span>
                  <span className="sr-only">API Reference</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/inbox"
                  className="flex items-center justify-center p-2 text-sm text-gray-900 rounded-lg dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <span>
                    <GoGear size="1.4em" />
                  </span>
                  <span className="sr-only">Settings</span>
                </Link>
              </li> 
            </ul>
          </div>

          <span 
            onClick={handleSideNavChange}
            className="fixed top-10 -right-3 size-6 inline-flex items-center justify-center bg-[#7443FF] text-white/80 rounded-full dark:bg-[#7443FF]/80 cursor-pointer">
            <MdOutlineChevronLeft size={20}/>
          </span>
        </aside>
      )}
    </>

  );
};

export default SideNavDoctor;
