#include <iostream>
using namespace std;

int main() {
  int n, j, i = 1;
  cout << "Enter n" << endl;
  cin >> n;

  while (i <= n) {
    j = 1;
    while (j <= i) {
      cout << i;
      j++;
    }
    cout << endl;
    i++;
  }
  
}