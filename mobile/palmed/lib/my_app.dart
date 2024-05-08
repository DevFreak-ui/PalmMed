import 'package:flutter/material.dart';
import 'package:palmed/Auth/presentation/views/auth_widget.dart';
import 'package:palmed/Auth/services/auth_services.dart';
import 'package:provider/provider.dart';

import 'Doctor/view/home.dart';

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return ChangeNotifierProvider<AuthService>(
      create: (_) => AuthService(),
      child: MaterialApp(
        title: 'PalMed',
        debugShowCheckedModeBanner: false,
        theme: ThemeData(
          colorScheme: ColorScheme.fromSeed(seedColor: Colors.deepPurple),
          useMaterial3: true,
        ),
        home: const
            //DoctorHome(),
            AuthWidget(),
      ),
    );
  }
}
