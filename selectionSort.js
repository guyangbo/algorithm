function selectionSort(arr) {
  for (let i = 0; i < arr.length-1; i++) {
    let maxIndex = 0;
    for (let j = 0; j < arr.length-i; j++) {
      if (arr[j] > arr[maxIndex]) {
        maxIndex = j;
      }
    }

    swap(arr, maxIndex, arr.length-1-i);
  }
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

let arr = [3, 5, 7, 8, 4, 1, 40, 20];
selectionSort(arr);
console.log(arr);