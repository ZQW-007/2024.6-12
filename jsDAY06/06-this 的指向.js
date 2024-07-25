// 在 node 环境下  直接输出 this 返回的是一个 module 对象
// 在浏览器环境下返回的是 window 对象
console.log(this);

//函数中 this 的指向
function foo() { 
    // 1. 在 node 环境下 this 指向全局
    console.log(this);
}
foo();

//在对象中使用 this 指向的是对象本身
const obj = { 
    name: 'obj', 
    foo: function() { 
        console.log(this.name); } }; 
obj.foo();
