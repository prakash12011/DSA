#include <iostream>
using namespace std;

int main() {
  int n, j, i = 1;
  cout << "Enter n" << endl;
  cin >> n;
  
  while (i <= n) {
    j = 1;
    while ( j <= n) {
      char ch = 'A' + i + j - 2;
      cout << ch;
      j++;
    }
    cout << endl;
    i++;
  }  
}