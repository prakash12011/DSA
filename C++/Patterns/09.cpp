#include <iostream>
using namespace std;

int main() {
  int n, j, i = 1;
  cout << "Enter n" << endl;
  cin >> n;
  
  while ( i <= n ) {
    j =  1;
    while ( j <= i ) {
      cout << (i - j + 1);
      j++;
    }
    cout << endl;
    i++;
  }
  
}