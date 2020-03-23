// 代理人，也就是工具人，会有自己的想法，帮小明打助攻
//但是鲜花太贵，girl不知道啥时候心情好，所以要在送的时候才去买->4.js
var Flower = function () { }

var xiaoming = {
    sendFlower: function (target) {
        var flower = new Flower()
        target.receiveFlower(flower)
    }
}
var friend = {
    receiveFlower: function (flower) {
        girl.listenGoodMood(function () {
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