function quickSort(arr, left, right) {
  if (arr.length <= 1) {
    return arr;
  }

  let index = partition(arr, left, right);
  if (left < index - 1) {
    quickSort(arr, left, index - 1);
  }
  if (right > index) {
    quickSort(arr, index, right);
  }
}

function partition(arr, left, right) {
  let i = left;
  let j = right;
  let pivot = arr[left];

  while (i <= j) {
    while (arr[i] < pivot) {
      i++;
    }
    while (arr[j] > pivot) {
      j--;
    }

    if (i <= j) {
      swap(arr, i++, j--);
    }
  }
  return i;
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

let arr = [3, 5, 7, 8, 4, 1, 40, 20];
quickSort(arr, 0, arr.length-1);
console.log(arr);
