//固定写法，for...of循环遍历
// let str = "hello world"
// for (let s of str) {
//     console.log(s);} //h e l l o   w o r l d


// let s = 'Hello world!';
//startsWith()：返回布尔值，表示参数字符串是否在原字符串的头部。
// console.log(s.startsWith('Hello world')); 
//endsWith()：返回布尔值，表示参数字符串是否在原字符串的尾部。
// console.log(s.endsWith('d!'));
//includes()：返回布尔值，表示是否找到了参数字符串。
// console.log(s.includes(' '));

//这三个方法都支持第二个参数，表示开始搜索的位置。
// startsWith()的第二个参数表示开始搜索的位置,
// console.log(s.startsWith('world', 6));
// endsWith()的第二个参数表示结束搜索的位置，默认是字符串的长度
// console.log(s.endsWith('Hello', 5));
// includes()的第二个参数表示开始搜索的位置
// console.log(s.includes('o', 6));
//这三个方法都返回布尔值，表示是否找到了参数字符串。如果没有找到就返回false。
//对于第二个参数，endsWith的行为与其他两个方法有所不同。它表示针对前n个字符，而其他两个方法表示针对从第n个位置直到字符串结束。


//repeat()方法返回一个新字符串，表示将原字符串重复n次。
// console.log('x'.repeat(999)); 


// let s = ' abc ';
// console.log(s.trim())  //去除字符串两端的空格
// let [...arr] = s.trimStart();
// console.log(arr)  //去除字符串左侧的空格
// let [...brr] = s.trimEnd();
// console.log(brr)  //去除字符串右侧的空格

//Number.isFinite()用来检查一个值是否为有限大的数。
//注意，如果参数类型不是数值，Number.isFinite一律返回false。
// console.log(Number.isFinite(15)); // true
// console.log(Number.isFinite('15')); // false
// console.log(Number.isFinite(NaN)); // false
// console.log(Number.isFinite(0.8)); // true
// console.log(Number.isFinite(-0.8)); // true
// console.log(Number.isFinite('0.8')); // false

//Number.isNaN()用来检查一个值是否为NaN。它是Number.isFinite()的补充。
// console.log(Number.isNaN(NaN)); // true
// console.log(Number.isNaN(15)); // false
// console.log(Number.isNaN(true)); // false

//Number.isInteger()用来判断一个值是否为整数。
//需要注意的是，在JavaScript内部，整数和浮点数是同样的储存方法，所以3和3.0被视为同一个值。
// console.log(Number.isInteger(25.0)); // true
// console.log(Number.isInteger(25)); // true
// console.log(Number.isInteger(25.1)); // false
// console.log(Number.isInteger('25')); // false

//Number.parseInt()方法用于将一个字符串转为整数。
// console.log(Number.parseInt('12.34'))
//Number.parseFloat()方法用于将一个字符串转为浮点数。
// console.log(Number.parseFloat('12.34#'))

