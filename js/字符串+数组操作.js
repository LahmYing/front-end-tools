/***************** 字符串/数组 操作 *******************/
// 字符串可看作数组的一种进行操作

// 字符串替换
// replaceStr('.1.2.3', '.', '**') // '.1.2.3' → "**1**2**3"
var replaceStr = function(str, before, after) {
    if (typeof(str) == 'string') {
        var afterReplace = str.split(before).join(after)
    } else {
        console.log('ERROR: 要替换的第一个参数不是字符串')
    }

    return afterReplace
}

// 数组
// 首操作 shift unshift 
// 尾操作 pop push

// 排序 sort
// sort 可以接收一个比较函数来实现自定义的排序
var arr = [11, 20, 1, 3, 5, 30];
// 大到小
arr.sort((x, y) => y - x); // >> Array(6) [ 30, 20, 11, 5, 3, 1 ]
// 小到大
arr.sort((x, y) => x - y); // >> Array(6) [ 1, 3, 5, 11, 20, 30 ]

// 翻转 reserve

// 连接 concat
// let arr = [1, 2, 3];
// let newArr = arr.concat([4, 5, 6], [7, 8, 9]);

// splice(2,0,“red”,“green”) 会从当前数组的位置2开始插入字符串"red"和"green"

// 切片
// s.slice(开始下标, 结束下标)
// s.slice(0, 3)
// s.slice(1, 3)
// 省略下标参数意思是取到底
// s.slice(2)

// ... 叫扩展符号
// 作用是把数组解开成单独的元素
var a1 = [1, 2, 3]
var a2 = [...a1, 4]
// 结果是 [1, 2, 3, 4]

// 解包
var [a, b] = [1, 2]
// a b 分别被赋值为 1 2
