// 基本的闭包结构
function fun1() {
  var a = 10, b = 20
  function fun2() {
    return a + b
  }
  return fun2
}
var res = fun1() // fun2
console.log(res());
