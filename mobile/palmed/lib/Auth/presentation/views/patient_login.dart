import 'dart:convert';
import 'package:flutter/material.dart';

import '../widgets/custom_feild.dart';

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

  // Future<void> registerPatient(
  //   String firstname,
  //   String lastname,
  //   String email,
  //   String password,
  //   BuildContext context,
  // ) async {
  //   final url = Uri.parse('http://127.0.0.1:6200/api/v1/users/register');
  //   final headers = {'Content-Type': 'application/json'};
  //   final body = jsonEncode({
  //     'firstname': firstname,
  //     'lastname': lastname,
  //     'email': email,
  //     'password': password,
  //   });

  //   final response = await http.post(url, headers: headers, body: body);

  //   if (response.statusCode == 200) {
  //   } else {
  //     print("claudious ${response.statusCode}");
  //     throw Exception('Failed to load data');
  //   }
  // }

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
                      final firstname = _firstName.text;
                      final lastname = _lastName.text;
                      // Navigator.push(
                      //   context,
                      //   MaterialPageRoute(
                      //       builder: (context) => const ChatScreen()),
                      // );

                      // await registerPatient(
                      //   firstname,
                      //   lastname,
                      //   email,
                      //   password,
                      //   context,
                      // ).then((value) {});
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
                        // Navigator.push(
                        //   context,
                        //   MaterialPageRoute(
                        //       builder: (context) => const PatientLoginView()),
                        // );
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
