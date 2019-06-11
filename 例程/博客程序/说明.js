/*
使用下面的功能实现博客程序
node
express
ajax

所需库
body-parser cookie-parser express multer

运行
$node appBlog.js


目录结构
│  appBlog.js-- 运行服务的主文件
│  说明.js
│
├─db-- 数据库
│      blog.json
│      comment.json
│
├─model-- 处理 blog 数据存取的模块
│      blog.js
│      comment.js
│
├─route-- 前端路由 + 对应的后台 API
│      blog.js
│      comment.js
│      index.js
│
├─static
│  ├─css
│  │      blog.css
│  │
│  ├─images
│  │      doge.gif
│  │
│  └─js
│         blogMain.js-- 被博客主页 html 所调用
│
└─template
        blog_detail.html--  博客详情页面 html 文件
        blog_index.html--  博客主页的 html 文件

*/
