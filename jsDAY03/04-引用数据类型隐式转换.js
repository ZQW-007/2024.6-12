// 对象的隐式转换 '[object Object]'
var obj = {name:'zhangsan'}
// console.log(obj.valueOf().toString());
// console.log(typeof obj.valueOf().toString());

// 数组的隐式转换 ''
var arr1 = []
// console.log(arr1.valueOf().toString());
// console.log(typeof arr1.valueOf().toString());

// console.log([] + {});
// console.log({} + []);
// console.log({} + {});
// +[] => '' => false => 0 => 0

// 赋值运算符
var num = 10
num += 20
num += 20
console.log(num);