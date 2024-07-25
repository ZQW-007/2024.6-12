//ES5
//代码块
// {
//     var a = 1;
// }
//函数 局部作用域
// function foo() {
//     var a = 1;
// }
// console.log(a); 

//es6
//let 块级作用域
// {
//     let b = 1;
// }
// console.log(b);

//用 var 关键字声明的变量就是普通变量
var v1 = 10;
//直接定义的变量就是 全局变量
v2 = 20;
function foo() {
    var v3 = 30;
    console.log(v1, v2, v3);
}
foo();