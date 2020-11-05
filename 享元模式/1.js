/**
 * 享元模式是一种用于性能优化的模式
 */

//假设现在有一家服装厂，50件男装，50件女装，要找模特各50

var Model = function (sex, underware) {
  this.sex = sex
  this.underware = underware
}

Model.prototype.takePhoto = function () {
  console.log('sex:' + this.sex + 'underware:' + this.underware)
}

for (var i = 0; i < 50; i++) {
  var maleModel = new Model('男', 'underware' + i)
  maleModel.takePhoto()
}
for (var i = 0; i < 50; i++) {
  var femaleModel = new Model('女', 'underware' + i)
  femaleModel.takePhoto()
}

//但是这样很浪费内存空间