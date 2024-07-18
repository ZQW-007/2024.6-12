//未定义  undefined 基本数据类型之一
//var a 变量声明提前
//console.log(a) //console.log(b) 没有 b 的声明，所以会报错
//var a = 100
//console.log(a) // 100
//代码块，局部作用域，用var外部也能拿到，用let外部拿不到
{
    var a = 100   
    //let b = 200
}
console.log(a) // 100