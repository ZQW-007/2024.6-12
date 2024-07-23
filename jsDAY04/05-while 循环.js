// 求 1-100 之间的和
var res = 0
// while 循环的初始值
var i = 1
while (i <= 100) {
  res += i
  // 递增
  i++
}
// console.log(res);

// do/while
do{
  res += i
  i++
}while(i<=100)
// console.log(res);

// 递归实现阶乘
function fac(num) {
  // 跳出递归的条件
  if (num == 1) {
    return 1
  }
  return fac(num - 1) * num
}
var res = fac(10)
console.log(res);