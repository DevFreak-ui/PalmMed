import joblib
import numpy as np
import pandas as pd

# Load the trained models
random_forest_model = joblib.load("random_forest_model.joblib")
xgboost_model = joblib.load("xgb_model.pkl")

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
def read_data():
    data = pd.DataFrame([input_data])
    
    return data

def predict():
    try:
        data = read_data()
        
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

print(predict())
