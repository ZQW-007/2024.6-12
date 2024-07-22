// && 与 和 且
// console.log(null && undefined);

// 输入一个字符 并且该字符为 number 类型 并且要大于等于 0 并且小于等于 10
// function inputNum(num) {
//   if (typeof num == 'number' && num >= 0 && num <= 10 ) {
//     console.log('满足条件');
//   }else{
//     console.log('不满足条件');
//   }
// }
// inputNum(5)

// || 或者
// function inputNum(num) {
//   if (typeof num == 'number' || num >= 0 || num <= 10) {
//     console.log('满足条件');
//   } else {
//     console.log('不满足条件');
//   }
// }
// inputNum(200)

// 三目运算符
// 如果你的结果就是一个很简单的提示或者是赋值 推荐使用三目运算符
var age = 12
var res = age >= 18 ? '成年人' : '未成年人'
console.log(res);