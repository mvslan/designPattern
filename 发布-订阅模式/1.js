// js中的事件模型就是发布-订阅模式，也叫观察者模式，其实是1对p的问题，p指代对象，这就是个多p问题
var salesOffices = {}  //定义售楼处

salesOffices.clientList = []   //缓存列表，存放订阅者的回调函数
salesOffices.listen = function (fn) {  //增加订阅者
  this.clientList.push(fn)      //订阅者的消息添加进缓存列表
}
salesOffices.trigger = function () {
  for (var i = 0, fn; fn = this.clientList[i++];) {
    fn.apply(this, arguments)    //arguments是发布消息时带上的参数
  }
}
//小明订阅
salesOffices.listen(function (price, squareMeter) {
  console.log('价格：' + price)
  console.log('面积：' + squareMeter)
})
//小红订阅
salesOffices.listen(function (price, squareMeter) {
  console.log('价格：' + price)
  console.log('面积：' + squareMeter)
})

salesOffices.trigger(1000000, 100)
salesOffices.trigger(2000000, 90)

