import { useNavigate } from "react-router-dom"
import { HiOutlineBell } from "react-icons/hi"
import { WiDaySunny } from "react-icons/wi"
import { PiMoon } from "react-icons/pi"
import { useState, useEffect } from "react"
import { baseURL } from "../../services/baseURL"
import axios from "axios"
import { useAppSelector } from "../../hooks"

interface TopNavProps{
    pageTitle:string
}

const TopNavDoctor = ({pageTitle}:TopNavProps) => {

const [user, setUser] = useState<any>()
 const navigate = useNavigate()

    const handleSignout = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("role")
        navigate("/login/doctor")
        
    }

  const fetchData = async () => {
    const res = await axios.get(`${baseURL}/users/find/me`);
    setUser(res.data.user)
  };

  const isSideNavActive = useAppSelector((state) => {
    return state.sideNav.sideNavIsOpen
  })

  useEffect(() => {
    fetchData();
  }, []);


    return (
        <nav className={`bg-white px-4 py-4 dark:bg-gray-800 fixed ${isSideNavActive ? 'md:ml-64' : 'md:ml-20'} h-auto left-0 right-0 top-0 z-20`}>
            <div className="flex flex-wrap justify-between items-center">
                <div className="flex justify-start items-center">
                    {/* Hamburger Menu onSmall Screens */}
                    <button
                        data-drawer-target="drawer-navigation"
                        data-drawer-toggle="drawer-navigation"
                        aria-controls="drawer-navigation"
                        className="p-2 mr-2 text-gray-600 rounded-lg cursor-pointer md:hidden hover:text-gray-900 hover:bg-gray-100 focus:bg-gray-100 dark:focus:bg-gray-700 focus:ring-2 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                        <svg
                        aria-hidden="true"
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <path
                            fillRule="evenodd"
                            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                            clipRule="evenodd"
                        ></path>
                        </svg>
                        <svg
                        aria-hidden="true"
                        className="hidden w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <path
                            fillRule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clipRule="evenodd"
                        ></path>
                        </svg>
                        <span className="sr-only">Toggle sidebar</span>
                    </button>
                    <h1 className="text-3xl font-semibold text-[#05070B]/93 dark:text-slate-400 p-4"> {pageTitle} </h1>
                </div>

                <div className="flex items-center lg:order-2">

                    {/* Theme Toggler */}
                    <button id="theme-toggle" type="button" className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-0 rounded-lg text-sm p-2.5">
                        <span id="theme-toggle-light-icon" className="hidden w-5 h-5"> <WiDaySunny size={20} /> </span>
                        <span id="theme-toggle-dark-icon" className="hidden w-5 h-5"> <PiMoon size={20} /> </span>
                    </button>

                    {/* Notifications */}
                    <button
                        type="button"
                        data-dropdown-toggle="notification-dropdown"
                        className="p-2 mr-1 text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700 focus:outline-none focus:ring-0"
                    >
                        <span className="sr-only">View notifications</span>
                        <HiOutlineBell size={20}/>
                    </button>
                    <div
                        className="hidden overflow-hidden z-50 my-4 max-w-sm text-base list-none bg-white rounded divide-y divide-gray-100 shadow-lg dark:divide-gray-600 dark:bg-gray-700 rounded-xl"
                        id="notification-dropdown">
                        <div className="block py-2 px-4 text-base font-medium text-center text-gray-700 bg-gray-50 dark:bg-gray-600 dark:text-gray-300">
                            Notifications
                        </div>
                        <div className="text-center">
                            Empty
                        </div>
                        <a
                        href="#"
                        className="block py-2 text-md font-medium text-center text-gray-900 bg-gray-50 hover:bg-gray-100 dark:bg-gray-600 dark:text-white dark:hover:underline"
                        >
                        View all
                        </a>
                    </div>
                    
                    {/* User Profile */}
                    <button
                        type="button"
                        className="flex mx-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                        id="user-menu-button"
                        aria-expanded="false"
                        data-dropdown-toggle="dropdown"
                    >
                        <span className="sr-only">Open user menu</span>
                        <img
                        className="w-8 h-8 rounded-full"
                        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gough.png"
                        alt="user photo"
                        />
                    </button>
                    <div
                        className="hidden z-50 my-4 w-56 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600 rounded-xl"
                        id="dropdown"
                    >
                        <div className="py-3 px-4">
                        <span
                            className="block text-sm font-semibold text-gray-900 dark:text-white"
                            >{user?.firstname} {user?.lastname}</span>
                        <span
                            className="block text-sm text-gray-900 truncate dark:text-white"
                            >{user?.email}</span>
                        </div>
                        <ul
                        className="py-1 text-gray-700 dark:text-gray-300"
                        aria-labelledby="dropdown"
                        >
                        <li>
                            <a
                            href="#"
                            className="block py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
                            >My profile</a>
                        </li>
                        <li>
                            <a
                            href="#"
                            className="block py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
                            >Account settings</a>
                        </li>
                        </ul>
                        <ul
                        className="py-1 text-gray-700 dark:text-gray-300"
                        aria-labelledby="dropdown"
                        >
                        <li onClick={handleSignout}>
                            <a
                            href="#"
                            className="block py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            >Sign out</a>
                        </li>
                        </ul>
                    </div>

                </div>
            </div>
        </nav>
    )
}

export default TopNavDoctor