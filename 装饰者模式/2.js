//AOP装饰函数

Function.prototype.before = function (beforeFn) {
  var _self = this
  //返回原函数和新函数的’代理‘函数
  return function () {
    //保证this不被劫持
    beforeFn.apply(this, arguments)
    return _self.apply(this, arguments)
  }
}

Function.prototype.after = function (afterFn) {
  var _self = this
  return function () {
    var result = _self.apply(this, arguments)
    afterFn.apply(this, arguments)
    return result
  }
}