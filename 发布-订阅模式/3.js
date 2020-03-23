// 现在小明怀疑小红还是有py交易，所以想换一个，做一个通用的观察者
var event = {
    clientList: {},
    listen: function (key, fn) {
        if (!this.clientList[key]) {
            this.clientList[key] = []
        }
        this.clientList[key].push(fn)
    },
    trigger: function () {
        var key = Array.prototype.shift.call(arguments)
        fns = this.clientList[key]

        if (!fns || fns.length === 0) {
            return false
        }
        for (var i = 0, fn; fn = fns[i++];) {
            fn.apply(this, arguments)
        }
    }
}

var installEvent = function (obj) {
    for (var key in event) {
        obj[key] = event[key]
    }
}

var salesOffices = {}
installEvent(salesOffices)

salesOffices.listen('squareMeter88', function (price) {
    console.log('价格：' + price)
})
salesOffices.listen('squareMeter140', function (price) {
    console.log('价格：' + price)
})

salesOffices.trigger('squareMeter88', 1000000)
salesOffices.trigger('squareMeter140', 2000000)

