// 通常情况下，定义了默认值的参数，应该是函数的尾参数，函数的length属性，将返回没有指定默认值的参数个数。
function log(x , y = 'World') {
    console.log(x, y);
}
log('Hello'); // Hello World
function foo({ x, y = 5 }) {
    console.log(x, y);
}
foo({ x: 1 }); // 1 5


//箭头函数
// 函数体内的this对象，指向全局对象，而不是指向函数定义时所在的对象。
id = 21;
function foo() {
    setTimeout(() => {
        console.log('id:', this.id);
    }, 1000);
}

let bar = (a,b) => console.log(a + b);bar(1,2);
var f = (c,d) => console.log(c + d);f(5,6);
const g = (e,g) => console.log(e + g);g(7,8);

//箭头函数只有一个参数，可以省略括号
//函数体只有一个语句，可以省略大括号和return

