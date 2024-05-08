import 'dart:convert';
import 'package:http/http.dart' as http;
import 'package:flutter/material.dart';

import '../../Auth/presentation/widgets/custom__feild.dart';
import '../widget/custom_text_feild.dart';
import 'edit_prediction_view.dart';

class PredictScreen extends StatefulWidget {
  const PredictScreen({super.key});

  @override
  State<PredictScreen> createState() => _PredictScreenState();
}

class _PredictScreenState extends State<PredictScreen> {
  final TextEditingController _ageController = TextEditingController();
  final TextEditingController _rbpController = TextEditingController();
  final TextEditingController _scController = TextEditingController();
  final TextEditingController _mhraController = TextEditingController();
  final TextEditingController _sdibertrController = TextEditingController();
  final TextEditingController _nomController = TextEditingController();
  String _selectedSex = '1';
  String _selectedChestPain = '0';
  String _selectedResting = '0';
  String _selectElectrocardiographic = '0';
  String _selectExerciseInduceAngina = "0";
  String _selectSlope = '0';
  String _selectThallium = '0';

  Future<void> registerPatient(
    String firstname,
    String lastname,
    String email,
    String password,
    BuildContext context,
  ) async {
    final url =
        Uri.parse('https://hearty-o4ui.onrender.com/docs/api/v1/llm/history');
    final headers = {'Content-Type': 'application/json'};
    final body = jsonEncode({
      "user_prompt": {"prompt": "heart disease symptoms"},
      "context_schema": {
        "patient_report": {
          "age": "2",
          "sex": "0",
          "cp": "0",
          "trestbps": "233",
          "chol": "34",
          "fbs": "1",
          "restecg": "0",
          "thalach": "0",
          "exang": "1",
          "oldpeak": "0",
          "slope": "43",
          "ca": "34",
          "thal": "0",
          "confidence": 62.4,
          "prediction": "You do not have heart disease"
        }
      }
    });

    final response = await http.post(url, headers: headers, body: body);

    if (response.statusCode == 200) {
    } else {
      print("claudious ${response.statusCode}");
      throw Exception('Failed to load data');
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        centerTitle: true,
        title: const Text(
          "Predict Screen",
          style: TextStyle(
            fontWeight: FontWeight.bold,
            fontSize: 20,
          ),
        ),
      ),
      body: SingleChildScrollView(
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            const Padding(
              padding: EdgeInsets.all(8.0),
              child: Text(
                "What is the Age of the Patient",
                style: TextStyle(
                  fontWeight: FontWeight.bold,
                  fontSize: 20,
                ),
              ),
            ),
            CustomTextFeild(
              child: TextFormField(
                keyboardType: TextInputType.number,
                controller: _ageController,
                decoration: InputDecoration(
                  hintText: "Age",
                  border: OutlineInputBorder(
                    borderRadius: BorderRadius.circular(5),
                  ),
                ),
              ),
            ),
            const Padding(
              padding: EdgeInsets.all(8.0),
              child: Text(
                "What is the Gender of the Patient",
                style: TextStyle(
                  fontWeight: FontWeight.bold,
                  fontSize: 20,
                ),
              ),
            ),
            // Gender
            Container(
              padding: const EdgeInsets.all(8.0),
              child: Card(
                elevation: 2,
                color: Colors.white,
                child: Column(
                  children: <Widget>[
                    ListTile(
                      title: const Text('Male'),
                      leading: Radio<String>(
                        value: '1',
                        groupValue: _selectedSex,
                        onChanged: (String? value) {
                          setState(() {
                            _selectedSex = value!;
                          });
                        },
                      ),
                    ),
                    ListTile(
                      title: const Text('Female'),
                      leading: Radio<String>(
                        value: '0',
                        groupValue: _selectedSex,
                        onChanged: (String? value) {
                          setState(() {
                            _selectedSex = value!;
                          });
                        },
                      ),
                    ),
                  ],
                ),
              ),
            ),
            const Padding(
              padding: EdgeInsets.all(8.0),
              child: Text(
                "What is the patient's Chest Paint Type",
                style: TextStyle(
                  fontWeight: FontWeight.bold,
                  fontSize: 20,
                ),
              ),
            ),
            Container(
              padding: const EdgeInsets.all(8.0),
              child: Card(
                elevation: 2,
                color: Colors.white,
                child: Column(
                  children: <Widget>[
                    ListTile(
                      title: const Text('Typical Angina'),
                      leading: Radio<String>(
                        value: '0',
                        groupValue: _selectedChestPain,
                        onChanged: (String? value) {
                          setState(() {
                            _selectedChestPain = value!;
                          });
                        },
                      ),
                    ),
                    ListTile(
                      title: const Text('Atypical Angina'),
                      leading: Radio<String>(
                        value: '1',
                        groupValue: _selectedChestPain,
                        onChanged: (String? value) {
                          setState(() {
                            _selectedChestPain = value!;
                          });
                        },
                      ),
                    ),
                    ListTile(
                      title: const Text('Non-Anginal Pain'),
                      leading: Radio<String>(
                        value: '2',
                        groupValue: _selectedChestPain,
                        onChanged: (String? value) {
                          setState(() {
                            _selectedChestPain = value!;
                          });
                        },
                      ),
                    ),
                    ListTile(
                      title: const Text('Asymptomatic'),
                      leading: Radio<String>(
                        value: '3',
                        groupValue: _selectedChestPain,
                        onChanged: (String? value) {
                          setState(() {
                            _selectedChestPain = value!;
                          });
                        },
                      ),
                    ),
                  ],
                ),
              ),
            ),
            const Padding(
              padding: EdgeInsets.all(8.0),
              child: Text(
                "What is the patient's Resting Blood Pressure",
                style: TextStyle(
                  fontWeight: FontWeight.bold,
                  fontSize: 20,
                ),
              ),
            ),
            CustomTextFeild(
              child: TextFormField(
                keyboardType: TextInputType.number,
                controller: _rbpController,
                decoration: InputDecoration(
                  hintText: "Resting Blood Pressure",
                  border: OutlineInputBorder(
                    borderRadius: BorderRadius.circular(5),
                  ),
                ),
              ),
            ),
            const Padding(
              padding: EdgeInsets.all(8.0),
              child: Text(
                "What is the patient's Serum Cholestoral",
                style: TextStyle(
                  fontWeight: FontWeight.bold,
                  fontSize: 20,
                ),
              ),
            ),
            CustomTextFeild(
              child: TextFormField(
                keyboardType: TextInputType.number,
                controller: _scController,
                decoration: InputDecoration(
                  hintText: "Serum Cholestoral in mg/dl",
                  border: OutlineInputBorder(
                    borderRadius: BorderRadius.circular(5),
                  ),
                ),
              ),
            ),
            const Padding(
              padding: EdgeInsets.all(8.0),
              child: Text(
                "Is the patient's Fasting blood sugar > 129 mg/dl",
                style: TextStyle(
                  fontWeight: FontWeight.bold,
                  fontSize: 20,
                ),
              ),
            ),

            Container(
              padding: const EdgeInsets.all(8.0),
              child: Card(
                elevation: 2,
                color: Colors.white,
                child: Column(
                  children: <Widget>[
                    ListTile(
                      title: const Text('True'),
                      leading: Radio<String>(
                        value: '1',
                        groupValue: _selectedResting,
                        onChanged: (String? value) {
                          setState(() {
                            _selectedResting = value!;
                          });
                        },
                      ),
                    ),
                    ListTile(
                      title: const Text('False'),
                      leading: Radio<String>(
                        value: '0',
                        groupValue: _selectedResting,
                        onChanged: (String? value) {
                          setState(() {
                            _selectedResting = value!;
                          });
                        },
                      ),
                    ),
                  ],
                ),
              ),
            ),

            const Padding(
              padding: EdgeInsets.all(8.0),
              child: Text(
                "Resting Electrocardiographic results",
                style: TextStyle(
                  fontWeight: FontWeight.bold,
                  fontSize: 20,
                ),
              ),
            ),
            Container(
              padding: const EdgeInsets.all(8.0),
              child: Card(
                elevation: 2,
                color: Colors.white,
                child: Column(
                  children: <Widget>[
                    ListTile(
                      title: const Text('Normal'),
                      leading: Radio<String>(
                        value: '0',
                        groupValue: _selectElectrocardiographic,
                        onChanged: (String? value) {
                          setState(() {
                            _selectElectrocardiographic = value!;
                          });
                        },
                      ),
                    ),
                    ListTile(
                      title: const Text('Having ST-T wave abnormality'),
                      leading: Radio<String>(
                        value: '1',
                        groupValue: _selectElectrocardiographic,
                        onChanged: (String? value) {
                          setState(() {
                            _selectElectrocardiographic = value!;
                          });
                        },
                      ),
                    ),
                    ListTile(
                      title: const Text(
                          'Showing probable or definite left ventricle hypertrophy by Eate criteria'),
                      leading: Radio<String>(
                        value: '2',
                        groupValue: _selectElectrocardiographic,
                        onChanged: (String? value) {
                          setState(() {
                            _selectElectrocardiographic = value!;
                          });
                        },
                      ),
                    ),
                  ],
                ),
              ),
            ),
            const Padding(
              padding: EdgeInsets.all(8.0),
              child: Text(
                "Maximum Heart Rate Achieved",
                style: TextStyle(
                  fontWeight: FontWeight.bold,
                  fontSize: 20,
                ),
              ),
            ),
            CustomTextFeild(
              child: TextFormField(
                keyboardType: TextInputType.number,
                controller: _mhraController,
                decoration: InputDecoration(
                  hintText: "Maximum heart rate achieved",
                  border: OutlineInputBorder(
                    borderRadius: BorderRadius.circular(5),
                  ),
                ),
              ),
            ),
            const Padding(
              padding: EdgeInsets.all(8.0),
              child: Text(
                "Exercise Induce Angina",
                style: TextStyle(
                  fontWeight: FontWeight.bold,
                  fontSize: 20,
                ),
              ),
            ),
            Container(
              padding: const EdgeInsets.all(8.0),
              child: Card(
                elevation: 2,
                color: Colors.white,
                child: Column(
                  children: <Widget>[
                    ListTile(
                      title: const Text('No'),
                      leading: Radio<String>(
                        value: '0',
                        groupValue: _selectExerciseInduceAngina,
                        onChanged: (String? value) {
                          setState(() {
                            _selectExerciseInduceAngina = value!;
                          });
                        },
                      ),
                    ),
                    ListTile(
                      title: const Text('Yes'),
                      leading: Radio<String>(
                        value: '1',
                        groupValue: _selectExerciseInduceAngina,
                        onChanged: (String? value) {
                          setState(() {
                            _selectExerciseInduceAngina = value!;
                          });
                        },
                      ),
                    ),
                  ],
                ),
              ),
            ),
            const Padding(
              padding: EdgeInsets.all(8.0),
              child: Text(
                "Oldpeak = ST depression induced by exercise relative to rest",
                style: TextStyle(
                  fontWeight: FontWeight.bold,
                  fontSize: 20,
                ),
              ),
            ),
            CustomTextFeild(
              child: TextFormField(
                keyboardType: TextInputType.number,
                controller: _sdibertrController,
                decoration: InputDecoration(
                  hintText:
                      "Oldpeak = ST depression induced by exercise relative to rest",
                  border: OutlineInputBorder(
                    borderRadius: BorderRadius.circular(5),
                  ),
                ),
              ),
            ),
            const Padding(
              padding: EdgeInsets.all(8.0),
              child: Text(
                "The slope of the peak exercise ST segment",
                style: TextStyle(
                  fontWeight: FontWeight.bold,
                  fontSize: 20,
                ),
              ),
            ),
            Container(
              padding: const EdgeInsets.all(8.0),
              child: Card(
                elevation: 2,
                color: Colors.white,
                child: Column(
                  children: <Widget>[
                    ListTile(
                      title: const Text('Upsloping'),
                      leading: Radio<String>(
                        value: '1',
                        groupValue: _selectSlope,
                        onChanged: (String? value) {
                          setState(() {
                            _selectSlope = value!;
                          });
                        },
                      ),
                    ),
                    ListTile(
                      title: const Text('Flat'),
                      leading: Radio<String>(
                        value: '2',
                        groupValue: _selectSlope,
                        onChanged: (String? value) {
                          setState(() {
                            _selectSlope = value!;
                          });
                        },
                      ),
                    ),
                    ListTile(
                      title: const Text('Downsloping'),
                      leading: Radio<String>(
                        value: '3',
                        groupValue: _selectSlope,
                        onChanged: (String? value) {
                          setState(() {
                            _selectSlope = value!;
                          });
                        },
                      ),
                    ),
                  ],
                ),
              ),
            ),
            const Padding(
              padding: EdgeInsets.all(8.0),
              child: Text(
                "Number of major vessel(0-3) colored by flourosopy",
                style: TextStyle(
                  fontWeight: FontWeight.bold,
                  fontSize: 20,
                ),
              ),
            ),

            CustomTextFeild(
              child: TextFormField(
                keyboardType: TextInputType.number,
                controller: _nomController,
                decoration: InputDecoration(
                  hintText: "Number of major vessel(0-3)",
                  border: OutlineInputBorder(
                    borderRadius: BorderRadius.circular(5),
                  ),
                ),
              ),
            ),
            const Padding(
              padding: EdgeInsets.all(8.0),
              child: Text(
                "Thallium stress testing results",
                style: TextStyle(
                  fontWeight: FontWeight.bold,
                  fontSize: 20,
                ),
              ),
            ),
            Container(
              padding: const EdgeInsets.all(8.0),
              child: Card(
                elevation: 2,
                color: Colors.white,
                child: Column(
                  children: <Widget>[
                    ListTile(
                      title: const Text('Normal'),
                      leading: Radio<String>(
                        value: '0',
                        groupValue: _selectThallium,
                        onChanged: (String? value) {
                          setState(() {
                            _selectThallium = value!;
                          });
                        },
                      ),
                    ),
                    ListTile(
                      title: const Text('Fixed defect'),
                      leading: Radio<String>(
                        value: '1',
                        groupValue: _selectThallium,
                        onChanged: (String? value) {
                          setState(() {
                            _selectThallium = value!;
                          });
                        },
                      ),
                    ),
                    ListTile(
                      title: const Text('Reversible Defect'),
                      leading: Radio<String>(
                        value: '2',
                        groupValue: _selectThallium,
                        onChanged: (String? value) {
                          setState(() {
                            _selectThallium = value!;
                          });
                        },
                      ),
                    ),
                  ],
                ),
              ),
            ),

            Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                TextFeildController(
                  color: Colors.black,
                  child: TextButton(
                    child: const Text(
                      "Predict",
                      style: TextStyle(
                        color: Colors.white,
                        fontSize: 20,
                      ),
                    ),
                    onPressed: () {
                      Navigator.push(
                        context,
                        MaterialPageRoute(
                            builder: (context) => const EditPredictionScreen()),
                      );
                    },
                  ),
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }
}
