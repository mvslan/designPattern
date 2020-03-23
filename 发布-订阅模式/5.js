//全局订阅对象--中介统一管理

var Event = (function () {
    var clientList = {},
        listen,
        trigger,
        remove;

    listen = function (key, fn) {
        if (!clientList[key]) {
            clientList[key] = []
        }
        clientList[key].push(fn)
    }
    trigger = function () {
        var key = Array.prototype.shift.call(arguments)
        fns = clientList[key]

        if (!fns || fns.length === 0) {
            return false
        }
        for (var i = 0, fn; fn = fns[i++];) {
            fn.apply(this, arguments)
        }
    }
    remove = function (key, fn) {
        var fns = clientList[key]
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
    return {
        listen,
        trigger,
        remove
    }
})()

Event.listen('squareMeter88', function (price) {
    console.log('价格：' + price)
})
Event.trigger('squareMeter88', 1000000)
