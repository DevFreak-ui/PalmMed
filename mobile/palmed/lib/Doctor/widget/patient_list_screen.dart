import 'package:flutter/material.dart';
import 'package:palmed/Auth/services/doctor_service.dart';
import 'package:palmed/Doctor/widget/patient.dart';
import 'package:provider/provider.dart';

import '../../Auth/services/auth_services.dart' hide User;

class PatientListScreen extends StatelessWidget {
  const PatientListScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return FutureBuilder<List<User>>(
        future: Provider.of<DoctorService>(context, listen: false).allPatients(
            token: Provider.of<AuthService>(context, listen: false).token!),
        builder: (context, snapshot) {
          return ListView.builder(
              itemCount: snapshot.data!.length,
              itemBuilder: (context, i) {
                User user = snapshot.data![i];
                return Padding(
                  padding: const EdgeInsets.all(3.0),
                  child: PatientCard(
                    user: user,
                  ),
                );
              });
        });
  }
}
