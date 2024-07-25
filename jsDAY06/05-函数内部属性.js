function sum (a, b) { 
    //接受传递进来的所有实际参数
    console.log(arguments[0] + arguments[1] + arguments[2]); // [10, 20, 30]
    return a + b 
};
var result = sum(10, 20, 30);
console.log(result); // 30