/*
var Singleton = function (name) {
    this.name = name
}
Singleton.instance = null
Singleton.prototype.getName = function () {
    console.log(this.name)
}
Singleton.getInstance = function (name) {
    if (!this.instance) {
        this.instance = new Singleton(name)
    }
    return this.instance

}
var a = Singleton.getInstance('a')
var b = Singleton.getInstance('b')
console.log(a === b)
*/
//做一些修改
var Singleton = function (name) {
  this.name = name
}
Singleton.prototype.getName = function () {
  console.log(this.name)
}
Singleton.getInstance = (function () {
  var instance = null
  return function (name) {
    if (!instance) {
      instance = new Singleton(name)
    }
    return instance
  }
})()

//所谓单例模式，就是只有一个对象实例
var a = Singleton.getInstance('a')
var b = Singleton.getInstance('b')
console.log(a === b)