// https://github.com/ljianshu/Blog/issues/38

/*
一、前言
*/
// 适配多种设备和多个屏幕


/*
二、视口
*/
// viewport （视口） ==  浏览器中用于呈现网页的区域。
// 视口通常并不等于屏幕大小，特别是可以缩放浏览器窗口的情况下。
// 电脑端的视口宽度等于分辨率，而移动端的视口宽度跟分辨率没有关系,宽度默认值是设备厂家指定的。
// iOS, Android 基本都将这个视口分辨率设置为 980px。

1.约束视口
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
// width=device-width   视口为设备宽度（就是人设置的一个宽度）//不设置的话默认为980px
// initial-scale=1.0    初始化的视口大小是1.0倍
// maximum-scale=1.0    最大的倍数是1.0倍
// user-scalable=0      不允许缩放视口
// 约束后的视口宽度都是在 320~480 之间（手机竖直使用的时候）。
// 这个视口的尺寸，是手机厂商设置的
// 能够保证
//   1)我们的文字比如 16px，在自己的这个视口下清晰、大小刚刚合适。
//   2)我们的网页可以用 px 写字号、写行高。
// 注意：
//   1)约束之后的视口宽度，不是自己的分辨率！！每个手机的分辨率，都要比自己的视口宽度大得多得多！
//   2)前端开发工程师，丝毫不关心手机的分辨率，我们只关心视口




/*
三、图片
*/
我们想让图片能在不同大小的屏幕中自动缩放
img {
 max-width: 100%;
}

为什么用 max-width?
// 保证所有图片最大显示为其自身的 100%（即最大只可以显示为自身那么大）。此时，如果包含图片的元素（比如包含图片的 body 或 div）比图片固有宽度小，图片会缩放占满最大可用空间

为什么不用 width:100%?
// 这条规则会导致它显示得跟它的容器一样宽。在容器比图片宽得多的情况下，图片会被无谓地拉伸。




/*
四、兼容手机浏览器内核
*/
移动端，四个独立的浏览器内核
// 微软的 Trident
// 火狐的 Gecko
// 开源内核 Webkit
// Opera 的 Presto

兼容浏览器内核的前缀：
// 1	-ms-
// 2	-moz-
// 3	-o-
// 4	-webkit-

一般兼容-webkit-即可
// 因为占了绝大部分的市场份额




/*
五、百分比布局也叫作流式布局、弹性盒布局，即 Flex 布局
*/
百分比能够设置的属性是 width、height、padding、margin。
其他属性比如 border、font-size 不能用百分比设置的

如果用百分比写
// width，指的是父元素 width 的百分之多少
// height，那么指的是父元素 height 的百分之多少
// padding，那么指的是父元素 width 的百分之多少，无论是水平的 padding 还是竖直的 padding
// margin，那么指的是父元素 width 的百分之多少，无论是水平的 margin 还是竖直的 margin

用百分比写的 demo
div{
  width:200px;
  height:300px;
  padding:10px;
}
div p{
  width:50%;
  height:50%;
  padding:10%;
}
此时p的真实宽度是多少？
// width = 200px x 50% + 2 x 200px x 10% (左右padding) = 140px
// height = 300px x 50% + 2 x 200px x 10% (上下padding) = 190px
// 此时 p 的真实宽度是 140px*190px




/*
六、媒体查询
*/
// IE6、7、8 不支持媒体查询

1.为什么响应式 Web 设计需要媒体查询
// CSS3 媒体查询可以让我们
// 针对特定的设备能力或条件
// 为网页应用特定的 CSS 样式

2.媒体查询语法
// 基本的样式
body {
    background-color: grey;
 }
 // 为不同视口、不同能力的设备，渐进增加不同的视觉效果和功能
@media screen and (min-width:1200px){
    body{
        background-color: pink;
	}
}
 @media screen and (min-width:700px) and (max-width:1200px){
    body{
	background-color: blue;
	}
}
@media screen and (max-width:700px){
    body{
	background-color: orange;
        }
}




/*
七、rem 响应式布局
*/
rem 响应式布局思想
// 一般不要给元素设置具体的宽度,但是对于一些小图标可以设定具体宽度值
// 高度值可以设置固定值,设计稿有多大,我们就严格写多大
// 所有设置的固定值都用 REM 做单位
//   (首先在 HTML 中设置一个基准值：PX 和 REM 的对应比例,然后在效果图上获取 PX 值,布局的时候转化为 REM 值)
// JS 获取真实屏幕的宽度,让其除以设计稿的宽度,算出比例,把之前的基准值按照比例进行重新的设定,这样项目就可以在移动端自适应了

rem 与 em 有何区别
rem
// 当前页面中元素的 REM 单位的样式值都是针对于 HTML 元素的 font-size 的值进行动态计算的
em
// 表示父元素的字号的倍数。(特例：在 text-indent 属性中，表示文字宽度)

rem 有一点优势就是可以和媒体查询配合，实现响应式布局
demo 见
// https://github.com/ljianshu/Blog/issues/38
