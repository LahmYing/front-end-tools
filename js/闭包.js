/***************
    闭包
****************/
var obj = function () {
    var a = '';
    return {
        set: function (val) {
            a = val;
        },
        get: function () {
            return a;
        }
    }
};

var b = obj();
// obj() 赋值给 b，已执行完，理论上 obj() 内的东西都应该被回收掉
b.set('new val');
// 但 b 具有set和get方法，保持着对 obj() 内 a 的引用，所以 obj() 执行过程中产生的a就不会销毁
b.get();
// 直到b先被回收，这个a才会回收
