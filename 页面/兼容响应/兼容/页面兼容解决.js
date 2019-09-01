/*******
来源
*******/
// https://zhuanlan.zhihu.com/p/24413264


/*******
其他推荐
*******/
// https://juejin.im/entry/5847c21aac502e006b0f8031
// https://segmentfault.com/a/1190000004336869
// https://zhuanlan.zhihu.com/p/25216275
// https://aotu.io/notes/2017/11/27/iphonex/index.html
// https://jixianqianduan.com/frontend-css/2016/01/15/responsive-css.html


/*******
汇总
*******/
// https://www.zhihu.com/question/302297294


/*******
处理兼容问题的思路
*******/
// 要不要做
// -产品的角度（产品的受众、受众的浏览器比例、效果优先还是基本功能优先）
// -成本的角度 (有无必要做某件事)
//
// 做到什么程度
// -让哪些浏览器支持哪些效果
//
// 如何做
// -根据兼容需求选择技术框架/库(如jquery 1.x.x)
// -根据兼容需求选择兼容工具：html5shiv、Respond.js、CSS Reset、normalize.css、Modernizr.js、 postcss
// -条件注释、CSS Hack、js 能力检测做一些修补



/*******
渐进增强和优雅降级
*******/


/*******
具体方法
*******/
// IE条件注释
// 注意：只有 IE9以下的浏览器才能识别这种语法，其他浏览器仅仅认为 是普通注释。
// demo
<!--[if IE 6]>
<p>IE6下 这句生效，在其他浏览器下认为是普通注释</p>
<![endif]-->
<!--[if !IE]><!-->
<script>alert("在 IE 下条件语法生效，但script不执行。在非 IE 下上下两句都被当做注释所以当前 script 会执行");</script>
<!--<![endif]-->
<!--[if IE 8]>
<link href="ie8only.css" rel="stylesheet">
<![endif]-->


// CSS hack
.box{
  color: red;
  _color: blue; /*只有ie6认识*/
  *color: pink; /*只有ie67认识*/
  color: yellow\9;  /*ie浏览器都能识别*/
}


// 常见属性的兼容情况
inline-block: >=ie8
min-width/min-height: >=ie7
:before,:after: >=ie8
div:hover: >=ie7
inline-block: >=ie8
background-size: >=ie9
圆角: >= ie9
阴影: >= ie9
动画/渐变: >= ie10


// 一些兼容写法范例
.clearfix:after{
  content: '';
  display: block;
  clear: both;
}
.clearfix{
  *zoom: 1; /* 仅对ie67有效，zoom:1触发hasLayout,起到类似BFC的效果 */
}


.target{
  display: inline-block;
  *display: inline; /*仅对ie67生效*/
  *zoom: 1; /*仅对ie67生效*/
}


<!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
<![endif]-->


<!DOCTYPE html>
<!--[if lt IE 7 ]> <html class="no-js ie6"> <![endif]-->
<!--[if IE 7 ]>    <html class="no-js ie7"> <![endif]-->
<!--[if IE 8 ]>    <html  class="no-js ie8"> <![endif]-->
<!--[if (gte IE 9)|!(IE)]><!--><html  class="no-js"><!--<![endif]-->


/*******
推荐的 兼容相关的工具/库
*******/
// https://github.com/Modernizr/Modernizr
// https://github.com/postcss/postcss
