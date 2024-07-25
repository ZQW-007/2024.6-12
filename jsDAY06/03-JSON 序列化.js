var obj = {
    name: '张三',
    age: 18,
}
//将对象转换为json格式
var json = JSON.stringify(obj);
// console.log(json);
// console.log(typeof json);
//将json转换为对象
var obj2 = JSON.parse(json);
console.log(obj2);
console.log(typeof obj2);
