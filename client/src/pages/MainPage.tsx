import { IoIosSend } from "react-icons/io"
import { FaRegPenToSquare } from "react-icons/fa6"
import { AiOutlineThunderbolt } from "react-icons/ai"
import { TiLightbulb } from "react-icons/ti"

const MainPage = () => {

    return (
        <section className="h-auto my-8 w-full">
            
            {/* Header/Welcome Message */}

            {/* CTA Cards */}
            <div className="md:w-2/5 grid grid-cols-3 gap-4 mx-auto text-sm font-regular leading-tight text-gray-200/80">
                <div className="h-40 bg-gray-300 rounded-lg bg-gray-800/80 p-3 relative overflow-hidden">
                    <p>Report Issue with our one time form made just for you</p>
                    <span className="absolute size-12 bg-gray-950/50 rounded-full -right-2 -bottom-2 inline-flex justify-center items-center">
                        <AiOutlineThunderbolt size={20} />
                    </span>
                </div>
                <div className="h-40 bg-gray-300 rounded-lg bg-gray-800/80 p-3 relative overflow-hidden">
                    <p>
                        Need Help?
                        Contact One of our developers for Live Assistance
                    </p>
                    <span className="absolute size-12 bg-gray-950/50 rounded-full -right-2 -bottom-2 inline-flex justify-center items-center">
                        <TiLightbulb size={20} />
                    </span>
                </div>
                <div className="h-40 bg-gray-300 rounded-lg bg-gray-800/80 p-3 relative overflow-hidden">
                    <p>Explore our docs. Get insights from the development perspective</p>
                    <span className="absolute size-12 bg-gray-950/50 rounded-full -right-2 -bottom-2 inline-flex justify-center items-center">
                        <FaRegPenToSquare size={16} />
                    </span>
                </div>
            </div>

            {/* User Input Field */}
            <div className="flex w-3/5 border-[1px] border-gray-500/30 my-4 mx-auto rounded-lg p-1 items-center space-x-1">
                <input 
                    className="bg-transparent focus:ring-0 focus:outline-none border-0 w-[98%]" 
                    type="text" />
                <span className="bg-gray-400/50 text-white rounded-md inline-flex justify-center items-center p-2">
                    <IoIosSend size={18} />
                </span>
            </div>

        </section>
    )
}

export default MainPage