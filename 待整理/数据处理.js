// map() 方法创建一个新数组，其结果是该数组中的每个元素都调用一个提供的函数后返回的结果
const new_array = [1, 2, 3].map(x => x * x)
// Array(3)[1, 4, 9]

// filter() 方法创建一个新数组, 其包含通过所提供函数实现的测试的所有元素
const new_array2 = [1, 2, 3].filter(x => x > 1)
// Array [ 2, 3 ]


// for
// forEach() 针对数组
// arr.forEach(fuction(el,index,arr,arg){
//  do
// })
// function 中最多3个参数
// el 项 index 索引 arr 数组本身 arg 其他
var arr = [{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }]
var arr1 = ['1', '2', 'c', '4']
// 这里传入 [key, value] 即 el
arr.forEach(
  ([key, value]) => {
    console.log(key)
    console.log(value)
  }
)
// for in 对象的 key（索引、属性、原型链上的属性）
// for of 针对 很多类型 除了对象，只遍历 value?

