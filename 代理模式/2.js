// 小明摸不准妹子的脉，找了个公共朋友做中间人，也就是代理人
//  当然，现在毫无用处->3.js

var Flower = function () { }

var xiaoming = {
    sendFlower: function (target) {
        var flower = new Flower()
        target.receiveFlower(flower)
    }
}

var friend = {
    receiveFlower: function (flower) {
        girl.receiveFlower(flower)
    }
}

var girl = {
    receiveFlower: function (flower) {
        console.log('收到备胎的花：' + flower)
    }
}

xiaoming.sendFlower(friend)