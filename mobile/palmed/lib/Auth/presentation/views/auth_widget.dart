import 'package:flutter/material.dart';
import 'package:palmed/Auth/presentation/views/splash_screen.dart';
import 'package:palmed/Auth/services/auth_services.dart';
import 'package:palmed/Doctor/view/home.dart';
import 'package:palmed/Patient/View/home.dart';
import 'package:provider/provider.dart';

class AuthWidget extends StatelessWidget {
  const AuthWidget({super.key});

  @override
  Widget build(BuildContext context) {
    return Consumer<AuthService>(
      builder: (context, value, child) {
        if (value.hasLogin == true && value.hasLoginDoc == false) {
          return const PatientHome();
        } else {
          return const SplashView();
        }
      },
    );
  }
}
