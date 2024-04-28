import os
import logging
from dotenv import load_dotenv
load_dotenv()
from pydantic import BaseModel
from langchain_openai import ChatOpenAI
from langchain.prompts import ChatPromptTemplate, MessagesPlaceholder
from langchain_core.runnables.history import RunnableWithMessageHistory
from langchain.memory import ConversationBufferMemory
from langchain.chains.llm import LLMChain
from langchain_community.chat_message_histories.upstash_redis import (
    UpstashRedisChatMessageHistory
)
from langchain_community.chat_message_histories import ChatMessageHistory
from langchain_core.chat_history import BaseChatMessageHistory
from langchain_core.messages import HumanMessage, AIMessage

llm = ChatOpenAI(
    api_key=os.getenv('OPENAI_API_KEY'),
    model='gpt-3.5-turbo',
    temperature=0.2
)

history = UpstashRedisChatMessageHistory(
    url=f'https://{os.getenv('REDIS_ENDPOINT')}',
    token=os.getenv('REDIS_PASSWORD'),
    session_id='2626262655454535366363',
    ttl=0
)

logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')


class RequestData(BaseModel):
    prediction: int


class ModelPredictionHistory:
    def retrieval_chain_prediction(self, patient_data, result:RequestData, input):
        if result.prediction == 1:
            result_data = "You have a heart disease"
        elif result.prediction == 0:
            result_data = "You do not have a heart disease"
        prompt = ChatPromptTemplate.from_messages(
            [
                (
                    "system",
                    """You are hearty a cardiologist, provide accurate answers based on the {context} provided. 
                    If you don't know the answer to any question truthfully say so and do not hallucinate.""",
                ),
                MessagesPlaceholder(variable_name="chathistory"),
                ("human", "{input}"),
            ]
        )
        store = {}


        def get_session_history(session_id: str) -> BaseChatMessageHistory:
            if session_id not in store:
                store[session_id] = ChatMessageHistory()
            return store[session_id]

        chain = prompt | llm

        conversation = RunnableWithMessageHistory(
            chain,
            get_session_history,
            input_messages_key="input",
            history_messages_key="chathistory",
   
        )
        
        context = f"""
            Based on this: {patient_data}. This is your result: {result_data}
        """

        chat_history = []
        response = conversation.invoke(
            {"context": context, "input": input},
            config={"configurable": {"session_id": "abc123"}},
        )
        chat_history.append(HumanMessage(content=input))
        chat_history.append(AIMessage(content=str(response)))
        return response.content
    
    

        
