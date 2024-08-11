function fun1() {
  // 检测当前变量是否是一个数组
  // console.log(Array.isArray(arguments));
  // console.log(arguments);
  // 将一个类数组转换为一个真的数组
  var argArr = Array.from(arguments)
  console.log(argArr);
  console.log(Array.isArray(argArr));
}
fun1(1,2,3,4,5)
var str = 'Hello'
// 检测当前变量是否是一个数组
// console.log(Array.isArray(str));

// 创建数组的方式
var arr1 = Array.of(6)
console.log(arr1);