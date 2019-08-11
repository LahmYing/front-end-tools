// w3c的事件模型中，会首先捕获直到目标元素，然后再一路往上级冒泡到顶层
// 默认都是冒泡事件

// W3C写法： dom.addEventListener('eventName', fn, false) ，默认是false，可不写
// IE写法： dom.attachEvent('on+eventName', fn) 
// IE < 9：只支持事件冒泡
// IE 9：事件冒泡 + 事件捕获

// 阻止
// event.stopPropagation()
// event.cancelBubble=true;//针对ie