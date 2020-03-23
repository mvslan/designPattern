// 小明不想奋斗了，小明的阿姨送了小明一栋楼，小明需要取消和售楼小伙的py交易

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

event.remove = function (key, fn) {
    var fns = this.clientList[key]
    if (!fns) {
        return false
    }
    //不传就是撤销所有
    if (!fn) {
        fns && fns.length
    }
    else {
        for (var i = 0, _fn; _fn = fns[i++];) {
            if (_fn = fn) {
                fns.splice(i, 1)
            }
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

salesOffices.listen('squareMeter88', f1 = function (price) {
    console.log('价格：' + price)
})
salesOffices.listen('squareMeter140', function (price) {
    console.log('价格：' + price)
})

// salesOffices.trigger('squareMeter88', 1000000)
salesOffices.remove('squareMeter88', f1)

salesOffices.trigger('squareMeter140', 2000000)

