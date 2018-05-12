function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let j = i;
    let current = arr[i];
    while (j > 0 && current < arr[j-1]) {
      arr[j] = arr[j-1];
      j--;
    }

    arr[j] = current;
  }
}

let arr = [3, 5, 7, 8, 4, 1, 40, 20];
insertionSort(arr);
console.log(arr);