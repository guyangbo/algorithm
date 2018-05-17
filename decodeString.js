/**
 * 说明：给定一个编码字符，按编码规则进行解码，输出字符串
 *     编码规则是`count[letter]`，将letter的内容count次输出，count是空或正整数，letter是区分大小写的纯字母
 * 示例：
 * var s = '3[a]2[bc]'; decodeString(s); // 返回'aaabcbc'
 * var s = '3[a2[c]]'; decodeString(s); // 返回'accaccacc'
 * var s = '2[abc]3[cd]ef'; decodeString(s); // 返回'abcabccdcdcdef'
 */

function decodeString(s) {
  let len = s.length;
  let stackNumber = [];
  let stackStr = [];

  let index = 0;
  while(index < len) {
    let cur = s[index];
    index++;

    if (!isNaN(parseInt(cur))) {
      stackNumber.push(parseInt(cur));
      continue;
    } else if (cur != '[' && cur != ']') {
      let lastStr = stackStr.pop() || '';
      stackStr.push(lastStr + cur);
      continue;
    } else if (cur == '[') {
      stackStr.push('[', '');
      continue;
    } else if (cur == ']') {
      let curStr = [];
      let lastStr = stackStr[stackStr.length-1];
      while (lastStr != '[') {
        curStr.push(stackStr.pop());
        lastStr = stackStr[stackStr.length-1];
      }
      stackStr.pop();

      let lastNum = stackNumber.pop();
      stackStr.push(new Array(lastNum+1).join(curStr.reverse().join('')));
    }
  }

  return stackStr.join('');
}

var s = 'xyz3[a]2[bc]'; console.log(decodeString(s), decodeString(s) === 'xyzaaabcbc');
var s = '3[a2[c]]'; console.log(decodeString(s), decodeString(s) === 'accaccacc');
var s = '2[abc]3[cd]ef'; console.log(decodeString(s), decodeString(s) === 'abcabccdcdcdef');
