// /* eslint-disable @typescript-eslint/no-explicit-any */
// import { FaEye } from "react-icons/fa6";
// import { MdDelete } from "react-icons/md";
// import { BsStars } from "react-icons/bs";
// import { useEffect, useState } from "react";
// import axios from "axios";
// import { baseURL } from "../services/baseURL";
// import moment from "moment";
// import { useAppSelector, useAppDispatch } from "../hooks";
// import { openViewPatientDetailsModal } from "../redux/features/modal/modalSlice";
// import PatientViewReportDetails from "../components/modals/PatientViewReportDetails";
// import { Link } from "react-router-dom";
// import { updateReportId } from "../redux/features/reportId/reportIdSlice";

// const reportId = "fdfdffsdsds";

// const PatientReportsPage: React.FC = () => {
//   const [initialValue, setInitialValue] = useState("");
//   const [reports, setReports] = useState([]);
//   const [loadingMap, setLoadingMap] = useState<{ [key: string]: boolean }>({});

//   // To be obtained by one endpoint
//   const dummyPredictionResults = {
//     context: "lorem12 Something",
//     details: {
//       age: 35,
//       sex: 1,
//       cp: 2,
//       trestbps: 120,
//       chol: 200,
//       fbs: 0,
//       restecg: 1,
//       thalach: 150,
//       exang: 0,
//       oldpeak: 1.5,
//       slope: 2,
//       ca: 0,
//       thal: 3,
//     },
//   };

//    const setNewReportId = (id: string) => {
//      dispatch(updateReportId(id));
//    };
//   // To be obtained from another endpoint
//   const dummyPatientName = {
//     name: "Prince Mireku",
//   };

//   const handleContextGeneration = (reportId: string) => {
//     setLoadingMap((prevState) => ({ ...prevState, [reportId]: true }));

//     // Simulate API call to get prediction results
//     setTimeout(() => {
//       console.log(dummyPredictionResults);

//       setLoadingMap((prevState) => ({ ...prevState, [reportId]: false }));
//     }, 1000);
//   };

//   useEffect(() => {
//     const fetchData = async () => {
//       const res = await axios.get(`${baseURL}/users/find/me`);
//       setReports(res.data.user.reports);
//     };
//     fetchData();
//   }, []);

//   const is_ViewPatientDetailsModal_Open = useAppSelector((state) => {
//     return state.modalForm.viewPatientDetailsModal_isOpen;
//   });


//    const handleOpenViewPatientDetailsModal = () => {
//      dispatch(openViewPatientDetailsModal());
//    };


//   const dispatch = useAppDispatch();

//   const handleDelete = async(id: string) => {
//     try {
//       const response = await axios.delete(`${baseURL}/reports/delete/${id}`)
//       if(response.status === 200){
//         alert("sucessfully deleted data")
//         window.location.reload();
//       }
//     } catch (error) {
//       alert("Something went wrong")
//     }
//   }

//   return (
//     <section className="bg-white dark:bg-gray-900 mt-5 min-h-[83vh] flex flex-col">
//       <div className="mx-2 mb-4">
//         <nav className="flex" aria-label="Breadcrumb">
//           <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
//             <li className="inline-flex items-center">
//               <Link
//                 to="/dashboard/patient"
//                 className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
//               >
//                 Home
//               </Link>
//             </li>
//             <li>
//               <div className="flex items-center">
//                 <svg
//                   className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
//                   aria-hidden="true"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 6 10"
//                 >
//                   <path
//                     stroke="currentColor"
//                     stroke-linecap="round"
//                     stroke-linejoin="round"
//                     stroke-width="2"
//                     d="m1 9 4-4-4-4"
//                   />
//                 </svg>
//                 <a
//                   href="#"
//                   className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
//                 >
//                   Reports
//                 </a>
//               </div>
//             </li>
//           </ol>
//         </nav>
//       </div>

