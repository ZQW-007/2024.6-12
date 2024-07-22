//题目1：声明多个变量分别保存一个人的姓名，性别，电话，家庭地址。并打印出来。
var name = "张三", sex = "男", phone = "123456789", address = "北京市朝阳区"; console.log(name, sex, phone, address);
//声明变量分别保存语文、数学、总成绩，其中总成绩为空；把语文和数学相加的和赋给总成绩。最后打印3个变量。
var chinese = 80, math = 90, total = chinese + math; console.log(chinese, math, total);
//声明变量保存圆周率，声明变量保存圆的半径，计算周长和面积，声明变量分别保存圆的面积和周长。
var pi = 3.14, radius = 5, circumference = 2 * pi * radius, area = pi * radius * radius; console.log(circumference, area);
//交换两个变量的值 a=1 b=2，得到 a=2 b=1。
var a = 1, b = 2, temp = a; a = b; b = temp; console.log(a, b);
//假设从数据库获取到了商品的名称和价格，拼接打印出’商品名称：xxx 价格：xxx’。
var name = "苹果", price = 10; console.log("商品名称：" + name + " 价格：" + price);
//声明变量保存输入的用户名和密码，如果用户名为’root’并且密码为’123abc’，则打印true，否则打印false。 (并且符号： &&)。
var username = "root", password = "123abc"; console.log(username == "root" && password == "123abc");
//JavaScript的数据类型有哪几种，请列举出来。
//Number、String、Boolean、Undefined、Null、Object
//简述undefined与null的关系。
//undefined是未定义，null是空值，undefined可以赋值给null，但null不能赋值给undefined。
//基本数据类型和引用数据类型在内存中如何存储。
//基本数据类型存储在栈内存中，引用数据类型存储在堆内存中。
//简述深拷贝与浅拷贝。
//深拷贝是拷贝对象的所有属性，浅拷贝是拷贝对象的引用。