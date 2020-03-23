// 刚才那个没有一一对应的关系，流程很不清晰，让人怀疑里面有py交易
var salesOffices = {}
salesOffices.clientList = {}
salesOffices.listen = function (key, fn) {
    if (!this.clientList[key]) {
        this.clientList[key] = []
    }
    this.clientList[key].push(fn)
}
salesOffices.trigger = function () {
    var key = Array.prototype.shift.call(arguments)
    fns = this.clientList[key]

    if (!fns || fns.length === 0) {
        return false
    }
    for (var i = 0, fn; fn = fns[i++];) {
        fn.apply(this, arguments)
    }
}
salesOffices.listen('squareMeter88', function (price) {
    console.log('价格：' + price)
})
salesOffices.listen('squareMeter140', function (price) {
    console.log('价格：' + price)
})

salesOffices.trigger('squareMeter88', 1000000)
salesOffices.trigger('squareMeter140', 2000000)
