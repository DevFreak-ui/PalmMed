import { useAppDispatch, useAppSelector } from "../hooks";
import { openFormModal } from "../redux/features/modal/modalSlice"
import FormModal from "./modals/FormModal";


export const AnswerOptionsComponent1: React.FC<{ onAnswer: () => void }> = ({ onAnswer }) => (
    <div className="space-x-3 my-3">
        <button
            className="bg-blue-500/50 p-3 w-42 rounded-lg text-sm font-medium text-white"
            onClick={onAnswer}>
            Make a prediction
        </button>
        <button
            className="bg-blue-500/50 p-3 w-42 rounded-lg text-sm font-medium text-white"
            onClick={onAnswer}>
            Go Back Home
        </button>
    </div>
);

export const AnswerOptionsComponent2: React.FC<{ onAnswer: () => void }> = ({ onAnswer }) => (
    <div className="space-x-3 my-3">
        <button 
            className="bg-blue-500/50 p-3 w-42 rounded-lg text-sm font-medium text-white"
            onClick={onAnswer}>
            Yes
        </button>
        <button 
            className="bg-blue-500/50 p-3 w-42 rounded-lg text-sm font-medium text-white"
            onClick={onAnswer}>
            No
        </button>
    </div>
);

export const AnswerOptionsComponent3: React.FC<{ onAnswer: () => void }> = ({ onAnswer }) => {
    const dispatch = useAppDispatch()
    const handleOpenFormModal = () => {
        dispatch(openFormModal())
    }
    const is_FormModal_Open = useAppSelector((state) => {
        return state.modalForm.formModal_isOpen;
    })
    return <>
     <button
        className="bg-blue-500/50 p-3 max-w-32 my-3 rounded-lg text-sm font-medium text-white"
         onClick={handleOpenFormModal} >
            
        Complete form
    </button>
     { is_FormModal_Open && <FormModal /> }
    </>
};

// Export a map of all components
export const componentMap = {
    AnswerOptionsComponent1,
    AnswerOptionsComponent2,
    AnswerOptionsComponent3
};
