import React, { useState, useEffect } from 'react'
import { chatData, Question } from '../data/mockQnAData'
import { componentMap } from './AnswerComponent'
import Bot from '../assets/images/bot.png'
import Profile from '../assets/images/avatar.png'
import { CiExport } from "react-icons/ci"
import jsPDF from 'jspdf' 
import { splitTextIntoLines } from '../helpers'

const Chat: React.FC = () => {
    const [chatHistory, setChatHistory] = useState<Question[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate fetching data with a delay
        setTimeout(() => {
            setChatHistory([chatData[0]]);
            setLoading(false);
        }, 2000);
    }, []);

    const handleAnswer = (nextQuestionIndex: number) => {
        // Add next question to chat history
        if (nextQuestionIndex < chatData.length) {
            setChatHistory(history => [...history, chatData[nextQuestionIndex]]);
        }
    };

    const exportChatToPDF = () => {
        const doc = new jsPDF();
        const pageWidth: number = doc.internal.pageSize.getWidth();
        let y: number = 20; // vertical offset for elements
    
        chatHistory.forEach((item: Question, index: number) => {
            // Ensure each line does not exceed page width
            const questionLines: string[] = splitTextIntoLines(`Bot: ${item.ChatQuestion}`, doc, pageWidth - 20);
            questionLines.forEach((line: string) => {
                doc.text(line, 10, y);
                y += 10;
            });
    
            if (index < chatHistory.length - 1) {
                const userResponse: string = "Yes"; // Assuming a default response for simplicity
                const answerLines: string[] = splitTextIntoLines(`User: ${userResponse}`, doc, pageWidth - 20);
                answerLines.forEach((line: string) => {
                    doc.text(line, 10, y);
                    y += 10;
                });
            }
        });
    
        doc.save('chat-history.pdf');
    };

    return (
        <div className="w-4/5 min-h-screen mx-auto my-8 space-y-12">

            {/* Export Chat Option */}
            <button 
                onClick={exportChatToPDF}
                className='border border-gray-400 px-3 py-2 w-42 rounded-lg text-sm text-white fixed right-4 top-[90px] flex space-x-2'>
                <CiExport size={18}/>
                <span>Export Chat</span>
            </button>

            {loading ? (
                <div role="status" className="max-w-sm animate-pulse">
                    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
                    <span className="sr-only">Loading...</span>
                </div>
            ) : (
                chatHistory.map((item, index) => (
                    <React.Fragment key={index}>

                        {/* Message from Bot */}
                        <div className="flex items-start justify-start gap-2.5">
                            <img className="w-12 h-12 rounded-full" src={Bot} alt="Bot image"/>
                            <div className="flex flex-col w-full max-w-[320px] leading-1.5 p-2 bg-gray-100 border-gray-200 rounded-e-xl rounded-es-xl dark:bg-gray-700">
                                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                                    <span className="text-sm font-semibold text-gray-900 dark:text-white">PalmMedBot</span>
                                </div>
                                <p className="py-2.5 text-sm font-normal text-gray-900 dark:text-white">{item.ChatQuestion}</p>
                            </div>
                        </div>

                        {/* Message from User */}
                        <div className="flex items-start justify-end gap-2.5">
                            <div className="flex flex-col w-full max-w-[320px] leading-1.5 p-2 border-gray-200 rounded-e-xl rounded-es-xl">
                                <div className="flex items-center space-x-reverse space-x-2">
                                    <span className="text-sm font-semibold text-gray-900 dark:text-white">Me</span>
                                </div>
                                {/* Render Answer Component Here */}
                                {React.createElement(componentMap[item.AnswerOptions], {
                                    onAnswer: () => handleAnswer(index + 1)
                                })}
                            </div>
                            <img className="w-8 h-8 rounded-full" src={Profile} alt="User image"/>
                        </div>
                    </React.Fragment>
                ))
            )}
        </div>
    );
}

export default Chat;
