// 字面量形式创建数组
// var arr2 = ['string', 200, {name:'zhangsan'},[1,2,3], function() {}]var arr1 = ['张三','李四','小猪佩奇']

// 通过控制数组的length的值 来改变数组的长度
// arr1.length = 10
// 通过下标索引来获取对应位置上的值
// arr1[1]
// 获取数组中最后一个元素
console.log(arr1[arr1.length - 1]);
// for 循环遍历数组
// for(var index in arr1){
//   console.log(arr1[index]);
// }

// 构造函数形式创建数组
// var arr2 = new Array()
// 构造函数的参数 只有一个并且为正整数 代表当前数组的长度 不能使用浮点数作为参数
// var arr2 = new Array(3)
// 如果使用两个或两个以上参数 代表当前数组中的数据
var arr2 = new Array(3,4,5,'string')
console.log(arr2);