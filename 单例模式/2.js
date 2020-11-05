//透明的单例模式
var CreateDiv = (function () {
  var instance
  var CreateDiv = function (html) {
    if (instance) {
      return instance
    }
    this.html = html
    this.init()
    return instance = this
  }
  CreateDiv.prototype.init = function () {
    //node里面没有document，会报错
    var div = document.createElement('div')
    console.log(this.html)
    CreateDiv.innerHtml = this.html
    document.body.appendChild(div)
  }
  return CreateDiv
})()
var a = new CreateDiv('a')
var a = new CreateDiv('b')

console.log(a)