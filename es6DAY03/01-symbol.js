// 没有描述符的symbol值
// let s = Symbol();
// 有描述符的symbol值
// let s1 = Symbol('hello');
// console.log(s, s1); //Symbol() Symbol(hello)
// console.log(typeof s); //symbol

// 没有参数的情况
// let s1 = Symbol();
// let s2 = Symbol();
// console.log(s1 === s2) // false
// 有参数的情况
// let s1 = Symbol('foo');
// let s2 = Symbol('foo');
// console.log(s1 === s2) // false

// const sym = Symbol('1');
// console.log(sym.description) // "foo"

// let obj = {
    // ...此处省略n多个属性
//     name: 'ronda'
// };
// 因为symbol是独⼀⽆⼆的，那么属性名就可以⽤symbol来表示。
// let tempName = Symbol('name');
// obj[tempName] = '张三'; // '张三'保存到了obj对象中
// console.log(obj[tempName]); //张三
// console.log(obj);

// const obj = {}
// let a = Symbol('a')
// let b = Symbol('b')
// obj [a] = 'hello'
// obj [b] = 'world'
// const objectSymbols = Object.getOwnPropertySymbols(obj)
// console.log(objectSymbols) // [ Symbol(a), Symbol(b) ]

const obj = {
    name: 'ronda',
    age: 18,
    [Symbol('gender')]: 'male'}
    //循环遍历对象属性
    //symbol属性不会出现在for...in循环中
    // 也不会被Object.keys()、Object.getOwnPropertyNames()、JSON.stringify()返回
    // 因为symbol属性是对象的私有属性，不会被枚举
    for (let i in obj) {
        console.log(i, obj[i])
    }
    //循环遍历对象属性，与for...in不同的是，for...in循环对象自身的和继承的可枚举属性
    Object.getOwnPropertyNames(obj).forEach((item) => {
        console.log(item, obj[item])
    })
    // 但是可以使用Object.getOwnPropertySymbols()方法获取对象中的所有symbol属性,
    //循环遍历对象属性，与for...in和Object.getOwnPropertyNames不同的是，Object.getOwnPropertySymbols()只会遍历对象自身的可枚举属性
    Object.getOwnPropertySymbols(obj).forEach((item) => {
        console.log(item, obj[item])
    })
    // 也可以使用Reflect.ownKeys()方法获取对象中的所有属性
    Reflect.ownKeys(obj).forEach((item) => {
        console.log(item, obj[item])
    })