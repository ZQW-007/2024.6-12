//数组的拓展运算符
// console.log(...[1, 2, 3]) // 1,2,3

// 数组API扩展

// 1. Array.from() 将类数组对象或可遍历对象转换为真正的数组
// Array.from('hello') //将字符串转换为数组 [‘h’, ‘e’, ‘l’, ‘l’, ‘o’]
// let namesSet = new Set('abcdef')
// console.log(Array.from(namesSet)) //将nameSet转换为数组 [‘abcdef’]

// 2. Array.of() 将一组值转换为数组
// Array.of(1, 2, 3, 4) // [1, 2, 3, 4]
// Array.of(1) // [1]
// Array.of() // []
// newArray(1) // [1]
// new Array(10)[]// [empty × 10] length:10

// 3. find() 找出第一个符合条件的数组成员
// let arr = [1, 2, 3, 4, 5, 6]
// console.log( arr.find( (n) => {return n > 5} ) ) // 4


// 4. findIndex() 找出第一个符合条件的数组成员的位置，如果所有成员都不符合条件，则返回-1
// let arr = [1, 2, 3, 4, 5, 6]
// console.log( arr.findIndex( (n) => {return n > 5} ) )  //5
// console.log( arr.findIndex( (n) => {return n > 10} ) ) // -1

// 5. includes() 判断数组是否包含某个值，返回布尔值
// let arr = [1, 2, 3, 4, 5, 6]
// console.log( arr.includes(6) ) // true
// console.log( arr.includes(7) ) // false

// 6. flat() 将多维数组转换为低维数组
// let arr = [1, 2, [3, 4, [5, 6]]]
// console.log( arr.flat() ) // [1, 2, 3, 4, [5, 6]]
// console.log( arr.flat(2) ) // [1, 2, 3, 4, 5, 6]
// flat()默认只展开一层，传入一个整数参数，表示要展开的层数，默认为1,如果传入Infinity，则展开所有层

// 7. fill() 使用给定值填充数组
// new Array(3).fill(7) // [7, 7, 7]
// fill方法用于空数组的初始化非常方便，数组中已有的元素，会被全部抹去。
// ['a', 'b', 'c'].fill(7) // [7, 7, 7]
// let arr = [1, 2, 3, 4, 5, 6]
// console.log( arr.fill(0) ) // [0, 0, 0, 0, 0, 0]这个方法调用会将数组arr中的所有元素都替换为0。
// console.log( arr.fill(0, 2) ) // [1, 2, 0, 0, 0, 0]这个方法调用会将数组arr中从索引2开始（包括索引2）的所有元素替换为0。
// console.log( arr.fill(0, 2, 4) ) // [1, 2, 0, 0, 5, 6]这个方法调用会将数组arr中从索引2开始（包括索引2）到索引4结束（不包括索引4）的所有元素替换为0。
// fill方法还可以接受一个函数作为参数，执行时，会传入三个参数，当前元素的值，当前位置，原数组
// function (value, index, array) {
//   console.log(value, index, array)
// }
// ['a', 'b', 'c'].fill(7, 1, 2) // ['a', 7, 'c']表示将数组中的从索引1（包括）到索引2（不包括）的元素替换为7。
// 如果填充的类型为对象，那么被赋值的是同一个内存地址的对象，而不是深拷贝对象。
// let arr = new Array(3).fill({name: 'jack'})
// arr[0].name = 'tom'
// console.log(arr) // [{name: 'tom'}, {name: 'tom'}, {name: 'tom'}]
// let arr = new Array(3).fill([])
// arr[0].push(1)
// console.log(arr) // [{1}, {1}, {1}]
// 注意：
// fill()方法会改变原数组。
// 如果起始索引大于结束索引，则不会进行任何填充。
// 如果起始索引或结束索引超出了数组的范围，fill()方法会从数组的起始位置开始填充，直到达到数组的末尾。

let arr = ["jacky","vicky","tom"]
//这三个⽅法⽤于遍历数组。它们都返回⼀个遍历器对象，可以⽤for...of循环进⾏遍历，执⾏结果都是相同的。
// keys()返回一个数组迭代器对象，该对象包含数组中每个索引的键。
// values()返回一个数组迭代器对象，该对象包含数组中每个索引的值。
// entries()返回一个数组迭代器对象，该对象包含数组中每个索引的键值对。
function show (arr) {
    for (const key of arr.keys()) {
        console.log(key)
      };
      for (const value of arr.values()) {
        console.log(value)
      };
      for (const [key, value] of arr.entries()) {
        console.log(key, value)
      }
}  
show(arr)
