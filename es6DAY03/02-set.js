// let arr = [1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10];
// let set1 = new Set(arr);
// console.log(set1)

// let set = new Set();
// set.add(1);
// set.add(1); // 添加重复的值⽆效
// console.log(set.size);
// console.log(set)

// let set = new Set();
// set.add(1);
// set.add(2);
// console.log(set.size);
// console.log(set)
// set.has(1);
// console.log(set.has(1));
// set.delete(1);
// console.log(set.size);
// console.log(set)
// set.clear();
// console.log(set.size);
// console.log(set)

// let set = new Set();
// set.add(4);
// set.add(5);
// set.add(6);
// console.log(set)
// let values = Array.from(set.values());// 将set的值转成数组
// console.log(values)
// let keys = set.keys();
// console.log(keys)
// for (let item of set) {
//   console.log(item)
// }
// for (let item of set.keys()) {
//   console.log(item)
// }
// for (let item of set.entries()) {
//   console.log(item)
// }


let arr = new Set();
arr.add(1);
arr.add(2);
arr.add(3);
arr.forEach((values, key, set) => {
  console.log(values, key, set)
})