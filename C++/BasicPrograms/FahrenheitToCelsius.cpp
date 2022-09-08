#include <iostream>
using namespace std;

int main() {
  // Formula
  // °F = (9 / 5 × °C) + 32
  // °C = (°F − 32) × 5/9

  int Choice;
  float F, C;

  cout << "Enter choice of what you want to do " << endl;
  cout << "1. Enter 1 to convert Fahrenheit Into Celsius" << endl;
  cout << "2. Enter 2 to convert Celsius Into Fahrenheit" << endl;

  cin >> Choice;

  if (Choice == 1) {
    cout << "Enter Fahrenheit " << endl;
    cin >> F;

    C = (F - 32) * 5/9;
 
    cout << "Given Fahrenheit Into Celsius " << C << endl;

  } else if(Choice == 2) {
    cout << "Enter Celsius " << endl;
    cin >> C;

    F = (C * 9 / 5) + 32;

    cout << "Given Celsius Into Fahrenheit " << F << endl;

  } else {
    cout << "Enter Valid Number " << endl;
  }
}