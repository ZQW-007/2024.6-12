var obj = {
    name: '张三',
    age: 18
}
// obj.gender = '男'
//数据属性 向对象中添加新的属性
Object.defineProperty(
    obj, 'gender', { 
    //控制可以被delete方法删除 
    configurable: true,
    //是否可以枚举  打印输出看不到
    enumerable: true,
    //是否可以修改该属性的值
    writable: true,
    //该属性的值
    value: '男' 
})
delete obj.gender
obj.gender = '女'
console.log(obj)

//批量的一次性添加多个属性
Object.defineProperties(obj, { 
    height:{
        value: 180,
        enumerable: true,
        writable: true,
        configurable: true
    },
    weight:{
        value: 70,
        enumerable: true,
        writable: true,
        configurable: true
    },
})
console.log(obj)

//读取属性的特性
console.log(Object.getOwnPropertyDescriptor(obj, 'name'));
console.log(Object.getOwnPropertyDescriptors(obj));
