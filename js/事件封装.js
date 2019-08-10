/***************** 事件 *******************/
// 绑定事件
// div 监听 eventName 事件，如 'click'
var bindEvent = function (div, eventName, callback) {
    div.addEventListener(eventName, callback)
}

// 给所有 div 绑定某个事件
var bindAll = function (selector, eventName, callback) {
    var divs = document.querySelectorAll(selector)
    for (var i = 0; i < divs.length; i++) {
        var e = divs[i]
        bindEvent(e, eventName, callback)
    }
}

// 事件委托
// 把 click 事件绑定在事先存在的父元素上
// 然后在运行的时候检查被点击的对象(通过 event.target 属性)
// 是否是我们需要的对象, 这个概念就是事件委托


// 事件冒泡
/*
var id3 = document.querySelector('#id3')
id3.addEventListener('click', function(event){
    console.log('click id3', event)
    // 吃掉冒泡事件
    event.cancelBubble = true
})
*/

// 事件捕获
// 事件捕获是 addEventListener 的第三个参数 useCapture
/*
id3.addEventListener('click', function(event){
    console.log('capture click id3', event)
}, true)
*/
