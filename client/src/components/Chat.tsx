import React, { useState, useEffect } from 'react'
import { chatData, Question } from '../data/mockQnAData'
import { componentMap } from './AnswerComponent'
import Bot from '../assets/images/bot.png'
import Profile from '../assets/images/avatar.png'

const Chat: React.FC = () => {
    const [chatHistory, setChatHistory] = useState<Question[]>([]);

    useEffect(() => {
        setChatHistory([chatData[0]]);
    }, []);

    const handleAnswer = (nextQuestionIndex: number) => {
        // Add next question to chat history
        if (nextQuestionIndex < chatData.length) {
            setChatHistory(history => [...history, chatData[nextQuestionIndex]]);
        }
    };

    return (
        <div className="w-4/5 h-auto min-h-screen mx-auto my-8 space-y-12">
            {chatHistory.map((item, index) => (
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
            ))}
        </div>
    );
}

export default Chat;
