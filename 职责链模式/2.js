/**
 * 稍作修改，第一级别职责链模式
 * 问题：请求传递的代码和业务逻辑代码耦合严重，违反开放-封闭原则
 */

var order500 = function (orderType, pay, stock) {
  if (orderType === 1 && pay === true) {
    console.log('500元定金预购，得到100元优惠券')
  } else {
    order200(orderType, pay, stock)
  }
}

var order200 = function (orderType, pay, stock) {
  if (orderType === 2 && pay === true) {
    console.log('200元定金预购，得到50元优惠券')
  } else {
    orderNormal(orderType, pay, stock)
  }
}

var orderNormal = function (orderType, pay, stock) {
  if (stock > 0) {
    console.log('库存足够，普通购买')
  } else {
    console.log('库存不足，无法购买')
  }
}

order500(1, true, 300)
order500(2, true, 300)
order500(1, true, 0)
order500(3, false, 0)
