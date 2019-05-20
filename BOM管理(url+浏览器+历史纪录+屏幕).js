// BOM(browser object model) 是什么 有什么用
// HTML5 新增的 BOM API 和新功能
// 单页应用(SPA(single page application))



/*******************************************************************************
 BOM 包含5个东西
 */
location        管理 URL
navigator       管理浏览器
history         管理历史记录
screen          管理屏幕
window          管理浏览器所有的东西




/*******************************************************************************
管理 URL
 */
// location 对象
// 属性 或 方法
hash: ""
host: "s.taobao.com"
hostname: "s.taobao.com"
href: "https://s.taobao.com/search?q=3ds&imgfile=&js=1&stats_click=search_radio_all&ie=utf8"
search: "?q=3ds&imgfile=&js=1&stats_click=search_radio_all&ie=utf8"
origin: "https://s.taobao.com"
pathname: "/search"
port: ""
protocol: "https:"
reload: 函数, 刷新当前页面
replace: 函数, 替换当前页面, 有参数




/*******************************************************************************
查询浏览器信息
 */
// navigator 对象
是用来查询浏览器的信息的
比如当前的操作系统平台, 浏览器型号厂商等等
例如
navigator.userAgent
// "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/54.0.2840.71 Safari/537.36"
navigator.platform
// "MacIntel"




/*******************************************************************************
处理历史纪录
 */
// history 对象
history.length      // 历史列表中的 url 数量
history.back()      // 相当于点击后退按钮
history.forward()   // 相当于点前进
history.go(-2)      // 相当于点击两次后退按钮
// history 状态控制
history.pushState(null, 'title', "/profile")
// 三个参数分别是
//     自定义对象
//     新页面的标题, 但是现在还没有浏览器实现这个功能
//     新页面的地址
var state = {
    page: "settings"
}
history.pushState(state, "settings", "/settings")




/*******************************************************************************
window 对象的状态控制
 */
// window 的 popstate 事件
// 用户点击 前进 后退 按钮的时候, 会触发 window 的 popstate 事件
// 于是可以在这里操作
window.addEventListener("popstate", function(e) {
    var state = e.state;
    // state 就是 pushState 的第一个参数
    console.log('pop state', state)
})
// 还有一个 replaceState 函数, 它的作用和 pushState 一样, 只是不生成一条历史纪录




/*******************************************************************************
其他
 */
只能在相同域名下
可以使用 queryString
主要作用是来做 SPA
