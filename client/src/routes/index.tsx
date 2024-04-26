import { Routes, Route } from "react-router-dom"
import Login from "../pages/LoginPage"
import Register from "../pages/RegisterPage"
import MainContainer from "../pages/Container"
import MainPage from "../pages/MainPage"
import ErrorPage from "../pages/ErrorPage"
import PalmGPTChat from "../components/PalmGtp"

const AppRoutes = () => {
	return (
		<>
			<Routes>
				<Route path="/register" element={<Register />} />
				<Route path="/login" element={<Login />} />

				<Route path="/" element={<MainContainer />} >
					<Route index element={<MainPage />} />
					<Route path="/palm-gpt" element={<PalmGPTChat />} />

				</Route>
				
				<Route path="*" element={<ErrorPage />} />
			</Routes>
		</>
	);
};

export default AppRoutes;
