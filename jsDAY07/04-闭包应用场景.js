function fun1() {
  var n = 1
  nAdd = function () {
    // 变量的值始终保持在内存中
    console.log(n += 1);
  }
  function fun2() {
    return n
  }
  function fun3() {
    return n
  }
  return fun2
}
fun1()
var res = fun1()
nAdd()
nAdd()
nAdd()
console.log(res());

