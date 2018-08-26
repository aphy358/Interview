// 思路  递归

// 方法一: 字符串分隔，倒转，聚合
// function palindrome (line) {
//   line += '';
//   return line === line.split('').reverse().join('')
// }


// 方法二： 字符串头部和尾部，逐次向中间检测
function isPalindrome (line) {
  line += '';
  for (var i=0,j=line.length-1;i<j;i++,j--) {
    if (line.chartAt(i) !== line.chartAt(j)) {
      return false
    }
  }
  return true
}



  palindrome('abcba')


  