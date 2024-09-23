// let map = new Map();

// map.set('name', 'John');
// map.set('age', 30);
// map.set('city', 'New York');

// console.log(map.get('name')); // John
// console.log(map.get('age')); // 30
// console.log(map.get('city')); // New York

// console.log(map.has('name')); // true
// console.log(map.has('gender')); // false

// map.delete('age');
// console.log(map.has('age')); // false

// console.log(map.size); // 2
// map.clear();
// console.log(map.size); // 0

let map = new Map([['name', 'John'], ['age', 30], ['city', 'New York']]);
// console.log(map.get('name')); // John
// console.log(map.keys()); // [ 'name', 'age', 'city' ]
// console.log(map.values()); // [ 'John', 30, 'New York' ]
// console.log(map.entries()); // [ [ 'name', 'John' ], [ 'age', 30 ], [ 'city', 'New York' ] ]
// for (let [key, value] of map.entries()) {
// console.log(`${key}: ${value}`);
// }// name: John // age: 30// city: New York
// console.log(map.forEach((value, key) => console.log(`${key}: ${value}`))); 
let iter = map.keys();
// Iterator迭代器
console.log(iter.next().value); // name
console.log(iter.next().value); // name
console.log(iter.next().value); // name
console.log(iter.next().value); // name
