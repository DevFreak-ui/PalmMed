/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import axios from "axios";
import Bot from "../assets/images/bot.png";
import Profile from "../assets/images/avatar.png";
import { CiExport } from "react-icons/ci";
import jsPDF from "jspdf";
import { exportChatToPDF, splitTextIntoLines } from "../helpers";
import { IoIosSend } from "react-icons/io";
import { useParams, useNavigate } from "react-router-dom";
import { chatBaseURL } from "../services/baseURL";
import { useLocation } from "react-router-dom";

const PalmGPTChat: React.FC = () => {
  const navigate = useNavigate()
  const { state } = useLocation();
  const { id } = useParams<any>();
  const [chatHistory, setChatHistory] = useState<
    Array<{ sender: string; message: string }>
  >([]);
  const [userInput, setUserInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [chatMessages, setchatMessages] = useState<any>();

  const fetchChatById = async (chatId: any) => {
    try {
      const response = await axios.get(`${chatBaseURL}/chats/${chatId}`);
      const chatData = response.data.chat;

      const chatHistoryData = chatData.chat_message.flatMap(
        (message: any) => [
          { sender: "user", message: message.propmt },
          { sender: "PalmMedBot", message: message.ai_response },
        ]
      );

      setChatHistory(chatHistoryData);
      setchatMessages(response.data.chat.chat_message[0].message.context_schema.patient_report)
      
    } catch (error) {
      console.error("Error fetching chat data:", error);
    }
  };
  useEffect(() => {
    fetchChatById(id);
  }, [id]);

  
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(event.target.value);
  };

  let message: any;
  let chat_id: any;

 
  if (state) {
    chat_id = state.id?.chat?._id;
  
    message = {
      user_prompt: {
        prompt: userInput,
      },
      context_schema: {
        patient_report: {
          age: `${state.resData.prediction_id.age}`,
          sex: `${state.resData.prediction_id.sex}`,
          cp: `${state.resData.prediction_id.cp}`,
          trestbps: `${state.resData.prediction_id.trestbps}`,
          chol: `${state.resData.prediction_id.chol}`,
          fbs: `${state.resData.prediction_id.fbs}`,
          restecg: `${state.resData.prediction_id.restecg}`,
          thalach: `${state.resData.prediction_id.thalach}`,
          exang: `${state.resData.prediction_id.exang}`,
          oldpeak: `${state.resData.prediction_id.oldpeak}`,
          slope: `${state.resData.prediction_id.slope}`,
          ca: `${state.resData.prediction_id.ca}`,
          thal: `${state.resData.prediction_id.thal}`,
          confidence: state.resData.prediction_id.prediction.confidence,
          prediction: `${state.resData.prediction_id.prediction.prediction}`,
        },
      },
    };
  } else if (chatMessages) {
    message = {
      user_prompt: {
        prompt: userInput,
      },
      context_schema: {
        patient_report: {
          age: `${chatMessages.age}`,
          sex: `${chatMessages.sex}`,
          cp: `${chatMessages.cp}`,
          trestbps: `${chatMessages.trestbps}`,
          chol: `${chatMessages.chol}`,
          fbs: `${chatMessages.fbs}`,
          restecg: `${chatMessages.restecg}`,
          thalach: `${chatMessages.thalach}`,
          exang: `${chatMessages.exang}`,
          oldpeak: `${chatMessages.oldpeak}`,
          slope: `${chatMessages.slope}`,
          ca: `${chatMessages.ca}`,
          thal: `${chatMessages.thal}`,
          confidence: chatMessages.confidence,
          prediction: `${chatMessages.prediction}`,
        },
      },
    };
  }
  
  
  const handleSubmit = async () => {
    if (!userInput.trim()) return;
    const postData = {
      message: message,
      chat_id: chat_id || id,
    };

    try {
      setLoading(true);
      const response = await axios.post(
        "http://localhost:6200/api/v2/messages/create-message",
        postData
      );
      const id = response.data.data.chat_id
      const newUserMessage = {
        sender: "user",
        message: userInput,
      };
   
    setChatHistory((prevChatHistory) => [...prevChatHistory, newUserMessage]);
    const aiResponse = response.data.data.ai_response

    const newAiMessage = {
      sender: "PalmMedBot",
      message: aiResponse,
    };
    setChatHistory((prevChatHistory) => [...prevChatHistory, newAiMessage]);
    
    setLoading(false);
      if(response.status === 201){
        navigate(`/dashboard/patient/palm-gpt/${id}`)
      }
     
    } catch (error) {
      setLoading(false);
      console.error("Error fetching response:", error);
    }
    setUserInput("");
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSubmit();
    }
  };

  const exportChat = () => {
    return exportChatToPDF(chatHistory)
  }

  return (
    <div className="w-4/5 min-h-screen mx-auto my-8 space-y-12 pb-12">
      {/* Export Chat Button */}
      <button
        onClick={exportChat}
        className="border border-gray-400 px-3 py-2 w-42 rounded-lg text-sm dark:text-white fixed right-4 top-[90px] flex space-x-2 text-gray-800"
      >
        <CiExport size={18} />
        <span>Export Chat</span>
      </button>

      {/* Chat History */}
      {loading ? (
        <div
          role="status"
          className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-500 bg-opacity-50"
        >
          <div className="rounded-full border-t-4 border-b-4 border-gray-200 h-12 w-12 animate-spin"></div>
        </div>
      ) : (
        chatHistory.map((item, index) => (
          <div
            key={index}
            className={`flex items-start ${
              item.sender === "user" ? "justify-end" : "justify-start"
            } gap-2.5`}
          >
            <img
              className={`${
                item.sender === "user" ? "order-last" : ""
              } w-8 h-8 rounded-full`}
              src={item.sender === "user" ? Profile : Bot}
              alt={`${item.sender} image`}
            />
            <div
              className={`flex flex-col w-full max-w-[400px] leading-1.5 p-2 ${
                item.sender === "user" ? "bg-blue-100" : "bg-gray-100"
              } border border-gray-200 rounded-e-xl rounded-es-xl dark:border-0 dark:bg-gray-700`}
            >
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <span className="text-sm font-semibold text-gray-900 dark:text-white">
                  {item.sender === "user" ? "Me" : "PalmMedBot"}
                </span>
              </div>
              <p className="py-2.5 text-sm font-normal text-gray-900 dark:text-white">
                {item.message}
              </p>
            </div>
          </div>
        ))
      )}

      {/* Input Field */}
      <div className="flex items-center fixed bottom-4 w-[50%] border rounded dark:bg-gray-800 shadow-sm dark:border-gray-400 focus:border-gray-400">
        <input
          type="text"
          value={userInput}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          placeholder="Ask something..."
          className="w-[95%] p-4 bg-transparent border-0 focus:ring-0 focus:outline-none focus:border-0"
        />
        <button
          type="submit"
          className="bg-gray-400/50 text-white rounded-md p-2 mx-2"
          onClick={() => handleSubmit()}
        >
          <IoIosSend size={18} />
        </button>
      </div>
    </div>
  );
};

export default PalmGPTChat;
