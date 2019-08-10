// js 词法作用域

// js一般是静态作用域(因为with, eval这两个为动态)

// 比如函数内打印变量 value，查找路线：
//     当前函数定义时的函数体 ⇒ 函数定义书写位置的上文

//eg
let value2 = '词法作用域'

function func1() {
  console.log(value2);
}

function func2() {
  let value2 = 'func2'
  console.log(value2);
}
// 执行函数1
func1() // 词法作用域