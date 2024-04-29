# Data Analysis Project Setup

**Step 1: Navigate to the Data & AI Directory**

       cd Data & AI

**Step 2: Install Required Dependencies**

        pip install -r requirements.txt

## **Data Processing and Analysis**

**Step 3: Run Data Processing Notebook**

      jupyter notebook data.ipynb

## **Data Cleaning and Explanation**

This notebook contains scripts for preprocessing and cleaning the raw data.
It provides detailed explanations of the data characteristics and transformations applied.

## **Visual Analysis**

**Step 4: Run Visual Analysis Notebook**

        jupyter notebook visuals.ipynb

### **Visuals using Matplotlib and Seaborn**

Explore visualizations generated from the cleaned data.
Utilizes popular visualization libraries for insightful data exploration.

## **Model Development**

**Step 5: Run Model Development Notebook**

       jupyter notebook model.ipynb

### **Model Prediction**

Implement machine learning models such as Support Vector Classifier (SVC) and Random Forest Regression.

Evaluate model performance using Confusion Matrix and other relevant metrics.

Model prediction using SVC, Random Forest Regression and Confusion matrix

## **Backend Integration**

**Step 6: Run Flask Application**

       python app.py

### **Flask App for Backend Integration**

Launches a Flask web application to serve predictive functionalities.

Provides seamless integration with the trained machine learning models.

# LLM Documentation

## Heart Disease Prediction Chatbot

This project implements a chatbot service that predicts whether a user has a heart disease based on their input. The chatbot is designed to simulate a conversation with a trained cardiologist, providing practical advice based on the prediction result

## Setup

### Prerequisites

- Python 3.6+
- Redis server

1. Install dependencies:
   `pip install -r requirements.txt`

2. Setup environment variables
   Create a `.env` file in the project root and add the following variables:

```
REDIS_HOST=your_redis_host
REDIS_PORT=your_redis_port
REDIS_PASSWORD=your_redis_password
REDIS_TOKEN=your_redis_token
REDIS_SESSION_ID=your_redis_session_id
OPENAI_API_KEY=your_openai_api_key
```

3. Start the Redis server:
   Use a remote Redis server.
   [Visit](https://console.upstash.com/redis)
   Create a database connection
   Update the .env file with the correct Redis host, password, and token.

4. Run the application
   `uvicorn main:app --reload`

## Usage

`ChatBotService.chat_with_bot`
This method takes a user prompt and prediction context and generates a response from the chatbot.

**Parameters:**

`user_prompt` (PromptSchema): The user's prompt.
`context` (PredictionSchema): The prediction context.

Returns:
The chatbot's response as a string.
Example usage:

```
service = ChatBotService()
response = service.chat_with_bot(user_prompt, context)
print(response)
```

`ChatBotService.chat_with_bot_plus_history`
This method takes a user prompt, context, and user ID, and generates a response from the chatbot while maintaining chat history.

**Parameters:**

`user_prompt` (PromptSchema): The user's prompt.
`context` (ContextSchema): The context of the conversation.
`user_id` (str): The user's ID.
Returns:

The chatbot's response as a string.
Example usage:

```
service = ChatBotService()
response = service.chat_with_bot_plus_history(user_prompt, context, user_id)
print(response)
```

# Notes

This project uses Redis for persistent storage of chat history. Ensure that your Redis server is configured correctly for proper operation.
The chatbot's responses are generated using OpenAI's GPT model
[ColabNotes Documentation](https://colab.research.google.com/drive/1mhy_A-1vhwbmVhGi_15nf2WjTFdjE8Vf?usp=sharing)

## Model Prediction Service

`ModelPredictionService.format_model_response`
This method takes a prediction result and generates a congratulatory or encouraging message based on the result.

**Parameters:**

`result` (PredictionSchema): The prediction result containing the confidence level and prediction verdict.

Returns:

The chatbot's response as a string.
Example usage:

```
service = ModelPredictionService()
response = service.format_model_response(prediction_result)
print(response)
```

# palmMed

Welcome to the palmMed repository! This repository contains the code for the API of palmMed, a user-friendly system
with a mobile application and web interface for heart disease prediction and
communication.

**Overview**
palmMed is built using Node.js, react, ai/data-analysis, ml, llm, flutter and Express.js, providing RESTful API endpoints for managing users, appointments, and other functionalities related to the palmMed application.

## Features

- User authentication (signup, login)

* Appointment management (create, read, update, delete)
* User profile management
* Integration with a database (MongoDB)
  **Installation**
  To set up the palmMed backend locally, follow these steps:

Clone this repository to your local machine.
Navigate to the project directory.
Install dependencies using npm:

**npm install**

Create a .env file in the root directory and configure environment variables as needed. You can use the provided .env.example file as a template.
Usage
To run the palmMed backend locally, use the following command:

**npm start**

This will start the server, and it will be accessible at http://localhost:6200.

**API Documentation**

The API documentation outlines the available endpoints and their functionalities. Refer to the API documentation for detailed information on how to interact with the backend API.

**Deployment**

To deploy the palmMed backend to a production environment, follow these steps:

Choose a hosting provider (e.g., AWS, Heroku).
Set up a server or cloud platform.
Deploy the backend code to the server.
Configure networking and security settings.
Obtain the endpoint URL and share it with the frontend team for integration.
For detailed deployment instructions, refer to the Deployment Guide.

Contributors

- ALEX ADAM
- PRINCE MIREKU
- ANDREWS
- EDMON
- EMMANUEL
- VICTORIA
- SAMUEL
- ENOCH
- GIBRIL
- DAVID
- NATHAN

  ## **PROJECT ARCHITECTURE**

## **USAGE GUILDELINES**

USER in our solution is a doctor

1.

1.
