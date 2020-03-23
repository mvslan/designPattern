// 用代理实现代理模式
var CreateDiv = function (html) {
    this.html = html
    this.init()
}
CreateDiv.prototype.init = function () {
    var div = document.createElement('div')
    CreateDiv.innerHtml = this.html
    document.body.appendChild(div)
}

var ProxySingletonCreateDiv = (function () {
    var instance
    return function (html) {
        if (!instance) {
            instance = new CreateDiv(html)
        }
        return instance
    }
})()
var a = ProxySingletonCreateDiv('a')
var b = ProxySingletonCreateDiv('b')
console.log(a === b)