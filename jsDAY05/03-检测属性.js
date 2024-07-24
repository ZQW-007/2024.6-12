var obj = {
  age: 20,
  gender:'男',
  hobby:'篮球'
}
// in
// 因为toString定义在Object对象中，而所有对象最终都会在原型链上指向Object，所以obj也拥有toString属性。
// console.log('age' in obj);
// console.log('toString' in obj);

// hasOwnProperty() 检测自由属性 继承的方法或属性全部返回 false
console.log(obj.hasOwnProperty('age'));
console.log(obj.hasOwnProperty('toString'));

// propertyIsEnumerable
console.log(obj.propertyIsEnumerable('age'));
console.log(obj.propertyIsEnumerable('toString'));