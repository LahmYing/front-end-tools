
/***************** 测试套路 *******************/
var ensure = function(condition, message) {
    if (!condition) {
        console.log(message)
    }
}
var testMin = function() {
    ensure(min([1, 2, 3]) == 1, '123 is not 1')
}
