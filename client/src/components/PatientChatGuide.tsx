
import { BsStars } from "react-icons/bs";
import { FaHeartbeat } from "react-icons/fa";

const PatientChatGuide = () => {

    return (
        <>
            <h1 className="h-screen w-full">
                <div className="w-3/5 mx-auto">
                    <h1 className="underline text-4xl font-bold my-6">
                        How to Use our Chat for Insight
                    </h1>
                    <ol className="list-decimal font-normal text-[18px] text-gray-700 dark:text-white/70 space-y-6 px-2">
                        <li>Visit your reports by clicking on 
                            <span className="px-2 font-bold text-gray-700 dark:text-white underline">Reports</span>on the left side of the page
                        </li>
                        <li>Find the report you want insight into and click on 
                            <span className="inline-flex mx-2 p-1.5 rounded-lg bg-gray-400/40"><BsStars size={18} /></span> 
                            to start a chat based on the context of the report
                        </li>
                        <li>Type your prompt/question in the iput field provided on the next page</li>
                        <li>Viola!! have a lovely chat with our AI specifically trained to help you live a clean heart 
                            <span className="text-red-600/90 inline-flex mx-2"><FaHeartbeat size={18}/></span>
                        </li>
                    </ol>
                    <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                    <p className="text-sm text-gray-500">Disclaimer: Our AI does NOT replace a medical professional. 
                    Hallucinations may happen as a result of making inference from third-party base models.</p>
                </div>
            </h1>
        </>
    )
}

export default PatientChatGuide