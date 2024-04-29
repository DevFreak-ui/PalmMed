import { Routes, Route } from "react-router-dom"
import { useEffect } from "react"
import MainPage from "../pages/MainPage"
import ErrorPage from "../pages/ErrorPage"
import PalmGPTChat from "../components/PalmGtp"
import Registration from "../pages/Registration"
import DoctorRegistration from "../pages/DoctorRegistration"
import PatientRegistration from "../pages/PatientRegistration"
import DoctorContainer from "../pages/DoctorContainer"
import PatientContainer from "../pages/PatientContainer"
import PatientList from "../pages/PatientList"
import PatientReports from "../pages/PatientReports"
import DoctorLoginPage from "../pages/DoctorLoginPage"
import PatientLoginPage from "../pages/PatientLoginPage"
import {setupAxiosInterceptors } from "../services/interceptors"
import DoctorAuth from "../services/DoctorAuth";
import Auth from "../services/RoleGuard";


const AppRoutes = () => {
	useEffect(() => {
		setupAxiosInterceptors()
	}, [])
	
	return (
		<>
			<Routes>
				<Route path="/" element={<Registration />} />
				<Route path="/register" element={<Registration />} />
				<Route path="/register/doctor" element={<DoctorRegistration />} />
				<Route path="/register/patient" element={<PatientRegistration />} />
				
				<Route path="/login/doctor" element={<DoctorLoginPage />} />
				<Route path="/login/patient" element={<PatientLoginPage />} />

				<Route path="/dashboard/patient" element={<Auth><PatientContainer /></Auth>} >
					<Route index element={<MainPage />} />
					<Route path="/dashboard/patient/palm-gpt" element={<PalmGPTChat />} />
				</Route>

				<Route path="/dashboard/doctor" element={<DoctorAuth><DoctorContainer /></DoctorAuth>} >
		
					<Route index element={<PatientList />} />
					<Route path="/dashboard/doctor/patient-list" element={<PatientList />} />
					<Route path="/dashboard/doctor/patient-reports" element={<PatientReports />} />
				</Route>
				
				<Route path="*" element={<ErrorPage />} />
			</Routes>
		</>
	);
};

export default AppRoutes;
