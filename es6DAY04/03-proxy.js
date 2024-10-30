// Promise 构造函数接受⼀个函数作为参数，该函数的两个参数分别是 resolve 和 reject 。它们是两个函
// 数，由 JavaScript 引擎提供。Promise对象代表⼀个异步操作有三种状态： pending（进⾏中）、fulfilled
// （已成功）和rejected（已失败）。状态发⽣改变之后就凝固了，不会再变了，会⼀直保持这个结果，这时
// 就称为 resolved（已定型）

const promise = new Promise(function (resolve, reject) {
    // ... some code
    if (condition) {
        resolve(value);
        // pending -> fulfilled
    } else {
        reject(error);
        // pending -> rejected
    }
});