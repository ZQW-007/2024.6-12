// 1.声明多个变量分别保存一个人的姓名，性别，电话，家庭地址。并打印出来
var userName = 'Briup';
var gender = '未知';
var phone = 18888888888;
var address = '学院路828号浦东软件园四号楼';
console.log(userName,gender,phone,address);
// 2.声明变量分别保存语文、数学、总成绩，其中总成绩为空；把语文和数学相加的和赋给总成绩。最后打印3个变量。
var chinese = 80, math = 90, total;
total = chinese + math;
console.log(chinese,math,total);

// 3.声明常量保存圆周率，声明变量保存圆的半径，计算周长和面积，声明变量分别保存圆的面积和周长。
//圆周率和半径
var pi = 3.14;
var r = 5;
//声明变量保存周长和面积
var len = 2 * pi * r;
var area = pi * r * r;
console.log(len,area);

// 4.交换两个变量的值 a=1 b=2，得到 a=2 b=1。
//交换两个变量
var a = 1, b = 2;
//准备一个第三方的变量
var c = a;
a = b;
b = c;
console.log(a, b);

// 5.假设从数据库获取到了商品的名称和价格，拼接打印出’商品名称：xxx 价格：xxx’。
var storeName = '阳澄湖大闸蟹';
var price = 80;
console.log('商品名称：' + storeName + '  价格：' + price);

// 6.声明变量保存输入的用户名和密码，如果用户名为’root’并且密码为’123abc’，则打印true，否则打印false。
var userName = 'abc1';
var userPwd = '123abc';
console.log(userName === 'root' && userPwd ==='123abc' );

// 7.JavaScript的数据类型有哪几种，请列举出来。
// 值类型(基本类型)：字符串（String）、数字(Number)、布尔(Boolean)、对空（Null）、未定义（Undefined）、Symbol。

// 引用数据类型：对象(Object)、数组(Array)、函数(Function)。
// 8.简书undefined与null的关系。
// undefined继承null，所以undefined == null结果为true，但是null表示空对象，undefined表示未定义；
// null与undefined用途不同，null可以用来表示一个空对象，但是没有必要把一个变量的值显式设置为undefined。
// 9.基本数据类型和引用数据类型在内存中如何存储？
// 基本数据类型变量都维护在栈区，基本数据类型的值保存在栈区。基本数据类型的值存在栈,值与值之间独立存在，修改一个值不会影响其他变量

// 引用数据类型的引用地址保存在栈区，值保存在堆区。当栈存放引用类型时，值为对象的地址，obj与obj1指向同一个地址，所以当obj的name值变为“lisi”时，obj1也会发生变化

// 10.简述深拷贝与浅拷贝？
// 主要针对于引用数据类型参数说的，浅拷贝表示仅拷贝引用地址，深拷贝表示对于对象的克隆。