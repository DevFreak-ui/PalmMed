import { LuClock10 } from "react-icons/lu";
import { HiMiniEllipsisVertical } from "react-icons/hi2";
// import { tasksData } from "../../data/taskData"
import { useState } from "react";
import { useAppSelector, useAppDispatch } from "../../hooks";
import ViewTaskModal from "../modals/ViewTaskModal";
import { openViewTaskModal,openEditTaskModal } from "../../redux/features/modal/modalSlice";
import EditTaskModal from "../modals/EditTaskModal";

interface TableRowData {
  title: string;
  id: string | null;
  status: string;
  description: string;
  timeEstimate: string;
  dueDate: string;
  createdAt: string;
  assigned: string[] | null;
  parentTaskId: string | null;
  priority?: string | null;
  timeTracked: number;
}

interface TableRowProps {
  data: TableRowData;
  index: number;
}

const TableRow = ({ data, index }: TableRowProps) => {
  const [startTracker, setStartTracker] = useState(false);

    const dispatch = useAppDispatch();

    const handleViewTaskModal = () => {
      dispatch(openViewTaskModal());
  };
    const handleEditTaskModal = () => {
      dispatch(openEditTaskModal());
  };

  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 ">
      <th
        scope="row"
        className="pr-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {data.title}
      </th>
      <td> {data.status}</td>
      <td> {data.assigned ? data.assigned.join(", ") : " "}</td>
      <td> {data.priority || " "}</td>
      <td> {data.dueDate}</td>
      <td> {data.timeEstimate} </td>
      <td> {data.timeTracked} hr</td>
      <td className="text-center">
        {/* Render When user is assigned to task */}
        <span
          className={`text-xs text-white font-semibold px-2 py-1 bg-[#7443FF] rounded-[5px] cursor-pointer
                        ${startTracker && "hidden"}
                    `}
          onClick={() => setStartTracker(true)}
        >
          Track
        </span>
        <span
          className={`inline-flex items-center space-x-1 text-xs text-white font-semibold px-2 py-1 bg-[#4BBA42] rounded-[5px] cursor-pointer
                        ${!startTracker && "hidden"}
                    `}
          onClick={() => setStartTracker(false)}
        >
          <span className="animate-spin">
            {" "}
            <LuClock10 />{" "}
          </span>
          <span>0.21</span>
        </span>
      </td>
      <td className="text-black pl-3 dark:text-gray-300">
        <button
          id={`task-dropdown-btn-${index}`}
          data-dropdown-toggle={`task-dropdown-${index}`}
        >
          <HiMiniEllipsisVertical />
        </button>
        <div
          id={`task-dropdown-${index}`}
          className="hidden z-10 w-28 bg-white rounded shadow-lg dark:bg-gray-600"
        >
          <ul
            className="py-1 text-sm text-black dark:text-gray-200"
            aria-labelledby={`task-dropdown-btn-${index}`}
          >
            <li>
              <a
                href="#"
                className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                onClick={handleViewTaskModal}
              >
                View
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                onClick={handleEditTaskModal}
              >
                Edit
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-4 text-[#FA7474] hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-[#FF2F2F]"
              >
                Delete
              </a>
            </li>
          </ul>
        </div>
      </td>
    </tr>
  );
};

const ListViewTabContent = () => {

  const isViewTaskModalOpen = useAppSelector((state) => {
    return state.modal.viewTaskModal_isOpen;
  });
    
  const isEditTaskModalOpen = useAppSelector((state) => {
    return state.modal.editTaskModal_isOpen;
  });

  const tasksData = useAppSelector((state) => {
    return state.tasks;
  });

 

  return (
    <>
      <div
        className="hidden p-4 rounded-lg dark:bg-gray-800 min-h-screen"
        id="profile"
        role="tabpanel"
        aria-labelledby="profile-tab"
      >
        <table className="w-full text-sm text-left my-6 rtl:text-right text-gray-500 dark:text-gray-400">
          <thead>
            <tr className="border-b">
              <td>Title</td>
              <td>Status</td>
              <td>Assigned To</td>
              <td>Priority</td>
              <td>Due Date</td>
              <td>Time Estimate</td>
              <td>Time Tracked</td>
              <td></td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            {tasksData.map((task, index) => (
              <TableRow key={index} data={task} index={index} />
            ))}
          </tbody>
        </table>
      </div>

      {isViewTaskModalOpen && <ViewTaskModal />}
      {isEditTaskModalOpen && <EditTaskModal />}
    </>
  );
};

export default ListViewTabContent;
