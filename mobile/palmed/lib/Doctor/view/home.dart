import 'package:flutter/material.dart';
import 'package:palmed/Auth/presentation/views/splash_screen.dart';
import 'package:palmed/Auth/services/doctor_service.dart';
import 'package:provider/provider.dart';

import '../../Auth/services/auth_services.dart';
import '../widget/patient_list_screen.dart';

class DoctorHome extends StatefulWidget {
  const DoctorHome({super.key});

  @override
  State<DoctorHome> createState() => _DoctorHomeState();
}

class _DoctorHomeState extends State<DoctorHome>
    with SingleTickerProviderStateMixin {
  late TabController _controller;
  @override
  void initState() {
    super.initState();
    _controller = TabController(length: 3, vsync: this, initialIndex: 0);
  }

  @override
  Widget build(BuildContext context) {
    return ChangeNotifierProvider<DoctorService>(
      create: (_) => DoctorService(),
      child: Scaffold(
        appBar: AppBar(
          title: Consumer<AuthService>(builder: (context, value, child) {
            return Text("Hello Dr. ${value.currentUser?.firstname}");
          }),
          actions: [
            PopupMenuButton<String>(
              onSelected: (value) {
                print(value);
              },
              itemBuilder: (BuildContext contesxt) {
                return [
                  PopupMenuItem(
                    child: Text("Settings"),
                    value: "Settings",
                    onTap: () {},
                  ),
                  PopupMenuItem(
                    child: Text("Log Out"),
                    value: "Log Out",
                    onTap: () {
                      Navigator.push(
                        context,
                        MaterialPageRoute(
                          builder: (context) => const SplashView(),
                        ),
                      );
                    },
                  ),
                ];
              },
            )
          ],
          bottom: TabBar(
            controller: _controller,
            indicatorColor: Colors.white,
            tabs: [
              Tab(
                text: "Patient List",
              ),
              Tab(
                text: "Patient Report",
              ),
              Tab(
                text: "Docs",
              )
            ],
          ),
        ),
        body: TabBarView(
          controller: _controller,
          children: [
            PatientListScreen(),
            Text("Report"),
            Text("Doc"),
          ],
        ),
      ),
    );
  }
}
