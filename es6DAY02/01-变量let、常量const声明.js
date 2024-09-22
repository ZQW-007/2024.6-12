//解决闭包
let arr = [];
for (let i = 0; i < 10; i++) {
    let temp = function () {
        console.log(i);
    };
    arr.push(temp);
}
arr[0](); // 0

//let 常用来声明变量
let a;
a = 1;// 赋值a
console.log(a); // 1

//let 声明的变量不能重复声明
//let a = 1;
//let a = 2; // 报错

//let 声明的变量必须先声明再使用
//console.log(a); // 报错

//let a = 1; 
//console.log(a); // 正确

//let 声明的变量具有块级作用域
let aa = 10;
{
    let aa = 1;
    console.log(aa); // 1
}
console.log(aa); // 10

//const 声明常量
const b = 1;

//const 声明变量不会提升
//console.log(b); // 报错

//const b = 1;
//console.log(b); // 正确

//const 声明的常量不能重复声明
//const b = 1;
//const b = 2; // 报错

//const 声明的常量必须初始化
//const b; // 报错
//const b = 1; // 正确

//const 声明的常量不能修改
//const b = 1;
//b = 2; // 报错

//const 声明的常量具有块级作用域
const bb = 10;
{
    const bb = 1;
    console.log(bb); // 1   
}
console.log(bb); // 10
