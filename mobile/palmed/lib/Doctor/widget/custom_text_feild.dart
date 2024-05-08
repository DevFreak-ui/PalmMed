import 'package:flutter/material.dart';

class CustomTextFeild extends StatelessWidget {
  final Widget child;
  const CustomTextFeild({
    super.key,
    required this.child,
  });

  @override
  Widget build(BuildContext context) {
    return PreferredSize(
      preferredSize: const Size.fromHeight(64),
      child: Padding(
        padding: const EdgeInsets.all(8.0),
        child: child,
      ),
    );
  }
}
