import TopNavDoctor from "../components/navigations/TopNavDoctor";
import SideNavDoctor from "../components/navigations/SideNavDoctor";

import { Outlet } from "react-router-dom";
import { useAppSelector } from "../hooks";


const DoctorContainer = () => {
    const pageTitle = useAppSelector((state) => {
		return state.topNav.pageTitle
	})

const isSideNavActive = useAppSelector((state) => {
  return state.sideNav.sideNavIsOpen
})

  return (
    <>
      <div className="antialiased dark:bg-gray-900 dark:text-white ">
        <SideNavDoctor />

        <main className={`p-4 ${isSideNavActive ? 'md:ml-64' : 'md:ml-24'} h-auto pt-24`}>
        <TopNavDoctor pageTitle={pageTitle} />


          {/* LOAD PAGES */}
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default DoctorContainer;
