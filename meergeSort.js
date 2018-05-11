function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  let left = arr.slice(0, Math.floor(arr.length/2));
  let right = arr.slice(Math.floor(arr.length/2));

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let res = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      res.push(left[i++]);
    } else {
      res.push(right[j++]);
    }
  }

  while (i < left.length) {
    res.push(left[i++]);
  }

  while (j < right.length) {
    res.push(right[j++]);
  }

  return res;
}

let arr = [3, 5, 7, 8, 4, 1, 40, 20];
arr = mergeSort(arr);
console.log(arr);
