// 给按钮添加不能的功能，简单js实现

var bindClick = function (button, func) {
    button.onclick = func
}

var MenuBar = {
    refresh: function () {
        console.log('刷新页面')
    }
}
var SubMenu = {
    add: function () {
        console.log('增加子菜单')
    },
    del: function () {
        console.log('删除子菜单')
    }
}

bindClick(button, MenuBar.refresh)
bindClick(button1, MenuBar.add)
bindClick(button2, MenuBar.del)


