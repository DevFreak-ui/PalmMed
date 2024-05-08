import 'package:flutter/material.dart';
import 'package:lottie/lottie.dart';
import 'package:provider/provider.dart';

import '../../services/auth_services.dart';
import '../widgets/custom_feild.dart';
import 'patient_login.dart';

class PatientSignUpView extends StatefulWidget {
  const PatientSignUpView({super.key});

  @override
  State<PatientSignUpView> createState() => _PatientSignUpViewState();
}

class _PatientSignUpViewState extends State<PatientSignUpView> {
  late final TextEditingController _firstName;
  late final TextEditingController _lastName;
  late final TextEditingController _email;
  late final TextEditingController _password;

  @override
  void initState() {
    _email = TextEditingController();
    _password = TextEditingController();
    _firstName = TextEditingController();
    _lastName = TextEditingController();
    super.initState();
  }

  @override
  void dispose() {
    _email.dispose();
    _password.dispose();
    _firstName.dispose();
    _lastName.dispose();
    super.dispose();
  }

  Future<void> _auth({
    required BuildContext context,
    required String email,
    required String password,
    required String firstname,
    required String lastname,
  }) async {
    try {
      await Provider.of<AuthService>(context, listen: false).signUpPatient(
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: password,
      );
    } catch (e) {
      print("opoku $e");
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SafeArea(
        child: SingleChildScrollView(
          child: Padding(
            padding: const EdgeInsets.all(6),
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                SizedBox(
                  height: 70,
                ),
                Lottie.asset('assets/lottie/one.json', height: 100, width: 100),
                SizedBox(
                  height: 20,
                ),
                TextFeildController(
                  color: const Color.fromARGB(13, 117, 117, 117),
                  child: TextField(
                    controller: _firstName,
                    enableSuggestions: false,
                    autocorrect: false,
                    keyboardType: TextInputType.emailAddress,
                    decoration: const InputDecoration(
                      hintText: "Enter Your First Name Here.",
                      icon: Icon(
                        Icons.person,
                        color: Colors.black,
                      ),
                      border: InputBorder.none,
                    ),
                  ),
                ),
                TextFeildController(
                  color: const Color.fromARGB(13, 117, 117, 117),
                  child: TextField(
                    controller: _lastName,
                    enableSuggestions: false,
                    autocorrect: false,
                    keyboardType: TextInputType.emailAddress,
                    decoration: const InputDecoration(
                      hintText: "Enter Your Last Name Here.",
                      icon: Icon(
                        Icons.person,
                        color: Colors.black,
                      ),
                      border: InputBorder.none,
                    ),
                  ),
                ),
                TextFeildController(
                  color: const Color.fromARGB(13, 117, 117, 117),
                  child: TextField(
                    controller: _email,
                    enableSuggestions: false,
                    autocorrect: false,
                    keyboardType: TextInputType.emailAddress,
                    decoration: const InputDecoration(
                      hintText: "Enter Your Email Here.",
                      icon: Icon(
                        Icons.mail,
                        color: Colors.black,
                      ),
                      border: InputBorder.none,
                    ),
                  ),
                ),
                TextFeildController(
                  color: const Color.fromARGB(13, 117, 117, 117),
                  child: TextField(
                    controller: _password,
                    obscureText: true,
                    enableSuggestions: false,
                    autocorrect: false,
                    decoration: const InputDecoration(
                      hintText: "Enter Your Password Here.",
                      border: InputBorder.none,
                      icon: Icon(
                        Icons.lock,
                        color: Colors.black,
                      ),
                    ),
                  ),
                ),
                TextFeildController(
                  color: Colors.black,
                  child: TextButton(
                    child: const Text(
                      "Sign Up",
                      style: TextStyle(
                        color: Colors.white,
                        fontSize: 20,
                      ),
                    ),
                    onPressed: () async {
                      final email = _email.text;
                      final password = _password.text;
                      final firstName = _firstName.text;
                      final lastName = _lastName.text;
                      await _auth(
                        context: context,
                        email: email,
                        password: password,
                        firstname: firstName,
                        lastname: lastName,
                      );
                    },
                  ),
                ),
                Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    const Text("Already have an Account ? "),
                    TextButton(
                      child: const Text(
                        "Login",
                      ),
                      onPressed: () {
                        Navigator.push(
                          context,
                          MaterialPageRoute(
                              builder: (context) => const PatientLoginView()),
                        );
                      },
                    ),
                  ],
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
