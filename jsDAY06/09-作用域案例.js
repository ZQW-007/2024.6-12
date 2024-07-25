var a = 10
function fun1() {
    //当函数内部有变量a时，会产⽣局部作⽤域，外界全局作⽤域中的a不会对函数内部造成影响
    console.log(a)    //变量声明提升 因为自己的作用域中有a var a = undefined
    var a = 20
    console.log(a)
    function fun2() { 
        console.log(a)//同理
        var a = 30
        console.log(a)}
    fun2()
}
fun1()

var a = 10
function fun4() { 
    console.log(a) //自由变量，顺作⽤域链向⽗作⽤域找
    var b = 20 
    function fun3() { 
        console.log(b) 
        var c = 30 
        console.log(c) //本作⽤域的变量
    } 
        fun3() 
} 
fun4()