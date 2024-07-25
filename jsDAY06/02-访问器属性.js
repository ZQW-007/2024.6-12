var obj ={
    name: '张三',
    //内部属性的标识
    _age : 18
}
//访问器
Object.defineProperty(obj, 'age', {
    //获取属性值的方法
    get: function(){console.log('访问了age属性'); return this._age},
    //设置属性值的方法
    set: function(value){
        if(this._age != value){
        console.log('设置了age属性');
        console.log(value);}
    }
})
obj.age = 20;
console.log(obj.age);