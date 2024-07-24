//字面量形式创建一个对象
var obj = {
    name:'张三',age:18,gender:'男',
    sayName:function(){
        console.log(this.name)}};
        
//属性访问
//点语法
console.log(obj.name);
//方括号语法
console.log(obj['age']);
//执行对象中的方法
obj.sayName();

//删除对象当中的属性
delete obj.gender;

//新增属性
obj.height = 1.88;

//修改属性
obj.age = 20;

console.log(obj);

// 构造函数创建对象
// var person = new Object();
// person.name = '李四';
// person.age = 20;
// person.gender = '男';