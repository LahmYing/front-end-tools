
// 浏览器提供了使用 HTTP 协议收发数据的接口，名为 AJAX

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
