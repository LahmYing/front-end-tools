// 扩展运算符


// 注意，只有函数调用时，扩展运算符才可以放在圆括号中，否则会报错。
// console.log((...[1, 2])) // Uncaught SyntaxError: Unexpected number
// console.log(...[1, 2]) // 1 2


// 取代apply
// ES5 的写法
// Math.max.apply(null, [14, 3, 77])
// ES6 的写法
// Math.max(...[14, 3, 77])


// 扩展运算符与正常的函数参数可以结合使用,后面还可以放置表达式
// function f(params) {
//   console.log(params); 
// }
// const args = [0, 1];
// f(-1, ...args, 2, ...[3], ...(x > 0 ? ['a'] : []));


// Array.from
// 只要一个对象有length，Array.from就能把它变成一个数组，返回新的数组
// 对 String，Set，Map 也可以
// let likeArr = {
//   '0': 'a',
//   '1': 'b',
//   '2': 'c',
//   length: 3
// };


// Array.of 总是返回参数值组成的数组
// Array.of() // []
// Array.of(undefined) // [undefined]
// Array.of(3) // [3]
// Array.of(3, 4, 5) // [3, 4, 5]


// Array.copyWithin(target, start = 0, end = this.length)
// 将指定位置的数组项复制到其他位置，会覆盖原数组项，然后返回当前数组。使用该方法会修改当前数组
// （1）target（必需）：从该位置开始替换数据。如果为负值，表示倒数。
// （2）start（可选）：从该位置开始读取数据，默认为 0。如果为负值，表示倒数。
// （3）end（可选）：到该位置前停止读取数据，默认等于数组长度。如果为负值，表示倒数。
// ['a', 'b', 'c', 'd', 'e', 'f', 'g'].copyWithin(0, 3) //  ["d", "e", "f", "g", "e", "f", "g"]


// 填充一个数组
// [1,2,3,4,5].fill('a'); // ["a", "a", "a", "a", "a"]
// [1, 2, 3, 4, 5].fill('a', 2, 4); // [1, 2, "a", "a", 5]


// find
// [1, 4, -5, 10].find((n) => n < 0) // -5
// [1, 4, -5, 10].find((n) => n < -10) // undefined


// findIndex 
// 返回第一个符合条件的数组成员的位置，如果所有成员都不符合条件，则返回 - 1
// findIndex 可借助 Object.is 识别 NaN, indexOf 不可以
// ['a', 'b', NaN, 'c'].findIndex(y => Object.is(NaN, y)) // 2


// includes
// [NaN].includes(NaN) // true
// [NaN].indexOf(NaN)  // -1






