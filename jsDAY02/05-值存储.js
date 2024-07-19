// 基本数据类型的值存储
// var a = 100;
// var b = a;
// a = 200;
// console.log(a, b);  

// 引用数据类型的值存储
var obj1 = {
    name: '张三',
    age: 18
}
var obj2 = obj1;
obj1.name = '李四';
console.log(obj1, obj2);

