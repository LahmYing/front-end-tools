// 时间函数
var now = function() {
    var d = new Date()
    var y = d.getFullYear()
    var m = d.getMonth() + 1
    var day = d.getDate()
    var h = d.getHours()
    var mini = d.getMinutes()
    var s = d.getSeconds()

    return `${h}:${mini}:${s}`
    // return `${y}/${m}/${day} ${h}:${mini}:${s}`
    // return nm + '/' + yt + '/' + ri + ' ' + ui + ':' + ff + ':' + mc
}


// log 函数
var log = function() {
    console.log.apply(console, arguments)
}

// 返回 html 元素的原生函数
var e = function(selector) {
    return document.querySelector(selector)
}

// add button 绑定 添加 todo元素 的事件
var addButton = e('#id-button-add')
addButton.addEventListener('click', function(){
    // 获取输入框内容
    var todoInput = e('#id-input-todo')
    var todo = todoInput.value
    // log(todo)

    // 添加到 父div container 中
    insertTodo(todo, false)

    // 添加之后 保存当前 todo 事项（即 todo 的 span 的文字）
    saveTodos()
})


// 添加到 父div container 中
// 完成状态的 flag -- done
var insertTodo = function(todo, done) {
    // 添加到 container 中
    var todoContainer = e('#id-div-container')
    var t = templateTodo(todo, done)

    // 添加元素的原生函数
	// 'beforeend' 意思是放在最后
    todoContainer.insertAdjacentHTML('beforeend', t);
}
var templateTodo = function(todo, done) {
	//完成状态的flag -- status
    var status = 'unDone'
    if(done) {
        status = 'done'
    }

	// todo元素 -- done按钮 delete按钮 文字span
    var t = `
        <div class='todo-cell ${status}'>
            <button class='todo-done'>完成</button>
            <button class='todo-delete'>删除</button>
            <span class='todo-content' contenteditable='true'>${todo} --时间戳:${now()}--</span>
        </div>
    `
	// span标签 contenteditable属性 可编辑
    return t
}

// 事件委托相关概念
// ===
//
// 问题在于, todo 都是运行的时候才添加的元素
// 对于这样的元素, 我们没办法实现绑定事件
// 我们可以把 click 事件绑定在事先存在的父元素上
// 然后在运行的时候检查被点击的对象(通过 event.target 属性)
// 是否是我们需要的对象, 这个概念就是事件委托

// 子div
// 子div -- 完成按钮 & 删除按钮 & 文字span
// 点击 完成按钮 切换 span 的 style class, 点击 删除按钮 remove 自身
// 事件绑定在 空的父div 上，#id-div-container
// 犯错：没细看，将 父div 误认 为 Add按钮div
var container = e('#id-div-container')
container.addEventListener('click', function(event){
  var target = event.target
  log('点击对象 ----', target)

  // 如果是 完成 按钮
  if(target.classList.contains('todo-done')){
    log('完成 按钮')
    // 给 todo_cell div 一个  开关class
    var todoDiv = target.parentElement
    toggleClass(todoDiv, 'done')
    // 改变 todo 事项的完成状态之后，保存 todos
    saveTodos()

    // 如果是 删除 按钮
  } else if(target.classList.contains('todo-delete')){
    log('删除 按钮')
    var todoDiv = target.parentElement
    // 移除 todo_cell div
    todoDiv.remove()
    // 删除之后保存 todo 事项
    saveTodos()
  }

})


// toggleClass 用来开关 元素的 class
var toggleClass = function(element, className) {
    // 检查元素是否拥有某个 classs
    if (element.classList.contains(className)) {
        // 拥有则删除之
        element.classList.remove(className)
    } else {
        // 没有则加上
        element.classList.add(className)
    }
}


// 保存当前 todo 事项（即 todo 的 span 的文字）
// 直接遍历当前 未完成的 span 的 class='todo-content'
// 完成的 span 的 class='todo-content done'，所以不会遍历到完成的
var saveTodos = function(){
  // 1 先选出所有的 content 标签
  // 2 取出 todo
  // 3 添加到一个 数组中
  // 4 保存数组
  log('保存未完成的 todo 事项----')

  // 犯错：这里用 querySelectorAll，而不是 querySelector
  // var todoSpanText = e('.todo-content')
  // 取出所有 todoSpan
  var todoSpan = document.querySelectorAll('.todo-content')
  var todoSpanArray = []

  // 逐个取出 todo 及 flag， 形成json形式即 todoWithFlag ，再放入数组
  for (var i = 0; i < todoSpan.length; i++) {
    var s = todoSpan[i]
    // 看 todo-content span标签的父元素（即 todo-cell div）的 classList 是否有 done，即是否完成
    var done = s.parentElement.classList.contains('done')
    var todoWithFlag = {
        done: done,
        content: s.innerHTML,
    }
    todoSpanArray.push(todoWithFlag)
  }
  // 保存数组
  save(todoSpanArray)
}
// save 函数， 数组 -> string -> localStorage（本地的页面存储）
var save = function(array) {
    var s = JSON.stringify(array)
    localStorage.todos = s
}


// 加载 localStorage 的 todo 事项，并添加到页面中
// 加载并解析
var load = function() {
    var s = localStorage.todos
    return JSON.parse(s)
}
// 添加到页面中
var loadTodos = function() {
    var todos = load()
    log('加载 todo 事项并添加到页面中----', todos)
    // 添加到页面中
    for (var i = 0; i < todos.length; i++) {
        var todo = todos[i]
        insertTodo(todo.content, todo.done)
    }
}

// 刷新页面也能 加载 localStorage 的 todo 事项
loadTodos()
