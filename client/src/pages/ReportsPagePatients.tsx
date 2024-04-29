import { PatientsReportData } from "../data/patientsReportMockData";
import { RiEdit2Line } from "react-icons/ri";
import { MdDelete } from "react-icons/md";
import { BsStars } from "react-icons/bs";
import { useState } from "react";

const formatPredictionConfidenceLevel = (level: number): string => {
    return (level * 100).toFixed(0) + '%';
};

const reportId = 'fdfdffsdsds'

const PatientReportsPage: React.FC = () => {

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
        }
    }

    // To be obtained from another endpoint
    const dummyPatientName = {
        name: 'Prince Mireku'
    }

    const [initialValue, setInitialValue] = useState("")
    const [loadingMap, setLoadingMap] = useState<{ [key: string]: boolean }>({});

    const handleContextGeneration = (reportId: string) => {
        setLoadingMap(prevState => ({ ...prevState, [reportId]: true }));
    
        // Simulate API call to get prediction results
        setTimeout(() => {
    
            
            console.log(dummyPredictionResults);
    
            setLoadingMap(prevState => ({ ...prevState, [reportId]: false }));
        }, 1000);
    }
    

    return (
        <section className="bg-white dark:bg-gray-900 mt-5 min-h-[83vh] flex flex-col">
            <div className="mx-2 mb-4">
                <nav className="flex" aria-label="Breadcrumb">
                    <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                        <li className="inline-flex items-center">
                            <a href="#" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                                Home
                            </a>
                        </li>
                        <li>
                            <div className="flex items-center">
                                <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                                </svg>
                                <a href="#" className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">Reports</a>
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

                        {PatientsReportData.map((patient) => (
                            <tr key={patient.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <td className="px-6 py-4 w-1/6">{patient.name}</td>
                                <td className="px-6 py-4 w-1/6">{
									patient.prediction === 1 ? 'Yes, diesease likely present' : 'No disease present'
								}</td>
                                <td className="px-6 py-4 w-1/6">{formatPredictionConfidenceLevel(patient.cLevel)}</td>
                                <td className="px-6 py-4 w-1/6">{patient.dateCreated}</td>
								 <td className="px-6 py-4 w-1/6">
									<button 
                                        onClick={() => handleContextGeneration(reportId)}
                                        className="p-2 rounded-lg hover:bg-gray-500/20 dark:hover:bg-gray-500/50"> 
										{!loadingMap[patient.id] ? <BsStars size={18} /> :
                                            <div role="status">
                                                <svg aria-hidden="true" className="w-4 h-4 me-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/></svg>
                                                <span className="sr-only">Loading...</span>
                                            </div>}
 
									</button>
								 </td>
								 <td className="pl-3 py-4 w-1/6 flex space-x-4 items-center">
                                        <button className="hover:text-green-400" > <RiEdit2Line size="1.4em"/> </button>
                                        <button className="hover:text-red-600"> <MdDelete size="1.4em"/> </button>
                                 </td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default PatientReportsPage;
