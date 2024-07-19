//字面量创建数组
var arr = [1,2,3,4,5];
//获取数组中对应位置的值
console.log(arr[0]);
var arr2 = ['a','b','c'];
console.log(arr2[1]);
var objArr = [
    {    name:'zs',    age:18   },
    {    name:'ls',    age:20   },
    {    name:'ls1',    age:20   },
    {    name:'ls1',    age:20   }
]
//通过for循环遍历数组中的对象
for(var i = 1;i<objArr.length;i++)
    {console.log(objArr[i].name)}
//通过for in 遍历数组中的对象
// index 为数组中的索引 objArr[index] 为数组中的对象
for (var index in objArr)
    {console.log(objArr[index])}