/*
一个非常流行的前端开发框架 jQuery
    早期获得了巨大成功
    现在没那么重要了, 但是用来解决问题也很合适
    现在我们用的 DOM API 很多都是从 jQuery 那里抄来的


a. 选择器
1. 普通选择器
2. find
3. closest, parent

b. dom 操作
1. append, prepend
2. remove
3. empty
4. show, hide, toggle

c. class 操作
1. addClass removeClass
2. toggleClass

d. 属性、特性操作
1. attr, prop, data
2. removeAttr

e. 取值
1. val      相当于 .value
2. text     相当于 .innerText
3. html     相当于 .innerHTML

f. 事件
1. on
2. change

g. 数组方法
1. each
2. map
3. grep


h. ajax 封装
1. contentType, dataType
2. beforeSend, complete
*/


// jquery 实现的 chest 页面搜索功能
var input = '<input class=gua-search>'
$('#id-div-chest-title-container').prepend(input)
$('.gua-search').on('keyup', function(event){
    var search = event.target
    var v = search.value
    searchTitle(v)
    // 在所有的 gua-title 中搜索 v
    // 先隐藏所有的 gua-title(添加 gua-hide class)
    // 再把符合搜索结果的 gua-title 删除 gua-hide class
})

var searchTitle = function(v) {
    console.log(v)
}

searchTitle = function(v) {
    // 先隐藏所有的 gua-title(添加 gua-hide class)
    $('.gua-title').hide()
    $('.gua-title').each(function(){
        var title = $(this)
        if (title.text().toLowerCase().includes(v.toLowerCase())) {
            title.show()
        }
    })
}
