// 虚拟代理，用的时候才创建
var Flower = function () { }

var xiaoming = {
    sendFlower: function (target) {
        target.receiveFlower()
    }
}
var friend = {
    receiveFlower: function () {
        girl.listenGoodMood(function () {
            var flower = new Flower()
            girl.receiveFlower(flower)
        })
    }
}
var girl = {
    receiveFlower: function (flower) {
        console.log('收到备胎的花：' + flower)
    },
    listenGoodMood: function (fn) {
        setTimeout(() => {
            fn()
        }, 2000)
    }
}
xiaoming.sendFlower(friend)