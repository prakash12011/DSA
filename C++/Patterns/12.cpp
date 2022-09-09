#include <iostream>
using namespace std;

int main() {
  int n, j, i = 1;
  cout << "Enter n" << endl;
  cin >> n;
  
  char ch = 'A';
  while ( i <= n) {
    j = 1;
    while (j <= n) {
      cout << ch;
      ch = ch + 1;
      j++;
    }
    cout << endl;
    i++;
  }
  
}