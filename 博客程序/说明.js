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
│  appBlog.js        后端程序主文件
│  treeView.txt
│  说明.js
│
├─db
│      blog.json     存储 blog 数据的文件(相当于数据库)
│      comment.json
│
├─model
│      blog.js       处理 blog 数据存取的模块
│      comment.js
│
├─route
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
│         blogMain.js
│
└─template
        blog_detail.html    博客主页的 html 文件
        blog_index.html     博客详情页面 html 文件

*/
