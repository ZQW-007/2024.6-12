//使用字面量形式创建对象
var person = {
    //key : value
    name: 'Tom', 
    age: 18, 
    gender: 'male',
    chlid:{
        chlidname:'jack'
    }
};
//获取对象的属性 点语法
console.log(person.age,typeof person.age);  
console.log(person.chlid.chlidname);
//增加对象的属性
person.height = 1.88;
console.log(person.height);
