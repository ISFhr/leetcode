// 给你一个字符串 s，找到 s 中最长的回文子串。

// 如果字符串的反序与原始字符串相同，则该字符串称为回文字符串。
// 示例 1：

// 输入：s = "babad"
// 输出："bab"
// 解释："aba" 同样是符合题意的答案。
// 示例 2：

// 输入：s = "cbbd"
// 输出："bb"

const longestPalindrome = (str) => {
  if (str.length < 2) {
    return str
  }

  let res = ""
  for (let i = 0; i < str.length; i++) {
    helper(i, i)
    helper(i, i + 1)
  }

  var helper = (m, n) => {
    while (m >= 0 && n < str.length && str[m] === str[n]) {
      m--
      n++
    }

    // 因为上面 ++ 和 -- 了，所以 slice 取的时候，m 增加一位，n 不用动，本身 slice 的右边就少一位
    const temp = str.slice(m + 1, n)

    if (res.length < temp.length) {
      res = temp
    }
  }

  return res
}
