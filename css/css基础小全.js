// CSS 小全


/*********************** CSS 的使用 ***********************/
    // 内联(inline style attribute)
    <h1 style='background:red;'>内联</h1>

    // <head> 标签内的 <style> 标签
    <head>
        <meta charset="utf-8">
        <title>fe 16</title>
        <style>
            .c {
                transform: translate(20px, 40px);
            }
        </style>
    </head>


    // <link> 标签中的外联
    <link rel="stylesheet" href="fe6.css">

/*********************** 三种主要的选择器 ***********************/
    <span class="c-class" id='c-id'>c</div>
    // 元素选择器
    span {
    }

    // class 选择器
    .c-class {
    }

    // id 选择器
    #c-id {
    }


/*********************** 优先级 ***********************/
// 样式优先级(从高到低)
    !important
    内联样式
    <style> 中的样式
    link 中的样式

// 选择器优先级(从高到低)
    !important
    内联样式
    id 选择器
    class 选择器
    元素选择器

/*********************** display 属性 ***********************/
    // block
    block 占一行

    // inline
    inline 只占 content 的尺寸

    // inline-block
    最常用
    inline-block 对外表现为 inline，所以可以和别的 inline 放在一行
    对内表现为 block，所以可以设置自身的宽高


/*********************** 盒模型 ***********************/
// inline 元素没有盒模型


/*********************** 定位 ***********************/
// position 属性用于元素定位
    static
    relative
    absolute
    fixed

非 static 元素可以用 top left bottom right 属性来设置坐标
非 static 元素可以用 z-index 属性来设置显示层次

relative 是相对定位

absolute 完全绝对定位, 忽略其他所有东西
    往上浮动到 非 static 的元素

fixed 基于 window 的绝对定位, 不随页面滚动改变


/*********************** overflow 属性 ***********************/
    visible 默认
    auto 需要的时候加滚动条
    hidden 隐藏多余元素
    scroll 就算用不着也会强制加滚动条



/*********************** 盒模型相关的 CSS ***********************/
// 盒模型相关的 CSS

// 建议
// 1.简写
// 2.html 上操作再 copy
// 3.或 css 生成网站上生成

// 简写示例
border: 3px red solid;
background: #233 url(bg.png) no-repeat;


/*********************** 居中写法 ***********************/
block 元素居中
margin: 0 auto;

inline inline-block 元素居中
text-align: center;



text-decoration:
    underline
    overline
    line-through
    blink(这个值已经废弃了)



margin 合并
