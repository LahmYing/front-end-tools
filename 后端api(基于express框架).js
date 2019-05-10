// 这一行是套路, 给 node.js 用的
// 如果没有这一行, 就没办法使用一些 let const 这样的特性
"use strict"


/********************************** 爬虫 start **************************************/
/*
本节课主要介绍 6 个点
- 爬虫的原理(等上课讲解)
- 普通的爬虫(以豆瓣电影为例)
- 需要登录的爬虫(以知乎为例)
- 爬虫的奥秘(等上课讲解)
- 动态内容的爬取(以知乎的动态内容为例)
- 自定义模块的方法和使用方式
*/

// 这一行是套路, 给 node.js 用的
// 如果没有这一行, 就没办法使用一些 let const 这样的特性
"use strict"

const request = require('request')
const cheerio = require('cheerio')
const fs = require('fs')

// 定义一个类来保存电影的信息
const Movie = function() {
    this.name = ''
    this.score = 0
    this.quote = ''
    this.ranking = 0
    this.coverUrl = ''
}


const log = function() {
    console.log.apply(console, arguments)
}


const movieFromDiv = function(div) {
    const movie = new Movie()
    // 使用 cheerio.load 函数来返回一个可以查询的特殊对象
    const e = cheerio.load(div)
    // 然后就可以使用 querySelector 语法来获取信息了
    // .text() 获取文本信息
    movie.name = e('.title').text()
    movie.score = e('.rating_num').text()
    movie.quote = e('.inq').text()

    const pic = e('.pic')
    movie.ranking = pic.find('em').text()
    // 元素的属性用 .attr('属性名') 确定
    movie.coverUrl = pic.find('img').attr('src')

    return movie
}


const saveMovies = function(movies) {
    // 这个函数用来把一个保存了所有电影对象的数组保存到文件中
    const fs = require('fs')
    const path = 'douban.txt'
    // 第二个参数是 null 不用管
    // 第三个参数是 缩进层次
    const s = JSON.stringify(movies, null, 2)
    fs.writeFile(path, s, function(error) {
        if (error !== null) {
            log('*** 写入文件错误', error)
        } else {
            log('--- 保存成功')
        }
    })
}


const downloadCovers = function(movies) {
    for (let i = 0; i < movies.length; i++) {
        const m = movies[i]
        const url = m.coverUrl
        // request('http://abc.com/abc.png').pipe(fs.createWriteStream('abc.png'));
        const path = m.name.split('/')[0] + '.jpg'
        request(url).pipe(fs.createWriteStream(path))

        // request(url, function(error, response, body) {
        //     // 检查请求是否成功, statusCode 200 是成功的代码
        //     if (error === null && response.statusCode == 200) {
        //         const path = m.name.split('/')[0] + '.jpg'
        //         const mode = 'binary'
        //         fs.writeFile(path, body, mode, function(err){
        //             if (err == null) {
        //                 log('写入图片成功', path)
        //             } else {
        //                 log("写入图片失败", path)
        //             }
        //         })
        //     } else {
        //         log("下载图片失败", url)
        //     }
        // })
    }
}

const moviesFromUrl = function(url) {
    // request 从一个 url 下载数据并调用回调函数
    request(url, function(error, response, body) {
        // 回调函数的三个参数分别是  错误, 响应, 响应数据
        // 检查请求是否成功, statusCode 200 是成功的代码
        if (error === null && response.statusCode == 200) {
            // cheerio.load 用字符串作为参数返回一个可以查询的特殊对象
            // body 就是 html 内容
            const e = cheerio.load(body)
            const movies = []
            // 查询对象的查询语法和 DOM API 中的 querySelector 一样
            const movieDivs = e('.item')
            for (let i = 0; i < movieDivs.length; i++) {
                let element = movieDivs[i]
                // 获取 div 的元素并且用 movieFromDiv 解析
                // 然后加入 movies 数组中
                const div = e(element).html()
                const m = movieFromDiv(div)
                movies.push(m)
            }
            // 保存 movies 数组到文件中
            saveMovies(movies)
            downloadCovers(movies)
        } else {
            log('*** ERROR 请求失败 ', error)
        }
    })
}


