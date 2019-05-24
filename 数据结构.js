// 数据结构与算法分析

/*
数据结构 就是 存储数据的方式
*/

var log = function(){
    console.log.apply(console, arguments)
}

/*************************
队列
*************************/
var Queue = function() {
    // data 是存储元素的数组
    this.data = []
}

// 入队
Queue.prototype.enqueue = function (element) {
    this.data.push(element)
}

// 出队
Queue.prototype.dequeue = function () {
    return this.data.splice(0, 1)
}

// 队列长度
Queue.prototype.length = function () {
    return this.data.length
}

// 清空队列
Queue.prototype.empty = function() {
    this.data = []
}

// 测试
// var q = new Queue()
// q.enqueue(1)
// q.enqueue(2)
// q.enqueue(3)
// log('length', q.length())
// log(q.dequeue())
// q.enqueue(4)
// log(q.dequeue())
// log(q.dequeue())
// log(q.dequeue())




/*************************
Stack 栈
*************************/
// 常见的 3 个操作：push pop top
var Stack = function() {
    this.data = []

// push 添加一个元素
Stack.prototype.push = function(e) {
    this.data.push(e)
}

// pop 删除并返回最新添加的元素
Stack.prototype.pop = function() {
    var index = this.data.length - 1
    return this.data.splice(index, 1)
}

// top 仅返回最新添加的元素
Stack.prototype.top = function() {
    var index = this.data.length - 1
    return this.data[index]
}

// test
/*
var s = new Stack()
s.push('hello')
s.push('world')
log(s.pop())
log(s.pop())

var str = 'hello'
for (var i = 0; i < str.length; i++) {
    s.push(str[i])
}

var str1 = ''
for (var i = 0; i < str.length; i++) {
    str1 += s.pop(str[i])
}
log(str1)
*/




/*************************
链表实现
*************************/
var Node = function(e) {
    this.element = e
    this.next = null
}

// test
/*
var n1 = new Node(1)
var n2 = new Node(2)
var n3 = new Node(3)
n1.next = n2
n2.next = n3

var n = n1
while(n != null) {
    log('遍历链表', n.element)
    n = n.next
}
*/

var LinkedList = function() {
    this.head = new Node()
    this._length = 0
}

// 在链表末尾 增加一个元素
LinkedList.prototype.append = function(e) {
    var node = new Node(e)
    var n = this.head
    while(n.next != null) {
        n = n.next
    }
    n.next = node
    //
    this._length++
}

// 返回一个元素的 index
LinkedList.prototype.indexOf = function(e) {
    var index = -1
    var n = this.head
    var i = 0
    while(n.next != null) {
        if (e === n.element) {
            index = i
            break
        }
        n = n.next
        i++
    }
    return index
}

// 返回链表的长度
LinkedList.prototype.length = function() {
    return this._length
}

LinkedList.prototype.log = function() {
    var n = this.head.next
    log('遍历链表')
    while(n != null) {
        log(' > ', n.element)
        n = n.next
    }
}

// test
/*
var list = new LinkedList()
list.append('hello')
list.append('gua')
list.append('你好')
list.log()
log(list.length())
*/




/*
其他数据结构

hash table  哈希表（散列表）
tree        树
set         集合
graph       图


哈希表就是用 字符串 当下标，也就是 js 中的对象的实现方式
也就是其他语言中的 字典

原理是用字符串 算出一个数字 然后用这个数字当下标存东西
比如 gua 这个字符串 我们用每个字符乘以一个数字最后求余得到下标
从字符串到数字的操作叫做 hash
// hash('gua') = 1
// hash('hs') = 3
【坑1， 坑2， 坑3， 坑4， 坑5， 坑6】
  gua       hs              wh
  xiao      lj
            bl



树一般是用来实现二叉搜索树的，应用范围不多
     6
    / \
   4   8
    \ / \
    57  9

*/
