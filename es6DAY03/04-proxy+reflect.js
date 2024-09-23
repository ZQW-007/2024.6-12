// let target = {
//     name: 'Marie',
//     age: 21
// }
// let handler = {
//     get: function (target, propKey) {
//         console.log('getting ' + propKey);
// return target[propKey]; // 不是target.propKey
//         return target[propKey];
//     },
//     set: function (target, propKey, value) {
//         console.log('setting ' + propKey);
//         target[propKey] = value;
//     }
// }
// let target = {
//     name: 'Marie',
//     age: 21
// }
// let handler = {}
// let proxy = new Proxy(target, handler)
// proxy.name = 'Jack' // 实际执⾏ handler.set
// console.log(proxy.name) // 实际执⾏ handler.get
// console.log(proxy.gender) // 实际执⾏ handler.get
// proxy.gender = 'male' // 实际执⾏ handler.set
// console.log(proxy.gender) // 实际执⾏ handler.get

// let target = {
//     name: 'Marie',
//     age: 21
// }
// let handler = {}
// let proxy = new Proxy(target, handler)
// console.log(proxy.name)

let target = {
    name: "Marie",
    age: 21,
    get info() {
        return this.name + this.age;
    }
}
console.log(Reflect.get(target,'info')) // "Marie"
let receiver = {
    name: "Jerry",
    age: 20
}
console.log(Reflect.get(target, 'info', receiver)) // Jerry20