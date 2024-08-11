var arr1 = ['张三', '李四', '小猪佩奇']
// 数组转换为字符串
console.log(arr1.toString());
// join 数组转换为字符串 分隔符可以自定义
var res = arr1.join('-')
console.log(res);
// 将数组转换为 JSON 字符串，将 JSON 字符串转换回数组
var arrStr = JSON.stringify(arr1)
console.log(arrStr);
var arrObj = JSON.parse(arrStr)
console.log(arrObj);