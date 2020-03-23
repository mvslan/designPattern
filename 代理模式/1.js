// 例子，小明追妹子->2.js

var Flower = function () { }
var xiaoming = {
    sendFlower: function (target) {
        var flower = new Flower()
        target.receiveFlower(flower)
    }
}
var girl = {
    receiveFlower: function (flower) {
        console.log('收到备胎的鲜花：' + flower)
    }
}
xiaoming.sendFlower(girl)