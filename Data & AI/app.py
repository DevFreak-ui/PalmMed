from flask import Flask, request, jsonify
import joblib
import numpy as np
from flask_cors import CORS


app = Flask(__name__)
CORS(app)

CORS(app, resources={r"/*": {"origins": "*"}})
# Load the trained model
model = joblib.load("random_forest_model.joblib")


@app.route("/", methods=["GET"])
def read_root():
    return jsonify({"message": "Welcome to the Heart Condition Prediction API"})


@app.route("/predict", methods=["POST"])
def predict():
    data = request.get_json()

    values = [int(value) for value in data.values()]

    try:
        features = np.array(values).reshape(1, -1)
        prediction = model.predict(features)
        # Convert prediction to Python integer
        prediction = int(prediction[0])
        return jsonify({"prediction": prediction})
    except Exception as e:
        return jsonify({"error": str(e)})


if __name__ == "__main__":
    app.run(debug=True, port=8080)