//       <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
//         <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 table-fixed">
//           <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-200">
//             <tr>
//               <th className="px-6 py-3 w-1/6">Name</th>
//               <th className="px-6 py-3 w-1/6">Prediction</th>
//               <th className="px-6 py-3 w-1/6">Confidence Level</th>
//               <th className="px-6 py-3 w-1/6">Report Created At</th>
//               <th className="px-6 py-3 w-1/6">AI/ PalmGPT</th>
//               <th className="px-6 py-3 w-1/6">Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {reports.map((report: any) => (
//               <tr
//                 key={report._id}
//                 className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
//               >
//                 <td className="px-6 py-4 w-1/6">
//                   {report.prediction_id.doctor_id
//                     ? `${report.prediction_id.doctor_id.firstname} ${report.prediction_id.doctor_id.lastname}`
//                     : "N/A"}
//                 </td>
//                 <td className="px-6 py-4 w-1/6">
//                   {report.prediction_id.prediction.prediction || "N/A"}
//                 </td>
//                 <td className="px-6 py-4 w-1/6">
//                   {`${report.prediction_id.prediction.confidence}%` || "N/A"}
//                 </td>
//                 <td className="px-6 py-4 w-1/6">
//                   {moment(report.createdAt).format("DD-MM-YYYY") || "N/A"}
//                 </td>
//                 <td className="px-6 py-4 w-1/6">
//                   <button
//                     onClick={() => handleContextGeneration(reportId)}
//                     className="p-2 rounded-lg hover:bg-gray-500/20 dark:hover:bg-gray-500/50"
//                   >
//                     {!loadingMap[report._id] ? (
//                       <BsStars size={18} />
//                     ) : (
//                       <div role="status">
//                         <svg
//                           aria-hidden="true"
//                           className="w-4 h-4 me-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
//                           viewBox="0 0 100 101"
//                           fill="none"
//                           xmlns="http://www.w3.org/2000/svg"
//                         >
//                           <path
//                             d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
//                             fill="currentColor"
//                           />
//                           <path
//                             d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
//                             fill="currentFill"
//                           />
//                         </svg>
//                         <span className="sr-only">Loading...</span>
//                       </div>
//                     )}
//                   </button>
//                 </td>
//                 <td className="pl-3 py-4 w-1/6 flex space-x-4 items-center">
//                   <button
//                     className="hover:text-yellow-300"
//                     onClick={handleOpenViewPatientDetailsModal}
//                   >
//                     <FaEye
//                       size="1.2em"
//                       onClick={() => {
//                         setNewReportId(report._id);
//                       }}
//                     />
//                   </button>
//                   <button
//                     className="hover:text-red-600"
//                     onClick={() => handleDelete(report._id)}
//                   >
//                     {" "}
//                     <MdDelete size="1.2em" />{" "}
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//       {is_ViewPatientDetailsModal_Open && <PatientViewReportDetails />}
//     </section>
//   );
// };

// export default PatientReportsPage;




/* eslint-disable @typescript-eslint/no-explicit-any */
import { FaEye } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { BsStars } from "react-icons/bs";
import { useEffect, useState } from "react";
import axios from "axios";
import { baseURL, chatBaseURL } from "../services/baseURL";
import moment from "moment";
import { useNavigate } from "react-router-dom"
import { useAppSelector, useAppDispatch } from "../hooks";
import { openViewPatientDetailsModal } from "../redux/features/modal/modalSlice";
import PatientViewReportDetails from "../components/modals/PatientViewReportDetails";
import { Link } from "react-router-dom";

const reportId = "fdfdffsdsds";

