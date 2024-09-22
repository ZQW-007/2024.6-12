// let {aaa,bbb} = {aaa: 1, bbb: '2'}
// console.log(aaa, bbb);
// console.log(aaa === 1, bbb === '2');

// let {foo: baz,bar} = { foo: 'aaa', bar: 'bbb' };
// console.log(baz,bar); 

// let obj = { name: 'zhangsan', age: 12 }
// let { ...person } = obj
// person.gender = "1";
// console.log(person)
// console.log(person === obj)
// let stu = {
//     ...person,
//     gender: '2'
// }
// console.log(stu)

// const [a, b, c, d, e] = 'hello';
// console.log(a, b, c, d, e);
//计算字符串长度
// let {length} = 'hello';
// console.log(length)
//将string字符串转成数组
// let [...arr] = 'hello';
// console.log(arr);

let { valueOf } = 12; // valueOf() 方法返回指定对象的原始值。
console.log(valueOf);
console.log(valueOf = Number.prototype.valueOf);