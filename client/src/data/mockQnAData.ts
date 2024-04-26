// Define the type for a question
export type Question = {
    ChatQuestion: string;
    AnswerOptions: keyof typeof componentMap;
};

// Import the component map if necessary, or define it here
import { componentMap } from "../components/AnswerComponent"

// Define the chat data array
export const chatData: Question[] = [
    {
        ChatQuestion: "Hello, Welcome to PalmMed. I'm excited to have you here! How can i help you today?",
        AnswerOptions: 'AnswerOptionsComponent1'
    },
    {
        ChatQuestion: "Sure! I may need to ask you a few questions is that okay?",
        AnswerOptions: 'AnswerOptionsComponent2'
    },
    {
        ChatQuestion: "Great! Click on button on your right to start the form?",
        AnswerOptions: 'AnswerOptionsComponent3'
    },
];