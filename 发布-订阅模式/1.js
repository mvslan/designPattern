// js中的事件模型就是发布-订阅模式，也叫观察者模式，其实是1对N的问题，p指代对象，这就是个多p问题
var salesOffices = {}

salesOffices.clientList = []
salesOffices.listen = function (fn) {
    this.clientList.push(fn)
}
salesOffices.trigger = function () {
    for (var i = 0, fn; fn = this.clientList[i++];) {
        fn.apply(this, arguments)
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

