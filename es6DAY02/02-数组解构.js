// let [a,b,c ] = [1,2,3];
// console.log(a,b,c); 

// let {a,b,c} = {a:1,b:2,c:3};
// console.log(a,b,c);

// let [arr,[brr,crr]] = [1,[2,3]];
// console.log(arr,brr, crr);

// let [...arr] = [1,2,3,4,5];
// console.log(arr);

// let [ , , , , b] = [1,2,3,4,5];
// console.log(b);

//原⽣具备 Iterator 接⼝的数据结构：Array、Map、Set、String、TypedArray、arguments、NodeList 等
// 以下都报错
// let [foo] = 1; 
// let [foo] = false;
// let [foo] = NaN;
// let [foo] = undefined;
// let [foo] = null;
// let [foo] = {};
// 可以正常解构
// let [a] = 'hello';  // a = 'h'

// let old = [1,2,3];
// let [...arr] = old;
// console.log(arr); 
// console.log(old === arr); // false

// let [x,y=1] = [1];
// console.log(x,y);

// let [x,y=1] = [1,undefined];
// console.log(x,y);

// function f() { console.log('aaa'); }
// let [x = f()] = [];
//x = f() 表示如果数组中没有元素可以赋值给 x，那么 x 将被赋值为函数 f() 的返回值。
//f() 是一个函数调用，它会在 x 没有被赋值时执行

