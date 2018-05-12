function bubbleSort(arr) {
  for (let i = 0; i < arr.length-1; i++) {
    for (let j = 0; j < arr.length-i-1; j++) {
      if (arr[j] > arr[j+1]) {
        swap(arr, j, j+1);
      }
    }
  }
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

let arr = [3, 5, 7, 8, 4, 1, 40, 20];
bubbleSort(arr);
console.log(arr);