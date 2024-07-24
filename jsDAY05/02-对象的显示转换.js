var obj = {
    name : '张三',
    age : 18,
    // 显示转换为Number类型
    valueOf : function(){return 100},
    // 显示转换为String类型
    toString : function(){return 10}
}
//显示转换为String类型
console.log(obj.valueOf());
console.log(obj.toString());
console.log(Number(obj));