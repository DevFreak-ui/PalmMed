import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'package:palmed/core/ipaddress.dart';

class User {
  final String firstname, lastname, email, userId;

  User({
    required this.firstname,
    required this.lastname,
    required this.email,
    required this.userId,
  });
  factory User.fromJson(Map<String, dynamic> json) => User(
        firstname: json["user"]["firstname"],
        lastname: json["user"]["lastname"],
        email: json["user"]["email"],
        userId: json["user"]["_id"],
      );
}

// {_id: 663b5bf4f65e5689f68b7f13, firstname: moro, lastname: moro, email: moro@g.com, role: doctor, reports: [], user_id: [], password: , __v: 0}}

class AuthService with ChangeNotifier {
  String? token;
  var hasLogin = false;
  var hasLoginDoc = false;
  User? currentUser;

  Future<void> userData() async {
    final url = Uri.parse('http://${ip}:6200/api/v1/users/find/me');

    final response = await http.get(
      url,
      headers: {
        'Authorization': 'Bearer $token',
        'Content-Type': 'application/json',
      },
    );
    print("awotwe ${response.body}");
    if (response.statusCode == 200) {
      currentUser = User.fromJson(jsonDecode(response.body));

      notifyListeners();
    } else {
      print(json.decode(response.body));
      throw Exception('Failed to load data');
    }
  }

  Future<void> signInPatient({
    required String email,
    required String password,
  }) async {
    final url = Uri.parse('http://${ip}:6200/api/v1/users/login');
    final headers = {'Content-Type': 'application/json'};
    final body = jsonEncode({
      'email': email,
      'password': password,
    });

    final response = await http.post(url, headers: headers, body: body);

    if (response.statusCode == 200) {
      hasLoginDoc = false;
      token = jsonDecode(response.body)["token"];

      notifyListeners();
    } else {
      throw Exception('Failed to load data');
    }
  }

  Future<User> signUpPatient({
    required String email,
    required String password,
    required String firstname,
    required String lastname,
  }) async {
    final url = Uri.parse('http://${ip}:6200/api/v1/users/register');
    final headers = {'Content-Type': 'application/json'};
    final body = jsonEncode({
      'firstname': firstname,
      'lastname': lastname,
      'email': email,
      'password': password,
    });

    final response = await http.post(url, headers: headers, body: body);

    if (response.statusCode == 200) {
      hasLogin = true;
      hasLoginDoc = false;

      notifyListeners();

      return User.fromJson(jsonDecode(response.body));
    } else {
      throw Exception('Failed to load data');
    }
  }

//http://localhost:6200/
  Future<User> signUpDoctor({
    required String email,
    required String password,
    required String firstname,
    required String lastname,
  }) async {
    final url = Uri.parse('http://${ip}:6200/api/v1/doctors/create');
    final headers = {'Content-Type': 'application/json'};
    final body = jsonEncode({
      'firstname': firstname,
      'lastname': lastname,
      'email': email,
      'password': password,
    });

    final response = await http.post(url, headers: headers, body: body);

    if (response.statusCode == 200) {
      hasLogin = false;
      hasLoginDoc = true;
      notifyListeners();

      return User.fromJson(jsonDecode(response.body));
    } else {
      throw Exception('Failed to load data');
    }
  }

  void signOut() {
    hasLogin = false;
    hasLoginDoc = false;
    notifyListeners();
  }
}
