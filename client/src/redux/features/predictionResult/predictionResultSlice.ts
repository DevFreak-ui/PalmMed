import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  predictionData: {
    "resData": string,
    "results": {
        "age": number,
        "sex": number,
        "cp": number,
        "trestbps": number,
        "chol": number,
        "fbs": number,
        "restecg": number,
        "thalach": number,
        "exang": number,
        "oldpeak": number,
        "slope": number,
        "ca": number,
        "thal": number,
        "reports": [],
        "prediction": {
            "confidence": number,
            "prediction": string
        },
        "doctor_id": string,
        "user_id": string,
        "_id": string,
        "__v": number
    }
}
  
  
  
}

const initialState: InitialState = {
  predictionData:{
    "resData": "Congratulations! Based on the AI model's prediction with a confidence level of 62.0, I am pleased to inform you that you do not have heart disease. This is great news and a testament to your overall heart health. Keep up the good work and continue to prioritize your well-being. If you have any concerns or questions, feel free to reach out.",
    "results": {
        "age": 23,
        "sex": 0,
        "cp": 0,
        "trestbps": 5,
        "chol": 10,
        "fbs": 1,
        "restecg": 0,
        "thalach": 0,
        "exang": 1,
        "oldpeak": 0,
        "slope": 1,
        "ca": 1,
        "thal": 0,
        "reports": [],
        "prediction": {
            "confidence": 62,
            "prediction": "You do not have heart disease"
        },
        "doctor_id": "6630f9bf3a55a0c6499d7961",
        "user_id": "6630fbce8e45b337677168e2",
        "_id": "66311c20107e41c79075540f",
        "__v": 0
    }
}
 
};

const predictionResultSlice = createSlice({
  name: "predictionResults",
  initialState,
  reducers: {
    updatePredictionResults: (state,action) => {
      state.predictionData = action.payload;
    },
       
  },


});

export default predictionResultSlice.reducer;
export const {
    updatePredictionResults
 } = predictionResultSlice.actions;
