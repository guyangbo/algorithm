//a >=0 && b >=0
function addBigInt(a, b) {
  a = a + '';
  b = b + '';

  let padding = a.length - b.length;
  if (padding > 0) {
    b = new Array(padding+1).join('0') + b;
  } else if (padding < 0) {
    a = new Array(-padding+1).join('0') + a;
  }

  let length = a.length;
  let res = new Array(length+1);
  let carry = 0;
  let index = length - 1;
  while(index >= 0) {
    let current = parseInt(a[index]) + parseInt(b[index]) + carry;

    carry = Math.floor(current / 10);
    current = current % 10;

    res[index+1] = current;
    index--;
  }

  if (carry) {
    res[0] = carry;
  }

  return res.join('');
}

let a = 123;
let b = 999;
console.log(addBigInt(a, b), a+b);