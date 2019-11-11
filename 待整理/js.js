// 常用，定义箭头函数,将 return 结果赋给变量
// const a = (params) => params
// let b = a(params)


// window.requestAnimationFrame(callback)
// window.requestAnimationFrame() 告诉浏览器——你希望执行一个动画，
// 并且要求浏览器在下次重绘之前调用 callback 更新动画
// window.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame


// window.location.search
// window.location 只读属性，返回一个 Location  对象，其中包含有关文档当前位置的信息
// 例子#1：导航到一个新页面
// window.location.assign("http://www.mozilla.org"); // or
// window.location = "http://www.mozilla.org"
// 例子#2：强制从服务器重新加载当前页面
// window.location.reload(true)


// let mobile_rule = /(iPhone|iPod|Android|ios|SymbianOS|Windows Phone|iPad)/i // 匹配主流移动机型
// i: ignorCase 忽略大小写 
// m: mutiple 表示多行匹配，什么是多行匹配呢？就是匹配换行符两端的潜在匹配。影响正则中的^$符号
// g: globle 表示该表达式将用来在输入字符串中查找所有可能的匹配，返回的结果可以是多个。如果不加/g最多只会匹配一个


// HTMLDivElement 接口提供了一些特殊属性（它也继承了通常的 HTMLElement 接口）来操作 < div > 元素


// 见到有函数返回 Promise 是为了异步执行？
// 应该说，无论返回什么，函数、值、接口等等，将返回的东西赋给变量，以供调用


// Element.getBoundingClientRect()方法返回元素的大小及其相对于视口的位置


// 返回在 history 栈顶的 任意 值的拷贝。 通过这种方式可以查看 state 值，不必等待 popstate事件发生后再查看
// 值为 null 因为我们还没有修改 history 栈
// console.log(`History.state before pushState: ${history.state}`);
// 现在 push 一些数据到栈里
// history.replaceState({ name: 'Example' }, "pushState example", 'page3.html');
// 现在 state 已经有值了
// console.log(`History.state after pushState: ${history.state}`);


/**
 * 返回嵌入当前window对象的元素(比如 <iframe> 或者 <object>),如果当前window对象已经是顶层窗口,则返回null
 * window.frameElement
 * var frameEl = window.frameElement
 * 
 * <iframe>
 * iframe 元素会创建包含另外一个文档的内联框架（即行内框架）
 * <iframe src="" frameborder="0"></iframe>
 * src：规定在 iframe 中显示的文档的 URL
 * 已经不推荐使用
 * */ 


