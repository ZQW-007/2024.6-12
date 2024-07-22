//+
//1.加法运算
// console.log(1 + 1);
//2.'+'放在数据的前⾯，就是取正数
// var a = -1
// console.log(+a);
//3.字符串拼接 变量的拼接
// var name = '张三'
// console.log('我叫' + name);
// 4.'+'可以将数字字符串或布尔类型等隐式转换成number类型
// var a = '123';
// var b = true;
// console.log(+a, +b); 


// -
//1.负号可以对数字进⾏取负，除 + - 以外其他运算符不能转换
//2.负号可以将字符串数字隐式转换成数字


// ！ 取反操作
//未声明的变量为undefined，取反后为true
// var a;
// if(!a){
//     console.log(123);
// }else{
//     console.log(456);
// }

//++
//前置++：先运算，再赋值
// var a = 1;
// var b = ++a;
//a先自加1，再赋值给b
// console.log(a, b);
//后置++：先赋值，再运算
// var a = 1;
// var b = a++;
//a先赋值给b，再自加1
// console.log(a, b);

//-- 与++同理


//delete 操作符用于删除对象的属性或者数组中的元素
// var pram = {
//     name: '张三',
//     age: 18,
//     gender: '男'
// }
// delete pram.name;
// console.log(pram);

// var arr = [1, 2, 3, 4, 5];
// delete arr[0];
//位置为0的元素被删除，但数组长度不变 
// console.log(arr);//<1 empty item>, 2, 3, 4, 5

