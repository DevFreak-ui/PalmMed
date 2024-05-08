import 'package:http/http.dart' as http;
import 'package:palmed/core/ipaddress.dart';

import 'dart:convert';

import 'package:flutter/foundation.dart';

class User {
  final String id;
  final String firstname;
  final String lastname;
  final String email;
  final String role;
  final List<dynamic> reports;
  final String password;

  User({
    required this.id,
    required this.firstname,
    required this.lastname,
    required this.email,
    required this.role,
    required this.reports,
    required this.password,
  });

  factory User.fromJson(Map<String, dynamic> json) {
    return User(
      id: json['_id'],
      firstname: json['firstname'],
      lastname: json['lastname'],
      email: json['email'],
      role: json['role'],
      reports: json['reports'],
      password: json['password'],
    );
  }
}

class DoctorService with ChangeNotifier {
  Future<List<User>> allPatients({required String token}) async {
    print("nana $token");
    final url = Uri.parse('http://${ip}:6200/api/v1/users/find/all');

    final response = await http.get(
      url,
      headers: {
        'Authorization': 'Bearer $token',
        'Content-Type': 'application/json',
      },
    );

    if (response.statusCode == 200) {
      List jsonResponse = json.decode(response.body)['users'];
      return jsonResponse.map((user) => User.fromJson(user)).toList();
    } else {
      print(json.decode(response.body));
      throw Exception('Failed to load data');
    }
  }
}
