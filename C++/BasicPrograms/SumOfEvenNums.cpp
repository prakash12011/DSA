#include<iostream>
using namespace std;

int main() {
  int n, sum = 0, i = 2;
  cin >> n;

  while (i <= n){
    cout << "Cuurent Value Of I is " << i << ", Sum With " << sum << endl;
    sum = sum + i;

    i = i + 2;
  }
  
  cout << "Total Sum is " << sum;
} 