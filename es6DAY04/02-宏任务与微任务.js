console.log(1);
setTimeout(function () {
    console.log(2);
    let promise = new Promise(function (resolve, reject) {
        console.log(3);
        resolve();
    }).then(function () {
        console.log(4);
    });
}, 1000);
setTimeout(function () {
    console.log(5);
    let promise = new Promise(function (resolve, reject) {
        console.log(6);
        resolve();
    }).then(function () {
        console.log(7);
    });
}, 0);
let promise = new Promise(function (resolve, reject) {
    console.log(8);
    resolve()
}).then(function () {
    console.log(9);
}).then(function () {
    console.log(10)
});
console.log(11);
1,8,11,9,10,5,6,7,2,3,4