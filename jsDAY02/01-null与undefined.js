//null 空对象指针
// var obj = null;
// console.log(obj,typeof null);

//= 赋值
var a = 100;
//== 比较值 只会比较等号两边的数值 不会比较数值类型 做了一个隐式转换
console.log(100 == '100'); 
//=== 完全相等 先比较类型，再比较值 如果数据类型一致 再比较值
console.log(100 === '100');
console.log(100 === 100);