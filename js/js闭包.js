/***************
    闭包
****************/
// 习惯一下这种写法, 在函数定义的外面加上圆括号就可以直接调用
// 前端流行这样写, 所以你必须认识这样的写法
var a = (function() {
    var _foo = 1
    return {
        // 返回的这个 object 中, 有 get 和 set 两个函数
        // 这两个函数都引用了 _foo 变量
        // 所以 _foo 变量不会消失, 但别人也访问不到, 这就是所谓的闭包
        get: function() {
            return _foo
        },
        set: function(v) {
            _foo = v
        }
    }
})()

console.log('闭包 get', a.get())
a.set('gw')
console.log('闭包 get', a.get())
