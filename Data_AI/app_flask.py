from flask import Flask, request, jsonify

app = Flask(__name__)

import joblib
import numpy as np
import pandas as pd

# Load the trained models
random_forest_model = joblib.load("models/random_forest_model.joblib")
xgboost_model = joblib.load('./models/xgb_model.pkl')

def read_data(input_data):
    data = pd.DataFrame([input_data])
    return data

def predict(input_data):
    try:
        data = read_data(input_data)
        features = data
        
        rf_prediction = random_forest_model.predict(features)
        rf_probabilities = random_forest_model.predict_proba(features)
        rf_confidence = np.max(rf_probabilities) * 100
        
        xgb_prediction = int(xgboost_model.predict(features)[0])
        xgb_probabilities = xgboost_model.predict_proba(features)
        xgb_confidence = np.max(xgb_probabilities) * 100
        
        if rf_prediction == xgb_prediction:
            final_prediction = rf_prediction
            final_confidence = (rf_confidence + xgb_confidence) / 2
        else:
            if rf_confidence >= xgb_confidence:
                final_prediction = rf_prediction
                final_confidence = rf_confidence
            else:
                final_prediction = xgb_prediction
                final_confidence = xgb_confidence

        prediction_text = "You have heart disease" if final_prediction == 1 else "You do not have heart disease"

        return {
            "prediction": prediction_text,
            "confidence": final_confidence,
        }
    except Exception as e:
        return {"error": str(e)}

@app.route('/')
def home():
    return "Welcome to the Heart Disease Prediction API!"

@app.route('/predict', methods=['POST'])
def predict_endpoint():
    input_data = request.get_json()
    result = predict(input_data)
    return jsonify(result)

if __name__ == '__main__':
    app.run(debug=True)
