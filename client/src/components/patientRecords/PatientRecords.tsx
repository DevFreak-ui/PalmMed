/* eslint-disable @typescript-eslint/no-explicit-any */

import { FaEye } from "react-icons/fa6";
import { RiEdit2Line } from "react-icons/ri";
import { MdDelete } from "react-icons/md";
import ViewPatientDataModal from "../modals/ViewPatientDataModal";
import { useAppDispatch, useAppSelector } from "../../hooks";
import {
  openFormModal,
  closeFormModal, openPredictionResultsModal, closePredictionResultsModal,
} from "../../redux/features/modal/modalSlice";
import FormModal from "../modals/FormModal";
import { useEffect, useState } from "react";
import {
  openViewPatientDetailsModal,
} from "../../redux/features/modal/modalSlice";
import axios from "axios";
import { baseURL } from "../../services/baseURL";
import PredicitonResultsModal from "../modals/PredictionResultsModal";
import { useNavigate } from "react-router-dom"

const PatientRecords = () => {
  const [allUsers, setAllUser] = useState([])
  const [userId, setUserId] = useState<any>()

  const fetchAllUsers = async () => {
    const res2 = await axios.get(`${baseURL}/users/find/all`);
    setAllUser(res2.data.users)
  };

  useEffect(() => {
    fetchAllUsers()
  }, []);


  const is_FormModal_Open = useAppSelector((state) => {
    return state.modalForm.formModal_isOpen;
  });

  const is_PatientPredictionResultsModal_isOpen = useAppSelector((state) => {
    return state.modalForm.predictionResultsModal_isOpen;
  });

  const is_ViewPatientDetailsModal_Open = useAppSelector((state) => {
    return state.modalForm.viewPatientDetailsModal_isOpen;
  });

  const dispatch = useAppDispatch();

  const handleOpenFormModal = (id: any) => {
    setUserId(id)
    dispatch(openFormModal());
  };
  const handleOpenViewPatientDetailsModal = () => {
    dispatch(openViewPatientDetailsModal());
  };




  
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 table-fixed">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-200">
          <tr>
            <th className="px-6 py-3 w-1/6">First Name</th>
            <th className="px-6 py-3 w-1/6">Last Name</th>
            <th className="px-6 py-3 w-1/6">Email</th>
            <th className="px-6 py-3 w-1/6">Account Created</th>
            <th className="px-6 py-3 w-1/6">Heart Disease %</th>
            <th className="px-6 py-3 w-1/6">Action</th>
            <th className="px-6 py-3 w-1/6">AI / PalmGPT</th>
          </tr>
        </thead>
        <tbody>
          {allUsers?.map((user: any) => (
            <tr
              key={user.id}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <td className="px-6 py-4 w-1/6">{user.firstname}</td>
              <td className="px-6 py-4 w-1/6">{user.lastname}</td>
              <td className="px-6 py-4 w-1/6">{user.email}</td>
              <td className="px-6 py-4 w-1/6">N/A</td>
              <td className="px-6 py-4 w-1/6">N/A</td>
              <td className="px-6 py-4 w-1/6 flex space-x-4 items-center">
                <button
                  className="hover:text-yellow-300"
                  onClick={handleOpenViewPatientDetailsModal}
                >
                  <FaEye size="1.4em" />
                </button>
                <button className="hover:text-green-400">
                  <RiEdit2Line size="1.4em" />
                </button>
                <button className="hover:text-red-600">
                  <MdDelete size="1.4em" />
                </button>
              </td>
              <td className="px-6 py-4 w-1/6">
                <button className="" onClick={()=>handleOpenFormModal(user._id)}>
                  {" "}
                  <span className="bg-purple-600 hover:bg-transparent hover:text-black dark:hover:text-white hover:border dark:hover:border-neutral-200 hover:border-purple-600 text-white text-xs  p-2 font-bold rounded-lg">
                    {" "}
                    Make Prediction
                  </span>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {is_FormModal_Open && <FormModal id={userId}/>}
      {is_ViewPatientDetailsModal_Open && <ViewPatientDataModal />}
      {is_PatientPredictionResultsModal_isOpen && <PredicitonResultsModal />}
    </div>
  );
};

export default PatientRecords;