const __main = function() {
    // 这是主函数
    // 下载网页, 解析出电影信息, 保存到文件
    const url = 'https://movie.douban.com/top250'
    moviesFromUrl(url)
}


// 程序开始的主函数
// __main()
/********************************** 爬虫 end **************************************/


/********************************** 后端 api demo(基于express框架)*** start **************************************/
// express_demo.js 文件

// 引入 express 并且创建一个 express 实例赋值给 app
var express = require('express')
var app = express()
var bodyParser = require('body-parser')
// var jsonParser = bodyParser.urlencoded({ extended: false })
app.use(bodyParser.json())

// var todoList = []

// 配置静态文件目录
app.use(express.static('static'))

var sendHtml = function(path, response) {
    var fs = require('fs')
    var options = {
        encoding: 'utf-8'
    }
    fs.readFile(path, options, function(err, data){
        console.log(`读取的html文件 ${path} 内容是`, data)
        response.send(data)
    })
}
// 用 get 定义一个给用户访问的网址
// request 是浏览器发送的请求
// response 是我们要发给浏览器的响应
app.get('/', function(request, response) {
    // var r = `
    // `
    // fs 是 file system 文件系统的缩写
    // fs 是 node 中处理文件和目录的库
    // var fs = require('fs')
    // var options = {
    //     encoding: 'utf-8'
    // }
    // fs.readFile('index.html', options, function(err, data){
    //     console.log('读取的html文件内容是', data)
    //     response.send(data)
    // })
    var path = 'index.html'
    sendHtml(path, response)
})

var todos = [
    {
        id: 1,
        task: '吃饭',
    }
]

var dataFile = 'todo.txt'
var fs = require('fs')

var loadTodosFromFile = function(callback) {
    fs.readFile(dataFile, 'utf8', function(err, data){
        if (err != null) {
            // 出错了
            console.log('出错了')
            todos = []
            callback()
        } else {
            todos = JSON.parse(data)
            callback()
        }
    })
}
/*
ajax('GET', '/todo/all', '', function(r){
    console.log(r.response)
})
*/
app.get('/todo/all', function(request, response) {
    // var r = JSON.stringify(todos)
    // response.send(r)
    // 从文件中 读取所有的 todos 再返回给浏览器
    loadTodosFromFile(function(){
        var r = JSON.stringify(todos)
        response.send(r)
    })
})

var writeTodosToFile = function() {
    var s = JSON.stringify(todos)
    fs.writeFile(dataFile, s, (err) => {
      if (err) {
          console.log(err)
      } else {
          console.log('保存成功')
      }
    })
}

var todoAdd = function(todo) {
    // {"task":"ii gw"}
    // 给 todo 加上 id 信息
    var t = todos[todos.length-1]
    if (t == undefined) {
        todo.id = 1
    } else {
        todo.id = t.id + 1
    }
    // 把 todo 加入 todos 数组
    todos.push(todo)
    // 把 todos 保存到文件中
    writeTodosToFile()
    return todo
}

/*
ajax('POST', '/todo/add', '{"task":"ii gw"}', function(r){
    console.log(r.response)
})
*/
app.post('/todo/add', function(request, response) {
    // request.body
    var todo = request.body
    // console.log('post todo add', request.body, typeof request.body)
    // console.log(todo.task)
    var t = todoAdd(todo)
    var r = JSON.stringify(t)
    response.send(r)
})

// listen 函数的第一个参数是我们要监听的端口
// 这个端口是要浏览器输入的
// 默认的端口是 80
// 所以如果你监听 80 端口的话，浏览器就不需要输入端口了
// 但是 1024 以下的端口是系统保留端口，需要管理员权限才能使用
var server = app.listen(8081, function () {
  var host = server.address().address
  var port = server.address().port

  console.log("应用实例，访问地址为 http://%s:%s",
    host, port)
})
/********************************** 后端 api demo(基于express框架)*** end **************************************/
