// HTML5 新增特性
// 移动页面开发




/*
HTML5 新内容主要是以下几点
 */
1.语义化标签如 article、footer、header、nav、section
2.视频和音频标签 video 和 audio
// 3.本地离线存储 localStorage 和 sessionStorage
4.新增表单特性如新控件 calendar email color 等
5.用于绘图的 canvas 标签(用于游戏等)
6.用于高性能图形的 WebGL(用于游戏等, 这个是专用领域的知识, 我们不会直接接触)




/*
 HTML5 语义化
 */
完整的 html5 语义化标签是这样的
/*
<!DOCTYPE html>
<html>
    <head>
        <title>标题</title>
    </head>
    <body>
        <header></header>
        <nav>导航</nav>
        <article>
            <section>区块</section>
        </article>
        <aside>侧栏</aside>
        <footer>页脚</footer>
    </body>
</html>
*/



/*
视频和音频标签
 */
以前的话只能依赖 flash, 现在有 video 和 audio

// 视频标签
带控制器的视频标签, 不同浏览器有不同的文件格式要求
所以用 2 个 source 标签指定不同的视频格式
/*
<video width="300" height="200" controls="controls">
    <source src="movie.mp4">
    <source src="movie.ogv">
</video>
*/

// 音频标签
带控制器的音频标签, 不同浏览器有不同的文件格式要求
所以用 2 个 source 标签指定不同的音频格式
/*
<audio id='id-audio-player' controls="controls">
  <source src="audio.ogg">
  <source src="audio.mp3">
</audio>
*/

// audio 基本操作如下
var a = document.querySelector('#id-audio-player')
a.play()
a.pause()
a.autoplay
a.src
a.volume
a.duration
a.currentTime

// 官方文档如下(文档永远是这样的)
https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API





/*
新增表单特性如控件 calendar email color 等
*/
 <input type='calendar'>

// boolean类型 属性如 checked 只要写了属性就是 true
// <input type="checkbox">
// <input type="checkbox" checked>
// <input type="checkbox" checked="checked">
// <input type="checkbox" checked="">
// <input type="checkbox" checked="false">



/*
绘图
*/
用于绘图的 canvas 标签(用于游戏等)
canvas 标签提供一块画布, 可以访问画布中的像素点
主要用途是游戏或者是高级复杂的图形效果
例如 particles.js phaser.js 这些库, 例子如下
https://phaser.io/examples/v2/weapon/fire-rate



/*
移动网页
 */
手机网页和电脑网页的技术是一样的
区别仅在屏幕尺寸和交互方式
下面只列出手机页面开发中重要的点



// 1 设置 viewport
viewport 是 html 的父元素
在手机上需要用下面的语句设置它的尺寸
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">

属性解释
width=device-width      宽度等于设备宽度
height=device-height    高度等于设备高度
initial-scale           初始缩放比例
minimum-scale           允许用户缩放的最小比例
maximum-scale           允许用户缩放的最大比例
user-scalable           是否允许用户缩放



// 2 调试页面
可以用 chrome 的开发工具调试手机页面
但是由于浏览器兼容性问题, 最终的外观
得用手机真机来检验
标签/css 的兼容性问题有很多网站可以查询
caniuse.com


// 3 媒体查询
媒体查询实际上是用来做响应式设计的
响应式设计就是一套 CSS 根据当前的分辨率选择不同的样式
现在已经没有前几年那么热门了, 不过我们还是过一遍

媒体查询主要用来:
- 检测媒体的类型, 比如 screen, tv等
- 检测布局视口的特性, 比如视口的宽高分辨率等

用法
@media all and (min-width: 200px) and (max-width: 300px){
    body {
        background: red;
    }
}
上面代码中, all 是媒体类型, 代表任何设备
and 是逻辑操作
意思是, 对于任何设备, 在宽度在 200-300 的范围内应用这个样式
