var bindEventItems = function() {
    var selector = '.gua-item'
    bindAll(selector, 'mouseenter', function(event){
        console.log('mouseenter ')
        // 找到自己这个菜单的 gua-menu-content
        var item = event.target
        removeClassAll('gua-highlight')
        if (item.classList.contains('gua-item')) {
            // 加上 gua-highlight class
            item.classList.add('gua-highlight')
        }
    })
}

bindEventItems()
