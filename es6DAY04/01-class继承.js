// class A {
    // 静态属性
//     static num = 200;
    // 静态⽅法
//     static number() {
//         return this.num;
//     }
// }
// class B extends A {
    //只有本身也是静态方法才可调用父类函数的静态方法
//     static getNumber() {
        // super是A类本身
//         return super.number();
//     }
// }
// console.log(B.getNumber()); //200

class Person{
// constructor ⽅法是类的默认⽅法，通过new命令⽣成对象实例时，⾃动调⽤该⽅法。
// ⼀个类必须有constructor⽅法，如果没有显式定义，⼀个空的constructor⽅法会被默认添加。
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    // 实例⽅法，⽤于定义实例对象⾃⼰的⽅法，不常用
    say(){
        console.log(this.name + this.age);
    }
}
class p extends Person{
    constructor(name,age){
        super(name,age);
    }
}
let p1 = new p('张三',18);
p1.say();
