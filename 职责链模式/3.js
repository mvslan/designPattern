/**
 * 灵活可拆分的职责链节点
 * 设置一个中间执行者，作为请求传递的信号
 */

var order500 = function (orderType, pay, stock) {
  if (orderType === 1 && pay === true) {
    console.log('500元定金预购，得到100元优惠券')
  } else {
    return 'next'
  }
}

var order200 = function (orderType, pay, stock) {
  if (orderType === 2 && pay === true) {
    console.log('200元定金预购，得到50元优惠券')
  } else {
    return 'next'
  }
}

var orderNormal = function (orderType, pay, stock) {
  if (stock > 0) {
    console.log('库存足够，普通购买')
  } else {
    console.log('库存不足，无法购买')
  }
}

// 创建一个新的类，用于提供给用户实现自定义的业务逻辑
var Chain = function (fn) {
  this.fn = fn
  this.nextFn = null
}
Chain.prototype.setNextFn = function (nextFn) {
  //此处可以实现链式调用
  return this.nextFn = nextFn
}
Chain.prototype.request = function () {
  var result = this.fn.apply(this, arguments)
  //不可以用这种写法
  // var result = this.fn(arguments)
  if (result === 'next') {
    return this.nextFn && this.nextFn.request.apply(this.nextFn, arguments)
  }
  return result
}

var chainOrder500 = new Chain(order500)
var chainOrder200 = new Chain(order200)
var chainOrderNormal = new Chain(orderNormal)

chainOrder500.setNextFn(chainOrder200).setNextFn(chainOrderNormal)

chainOrder500.request(2, true, 300)


/**
 * 异步应该怎么写呢？
 */

Chain.prototype.next = function () {
  return this.nextFn && this.nextFn.request.apply(this.nextFn, arguments)
}

var f1 = new Chain(function () {
  console.log('f1')
  return 'next'
})
var f2 = new Chain(function () {
  console.log('f2')
  var self = this
  setTimeout(function () {
    self.next()
  }, 1000);
})
var f3 = new Chain(function () {
  console.log('f3')
})

f1.setNextFn(f2).setNextFn(f3)
f1.request()