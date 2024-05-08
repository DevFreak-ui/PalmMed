import 'package:flutter/material.dart';
import 'package:lottie/lottie.dart';
import 'package:palmed/Doctor/view/home.dart';
import 'package:provider/provider.dart';

import '../../services/auth_services.dart';
import '../widgets/custom__feild.dart';
import 'sign_up_view.dart';

class LoginView extends StatefulWidget {
  const LoginView({
    super.key,
  });

  @override
  State<LoginView> createState() => _LoginViewState();
}

class _LoginViewState extends State<LoginView> {
  late final TextEditingController _email;
  late final TextEditingController _password;

  @override
  void initState() {
    _email = TextEditingController();
    _password = TextEditingController();
    super.initState();
  }

  @override
  void dispose() {
    _email.dispose();
    _password.dispose();
    super.dispose();
  }

  Future<void> _auth(
      {required BuildContext context,
      required String email,
      required String password}) async {
    try {
      await Provider.of<AuthService>(context, listen: false).signInPatient(
        email: email,
        password: password,
      );
    } catch (e) {
      throw Exception(e);
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
                const SizedBox(
                  height: 70,
                ),
                Lottie.asset('assets/lottie/one.json', height: 300, width: 300),
                const SizedBox(
                  height: 20,
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
                        Icons.email,
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
                      "Login",
                      style: TextStyle(
                        color: Colors.white,
                        fontSize: 20,
                      ),
                    ),
                    onPressed: () async {
                      final email = _email.text;
                      final password = _password.text;
                      await _auth(
                        context: context,
                        email: email,
                        password: password,
                      );

                      await Provider.of<AuthService>(context, listen: false)
                          .userData()
                          .whenComplete(
                            () => Navigator.push(
                              context,
                              MaterialPageRoute(
                                builder: (context) => DoctorHome(),
                              ),
                            ),
                          );
                    },
                  ),
                ),
                Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    const Text("Don't have an Account ? "),
                    TextButton(
                      child: const Text(
                        "Sign Up",
                      ),
                      onPressed: () {
                        Navigator.push(
                          context,
                          MaterialPageRoute(
                              builder: (context) => const SignUpView()),
                        );
                      },
                    ),
                  ],
                ),
                TextButton(
                  child: const Text(
                    "Forgot Password",
                  ),
                  onPressed: () {},
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
