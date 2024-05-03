/* eslint-disable @typescript-eslint/no-explicit-any */
import { useAppDispatch, useAppSelector } from "../hooks";
import { FaEye } from "react-icons/fa6";
import { RiEdit2Line } from "react-icons/ri";
import { MdDelete } from "react-icons/md";
import { BsStars } from "react-icons/bs";
import { useEffect, useState } from "react";
import axios from "axios";
import { baseURL } from "../services/baseURL";
import moment from "moment";
import ViewPatientDataModal from "../components/modals/ViewPatientDataModal";
import { openViewPatientDetailsModal } from "../redux/features/modal/modalSlice";
import { updateReportId } from "../redux/features/reportId/reportIdSlice";


// const formatPredictionConfidenceLevel = (level: number): string => {
//   return (level * 100).toFixed(0) + "%";
// };

// const reportsTransformer = (data: any): any[] => {
//     return data.map((item: any) => ({
//         id: item._id,
//         verdict: item.verdict,
//         confidence: item.prediction_id.prediction.confidence,
//         prediction: item.prediction_id.prediction.prediction
//     }))
// }

const PatientReports: React.FC = () => {
  const [reports, setReports] = useState([]);

 
  const setNewReportId = (id:string) => {
      dispatch(updateReportId(id));
  }

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`${baseURL}/reports/all`);
      setReports(res.data.reports);
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
  //   const reportsData = reportsTransformer(reports)
  console.log(reports);



 const handleDelete = async (id: string) => {
   try {
     const response = await axios.delete(`${baseURL}/reports/delete/${id}`);
     if (response.status === 200) {
       alert("sucessfully deleted data");
       window.location.reload();
     }
   } catch (error) {
     alert("Something went wrong");
   }
 };


  return (
    <section className="bg-white dark:bg-gray-900 mt-5 min-h-[83vh] flex flex-col">
      <div className="mx-2 my-4">
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
            <li className="inline-flex items-center">
              <a
                href="#"
                className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
              >
                Doctor
              </a>
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
                  Patient Reports
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
              <th className="px-6 py-3 w-1/6">Patient Name</th>
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
                  {report.prediction_id.user_id
                    ? `${report.prediction_id.user_id.firstname} ${report.prediction_id.user_id.lastname}`
                    : "N/A"}
                </td>
                <td className="px-6 py-4 w-1/6">
                  {report.prediction_id.prediction.prediction || "N/A"}
                </td>
                <td className="px-6 py-4 w-1/6">
                  {`${report.prediction_id.prediction.confidence}%` || "N/A"}
                </td>
                <td className="px-6 py-4 w-1/6">
                  {moment(report.createdAt).format("DD-MM-YYYY") || "N/A"}
                </td>
                <td className="px-6 py-4 w-1/6">
                  <button className="p-2 rounded-lg hover:bg-gray-500/20 dark:hover:bg-gray-500/50">
                    <BsStars size={18} />
                  </button>
                </td>
                <td className="pl-3 py-4 w-1/6 flex space-x-4 items-center">
                  <button
                    className="hover:text-yellow-300 "
                    onClick={handleOpenViewPatientDetailsModal}
                  >
                    <FaEye
                      size="1.4em"
                      onClick={() => {
                        setNewReportId(report._id);
                      }}
                    />
                  </button>

                  <button className="hover:text-green-400">
                    {" "}
                    <RiEdit2Line size="1.4em" />{" "}
                  </button>
                  <button
                    className="hover:text-red-600"
                    onClick={() => handleDelete(report._id)}
                  >
                    {" "}
                    <MdDelete size="1.4em" />{" "}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {is_ViewPatientDetailsModal_Open && <ViewPatientDataModal />}
    </section>
  );
};

export default PatientReports;
