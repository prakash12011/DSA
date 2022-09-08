function minMax(arr) {
  var min = arr[0], max = arr[0];
  
  for (let i = 0; i < arr.length; i++) {
    if ( arr[i] > max ) {
      max = arr[i];
    }

    if ( arr[i] < min) {
      min = arr[i];
    }
  }

  console.log('Min', min);
  console.log('max', max);
}

const arr = [5, 20, 51, 0, 50];

minMax(arr);