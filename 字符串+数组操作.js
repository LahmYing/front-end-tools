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
// 末尾添加新元素
// a.push('新元素')

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
