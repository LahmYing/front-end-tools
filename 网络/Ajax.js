// 查看是否为 Ajax 请求
// chrome -> Network -> XHR 是 Ajax 请求

// AJAX = Asynchronous JavaScript and XML（异步的 JavaScript 和 XML）。
// AJAX 不是新的编程语言，而是一种使用现有标准的新方法。
// AJAX 最大的优点是在不重新加载整个页面的情况下，可以与服务器交换数据并更新部分网页内容。

var ajax = function(method, path, headers, data, reseponseCallback) {
    var r = new XMLHttpRequest()
    // 设置请求方法和请求地址
    r.open(method, path, true)
    // 设置发送的数据的格式
    r.setRequestHeader('Content-Type', 'application/json')
    // 注册响应函数
    r.onreadystatechange = function() {
        if(r.readyState === 4) {
            reseponseCallback(r)
        }
    }
    // 发送请求
    r.send(data)
}
