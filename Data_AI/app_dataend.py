import requests
import json

# Define the input data
input_data = {
    "Age": 45,
    "Sex": 1,
    "Chest Pain": 2,
    "Resting Blood Pressure": 150,
    "Cholestrol": 245,
    "Blood Sugar": 0,
    "Resting ECG": 0,
    "Max Heart Rate": 180,
    "Exercise Induced Angina": 0,
    "Depression": 2.3,
    "Slope": 1,
    "Vessels colored by flourosopy": 0,
    "Thallium": 2
}

# URL of the Flask app endpoint
url = 'http://127.0.0.1:5000/predict'  # Update the URL if necessary

# Send a POST request with the input data
response = requests.post(url, json=input_data)

# Get the response data
result = response.json()

# Print the result
print(result)
