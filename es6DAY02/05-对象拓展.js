// let name = 'terry';
// let foo = {
//  name, // 等价于 name: name
//  sayName() {
//  console.log('my name is', this.name);}
// };
// foo.sayName()

// let obj  = { name: 'terry', age: 12, }
// let o =  {...obj} // 展开运算符
// console.log(o)


Object.is(NaN, NaN) // true
Object.is(+0, -0) // false
    // 这是因为 +0 和 -0 在 JavaScript 中被视为不同的值。
    + 0 === -0 //true
NaN === NaN // false
// 在JavaScript中，NaN是一个特殊的值，表示一个非数字的数值。它用于表示那些无法用数字表示的值，比如0除以0的结果。
// 然而，需要注意的是，NaN与任何值（包括它自己）的比较结果都是false。这是因为NaN是唯一一个不等于自身的值。这是由于NaN的特殊性质，它表示一个未定义或不可表示的数值，因此无法与其他任何值（包括自身）进行比较，结果都是false。
// 所以，NaN === NaN的结果是false，这是JavaScript中一个重要的特性，用于处理和检测非数字值。



Object.is(null, null) // true
Object.is(undefined, undefined) // true
Object.is('a', 'a') // true
Object.is({}, {}) // false
Object.is([], []) // false
Object.is(1, '1') // false
Object.is(1, 1) // true
Object.is(0, -0) // false
Object.is(-0, -0) // true
Object.is(0, 0) // true


// Object.assign() 方法用于将所有可枚举属性的值从一个或多个源对象复制到目标对象。它将返回目标对象。
let obj1 = { name: 'zhangsan' }
let obj2 = { name: 'lisi', age: 18 }
let obj3 = { height: 1.88 }
// ⽬标对象
let target = {}
// 第⼀个参数 是⽬标对象 后⾯的参数时源对象
// 如果源对象中的属性有重复 后⾯的会覆盖前⾯的
Object.assign(target, obj1, obj2, obj3)
// console.log(target);

// Object.setPrototypeOf() 方法设置一个指定的对象的原型 ( 即, 内部[[Prototype]]属性）到另一个对象或 null。
let prototype = {
    foo() { console.log('foo') },
    bar() { console.log('bar') }
}
//obj为指定的对象
let obj = {}
Object.setPrototypeOf(obj, prototype)
// obj.foo() // foo
// obj.bar() // bar
// Object.getPrototypeOf() 方法返回指定对象的原型（即，内部[[Prototype]]属性的值）。
let a = Object.getPrototypeOf(obj)
// console.log(a)

// Object.keys() 方法会返回一个由一个给定对象的自身可枚举属性组成的数组，数组中属性名的排列顺序和正常循环遍历该对象时返回的顺序一致 。
// console.log(Object.keys(obj2))
// Object.values() 方法返回一个给定对象自身的所有可枚举属性值的数组，值的顺序与使用for...in循环遍历该对象时返回的顺序一致（区别在于for...in循环还会枚举其原型链中的属性）。
// console.log(Object.values(obj2))
// Object.entries() 方法返回一个给定对象自身可枚举属性的键值对数组，其排列与使用 for...in 循环遍历该对象时返回的顺序一致（区别在于 for...in 循环还会枚举其原型链中的属性）。
// console.log(Object.entries(obj2))