function fuc(a) {
  a = false
}
// 参数默认值
function fuc(a = false) {

}

// c, 布尔值不要直接作为参数
function fuc1(a, b, c = false) {

}
function fuc1(a, b, { c = false } = {}) {

}

// 对象定义尽量静态化，简洁
const ref = 'ooo'
const obj = {
  ref, // 即 ref: ref
  value: 1,
  addValue(add) {
    return obj.value + add
  }
  // key 为动态也直接放这里就行
}
