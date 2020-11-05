/**
 * 传纸条的时候，纸条会一级一级往目标传递
 * 职责链模式中只需要知道第一个节点，弱化了发送者和接受者之间的强联系
 */

//demo:实现一个买手机例子，orderType：1（500元定金），2（200元定金），3（无定金）；pay：true（已支付定金），false（未支付定金）
// stock：普通购买库存数量，定金购买可忽略
//这个写法思路很简单，仅仅只能保证功能的实现，连代码复用都没有做到

var order = function (orderType, pay, stock) {
  if (orderType === 1) {
    if (pay === true) {
      console.log('500元定金预购，得到100元优惠券')
    } else {
      if (stock > 0) {
        console.log('库存足够，普通购买')
      } else {
        console.log('库存不足，无法购买')
      }
    }
  } else if (orderType === 2) {
    if (pay === true) {
      console.log('200元定金预购，得到50元优惠券')
    } else {
      if (stock > 0) {
        console.log('库存足够，普通购买')
      } else {
        console.log('库存不足，无法购买')
      }
    }
  } else if (orderType === 3) {
    if (stock > 0) {
      console.log('库存足够，普通购买')
    } else {
      console.log('库存不足，无法购买')
    }
  }
}

order(1, true, 300)



