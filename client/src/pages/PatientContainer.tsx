import SideNav from "../components/navigations/SideNav";
import TopNav from "../components/navigations/TopNav";
import { Outlet } from "react-router-dom";


const PatientContainer = () => {
  
 

  return (
    <>
      <div className="antialiased dark:bg-gray-900 dark:text-white ">
        <SideNav />

        <main className="p-4 md:ml-64 h-auto pt-24">
          <TopNav  />

          {/* LOAD PAGES */}
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default PatientContainer;
