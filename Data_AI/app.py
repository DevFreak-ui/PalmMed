from flask import Flask, request, jsonify
import joblib
import numpy as np
from flask_cors import CORS


app = Flask(__name__)
CORS(app)

CORS(app, resources={r"/*": {"origins": "*"}})
# Load the trained model
model = joblib.load("models/random_forest_model.joblib")


@app.route("/", methods=["GET"])
def read_root():
    return jsonify({"message": "Welcome to the Heart Condition Prediction API"})


@app.route("/predict", methods=["POST"])
def predict():
    data = request.get_json()

    values = [int(value) for value in data.values()]

    try:
        # reshape features
        features = np.array(values).reshape(1, -1)
        # obtain probability for each class
        probabilities = model.predict_proba(features)
        confidence_class_0 = probabilities[0][0] * 100
        confidence_class_1 = probabilities[0][1] * 10

        # obtain model prediction
        prediction = model.predict(features)
        prediction_text = "You have heart disease" if int(
            prediction[0]) == 1 else "You do not have heart disease"

        return jsonify({
            "prediction": prediction_text,
            "confidence": max(confidence_class_0, confidence_class_1),
        })
    except Exception as e:
        return jsonify({"error": str(e)})


if __name__ == "__main__":
    app.run(debug=False, host='0.0.0.0', port=8080)
