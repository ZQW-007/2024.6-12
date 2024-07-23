var arr = [
  {
    name:'zhangsan',
    age: 30
  },
  {
    name: 'lisi',
    age: 22
  },
  {
    name: 'wangwu',
    age: 27
  },
]
// 基础 for 循环
// for(var i = 0; i < arr.length; i++){
//   console.log(arr[i].name);
// }
// 1-100 之间偶数的和
// var res = 0
// for(var i = 0; i <= 100; i++){
//   // 判断是否为偶数
//   if (i % 2 == 0) {
//     res += i
//   }
// }
// console.log(res);
// for...in...
// for(var index in arr){
//   console.log(arr[index].age);
// }

var obj = {
  name:'zhangsan',
  age: 20
}
for(var key in obj){
  console.log(key);
  console.log(obj[key]);
}