const PatientReportsPage: React.FC = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState<any>();
  const [data, setData] = useState("");
  const [reports, setReports] = useState([]);
  const [loadingMap, setLoadingMap] = useState<{ [key: string]: boolean }>({});

  // To be obtained by one endpoint
  const dummyPredictionResults = {
    context: "lorem12 Something",
    details: {
      age: 35,
      sex: 1,
      cp: 2,
      trestbps: 120,
      chol: 200,
      fbs: 0,
      restecg: 1,
      thalach: 150,
      exang: 0,
      oldpeak: 1.5,
      slope: 2,
      ca: 0,
      thal: 3,
    },
  };


  const handleContextGeneration = (reportId: string) => {
    setLoadingMap((prevState) => ({ ...prevState, [reportId]: true }));

    // Simulate API call to get prediction results
    setTimeout(() => {
      console.log(dummyPredictionResults);

      setLoadingMap((prevState) => ({ ...prevState, [reportId]: false }));
    }, 1000);
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`${baseURL}/users/find/me`);
      setReports(res.data.user.reports);
      setUser(res.data.user);
    };
    fetchData();
  }, []);

  const is_ViewPatientDetailsModal_Open = useAppSelector((state) => {
    return state.modalForm.viewPatientDetailsModal_isOpen;
  });


   const handleOpenViewPatientDetailsModal = () => {
     dispatch(openViewPatientDetailsModal());
   };


  const dispatch = useAppDispatch();

  const handleDelete = async(id: string) => {
    try {
      const response = await axios.delete(`${baseURL}/reports/delete/${id}`)
      if(response.status === 200){
        alert("sucessfully deleted data")
        window.location.reload();
      }
    } catch (error) {
      alert("Something went wrong")
    }
  }

  const handleSendData = async (id: string) => {
    try {
      const response = await axios.get(`${baseURL}/reports/${id}`);
      const fetchedData = response.data.report;
  
      const userData = {
        user_id: user._id,
      }
      const response2 = await axios.post(`${chatBaseURL}/chats/create-chat`, userData);
      const fetchedUserID = response2.data;
      setData(fetchedData);
  
      navigate("/dashboard/patient/palm-gpt", { state: { resData: fetchedData, id: fetchedUserID } });
    } catch (error) {
      console.log(error);
    }
  };
  
  return (
    <section className="bg-white dark:bg-gray-900 mt-5 min-h-[83vh] flex flex-col">
      <div className="mx-2 mb-4">
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
            <li className="inline-flex items-center">
              <Link
                to="/dashboard/patient"
                className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
              >
                Home
              </Link>
            </li>
            <li>
              <div className="flex items-center">
                <svg
                  className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
                <a
                  href="#"
                  className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
                >
                  Reports
                </a>
              </div>
            </li>
          </ol>
        </nav>
      </div>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 table-fixed">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-200">
            <tr>
              <th className="px-6 py-3 w-1/6">Name</th>
              <th className="px-6 py-3 w-1/6">Prediction</th>
              <th className="px-6 py-3 w-1/6">Confidence Level</th>
              <th className="px-6 py-3 w-1/6">Report Created At</th>
              <th className="px-6 py-3 w-1/6">AI/ PalmGPT</th>
              <th className="px-6 py-3 w-1/6">Action</th>
            </tr>
          </thead>
          <tbody>
            {reports.map((report: any) => (
              <tr
                key={report._id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td className="px-6 py-4 w-1/6">
                  {report.prediction_id.doctor_id
                    ? `${report.prediction_id.doctor_id.firstname} ${report.prediction_id.doctor_id.lastname}`
                    : "N/A"}
                </td>
                <td className="px-6 py-4 w-1/6">
                {report.prediction_id.prediction.prediction || "N/A"}
                </td>
                <td className="px-6 py-4 w-1/6">
                {`${report.prediction_id.prediction.confidence}%` || "N/A"}
                </td>
                <td className="px-6 py-4 w-1/6">{moment(report.createdAt).format("DD-MM-YYYY") || "N/A"}</td>
                <td className="px-6 py-4 w-1/6" onClick={()=> handleSendData(report._id)}>
                  <button
                    onClick={() => handleContextGeneration(reportId)}
                    className="p-2 rounded-lg hover:bg-gray-500/20 dark:hover:bg-gray-500/50"
                  >
                    {!loadingMap[report._id] ? (
                      <BsStars size={18} />
                    ) : (
                      <div role="status">
                        <svg
                          aria-hidden="true"
                          className="w-4 h-4 me-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                          viewBox="0 0 100 101"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                            fill="currentColor"
                          />
                          <path
                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                            fill="currentFill"
                          />
                        </svg>
                        <span className="sr-only">Loading...</span>
                      </div>
                    )}
                  </button>
                </td>
                <td className="pl-3 py-4 w-1/6 flex space-x-4 items-center">
                  <button
                    className="hover:text-yellow-300"
                    onClick={handleOpenViewPatientDetailsModal}
                  >
                    <FaEye size="1.2em" />
                  </button>
                  <button className="hover:text-red-600" onClick={()=> handleDelete(report._id)}>
                    {" "}
                    <MdDelete size="1.2em" />{" "}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {is_ViewPatientDetailsModal_Open && <PatientViewReportDetails />}
    </section>
  );
};

export default PatientReportsPage;