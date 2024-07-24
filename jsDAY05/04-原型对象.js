
var obj1 = {}
// 创建一个实例对象
obj1.__proto__.toString = function () {
  return 123
}
var obj2 = new Object()

// 每个构造函数都有一个原型对象，原型对象都包含一个指向构造函数的指针，实例都包含一个指向原型对象的内部指针。
// console.log(obj1.__proto__ === Object.prototype);
// console.log(Object === Object.prototype.constructor);

var date = new Date()
console.log(date.toString());
console.log(date.toLocaleString());
console.log(date.toLocaleDateString());