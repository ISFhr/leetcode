// 将一个给定字符串 s 根据给定的行数 numRows ，以从上往下、从左到右进行 Z 字形排列。

// 比如输入字符串为 "PAYPALISHIRING" 行数为 3 时，排列如下：

// P   A   H   N
// A P L S I I G
// Y   I   R
// 之后，你的输出需要从左往右逐行读取，产生出一个新的字符串，比如："PAHNAPLSIIGYIR"。

// 请你实现这个将字符串进行指定行数变换的函数：

// string convert(string s, int numRows);

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (numRows.length > s.length || s.length === 1 || numRows === 1) {
    return s
  }
  let plus = true
  let minus = false
  let num = 0
  let arr = Array.from({ length: numRows }).fill("")

  let index = 0
  while (index < s.length) {
    arr[num] += s[index]

    if (plus) {
      num += 1
    } else {
      num -= 1
    }

    if (num === arr.length - 1) {
      plus = false
    } else if (num === 0) {
      plus = true
    }

    index++
  }

  return arr.join("")
}

const result = convert("sadfjlasfdjalskdf", 3)
console.log(result)
