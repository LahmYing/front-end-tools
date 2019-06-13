概念
// 当协议、子域名、主域名、端口号中任意一个不相同时，都算作不同域。
// 不同域之间相互请求资源，就算作“跨域”

请求跨域了，那么请求到底发出去没有？
// 跨域并不是请求发不出去，请求能发出去，服务端能收到请求并正常返回结果，只是结果被浏览器拦截了。
// 跨域是为了阻止用户读取到另一个域名下的内容，Ajax 可以获取响应，浏览器认为这不安全，所以拦截了响应。
// 但是表单并不会获取新的内容，所以可以发起跨域请求。

// 跨域解决方案
// https://github.com/ljianshu/Blog/issues/55
// 后续再整理
