var obj1 = {
  sayName: function (a, b) {
    console.log(this.name);
    console.log(a, b);
  }
}
var obj2 = {
  name:'张三'
}
// 改变 this 的指向
// call 立即执行 
obj1.sayName.call(obj2, '李四', '王五')
// apply 立即执行 
obj1.sayName.apply(obj2,['李四','佩奇'])
// bind 不会立即执行 需要我们再调用一次 才会执行
var bindFun = obj1.sayName.bind(obj2)
bindFun(1,2)