import 'package:flutter/material.dart';

import '../../Auth/presentation/widgets/custom__feild.dart';
import '../widget/custom_text_feild.dart';

class EditPredictionScreen extends StatefulWidget {
  const EditPredictionScreen({super.key});

  @override
  State<EditPredictionScreen> createState() => _EditPredictionScreenState();
}

class _EditPredictionScreenState extends State<EditPredictionScreen> {
  final TextEditingController _predictionController = TextEditingController();
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        centerTitle: true,
        title: const Text(
          "Add More Context",
          style: TextStyle(
            fontWeight: FontWeight.bold,
          ),
        ),
      ),
      body: Column(
        children: [
          CustomTextFeild(
            child: TextFormField(
              controller: _predictionController,
              keyboardType: TextInputType.multiline,
              maxLines: null,
              decoration: InputDecoration(
                hintText: "Predictions",
                border: OutlineInputBorder(
                  borderRadius: BorderRadius.circular(5),
                ),
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
                    "Add To Database",
                    style: TextStyle(
                      color: Colors.white,
                      fontSize: 20,
                    ),
                  ),
                  onPressed: () {},
                ),
              ),
            ],
          ),
        ],
      ),
    );
  }
}
