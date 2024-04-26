import React, { useState } from 'react';
import axios from 'axios';
import Bot from '../assets/images/bot.png';
import Profile from '../assets/images/avatar.png';
import { CiExport } from "react-icons/ci";
import jsPDF from 'jspdf';
import { splitTextIntoLines } from '../helpers';

const PalmGPTChat: React.FC = () => {
    const [chatHistory, setChatHistory] = useState<Array<{sender: string, message: string}>>([]);
    const [userInput, setUserInput] = useState('');
    const [loading, setLoading] = useState(false);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserInput(event.target.value);
    };

    const handleSubmit = async () => {
        if (!userInput.trim()) return;
        const newMessage = { sender: 'user', message: userInput };
        setChatHistory([...chatHistory, newMessage]);

        try {
            setLoading(true);
            const response = await axios({
                method: 'post',
                url: `https://7588-41-66-228-33.ngrok-free.app/api/v1/llm/chat?question=${encodeURIComponent(userInput)}`,
                maxBodyLength: Infinity,
                headers: {
                    // Add headers here if necessary, e.g., Authorization
                }
            });
            setLoading(false);
            setChatHistory(history => [...history, { sender: 'bot', message: response.data.answer }]);
        } catch (error) {
            setLoading(false);
            console.error('Error fetching response:', error);
            setChatHistory(history => [...history, { sender: 'bot', message: 'Failed to fetch response from server. Please check your network and try again.' }]);
        }
        setUserInput(''); // Clear input field after submission
    };

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            handleSubmit();
        }
    };

    const exportChatToPDF = () => {
        const doc = new jsPDF();
        const pageWidth: number = doc.internal.pageSize.getWidth();
        let y: number = 20; // vertical offset for elements
    
        chatHistory.forEach((item, index) => {
            const lines: string[] = splitTextIntoLines(`${item.sender === 'user' ? 'Me' : 'PalmMedBot'}: ${item.message}`, doc, pageWidth - 20);
            lines.forEach(line => {
                doc.text(line, 10, y);
                y += 10;
            });
        });
    
        doc.save('PalmGPT-history.pdf');
    };

    return (
        <div className="w-4/5 min-h-screen mx-auto my-8 space-y-12">

            {/* Export Chat Button */}
            <button onClick={exportChatToPDF} className='border border-gray-400 px-3 py-2 w-42 rounded-lg text-sm dark:text-white fixed right-4 top-[90px] flex space-x-2 text-gray-800'>
                <CiExport size={18}/>
                <span>Export Chat</span>
            </button>

            {/* Chat History */}
            {loading ? (
                <div role="status" className="flex justify-center items-center">
                    <div className="spinner"></div>
                </div>
            ) : (
                chatHistory.map((item, index) => (
                    <div key={index} className={`flex items-start ${item.sender === 'user' ? 'justify-end' : 'justify-start'} gap-2.5`}>
                        <img className={`${item.sender === 'user' ? 'order-last' : ''} w-8 h-8 rounded-full`} src={item.sender === 'user' ? Profile : Bot} alt={`${item.sender} image`} />
                        <div className={`flex flex-col w-full max-w-[320px] leading-1.5 p-2 ${item.sender === 'user' ? 'bg-blue-100' : 'bg-gray-100'} border border-gray-200 rounded-e-xl rounded-es-xl dark:border-0 dark:bg-gray-700`}>
                            <div className="flex items-center space-x-2 rtl:space-x-reverse">
                                <span className="text-sm font-semibold text-gray-900 dark:text-white">{item.sender === 'user' ? 'Me' : 'PalmMedBot'}</span>
                            </div>
                            <p className="py-2.5 text-sm font-normal text-gray-900 dark:text-white">{item.message}</p>
                        </div>
                    </div>
                ))
            )}

            {/* Input Field */}
            <input
                type="text"
                value={userInput}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
                placeholder="Ask something..."
                className="w-[50%] p-4 border rounded shadow-sm fixed bottom-8 dark:bg-gray-800 focus:ring-0 focus:outline-none focus:border-gray-400"
            />
        </div>
    );
}

export default PalmGPTChat;
