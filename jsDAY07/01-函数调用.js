var  obj1 = {
    sayName: function(a,b ){
        console.log(this.name);
        console.log(a,b)
    }
}
var obj2 ={
    name: 'zhangsan'
}
// 改变this的指向
// call  后续需要传入参数  直接以字符串的形式传入
// obj1.sayName.call(obj2, 'lisi','wangwu')
// apply  后续需要传入参数  得用数组的形式
obj1.sayName.apply(obj2, ['lisi','wangwu'])
// bind   不会立即执行 需要我们再调用一次 才会执行
var bindfun = obj1.sayName.bind(obj2)
bindfun(1,2)