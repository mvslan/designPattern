//优化，只需要一个模特就可以

var Model = function (sex) {
  this.sex = sex
}
Model.prototype.takePhoto = function () {
  console.log('sex:' + this.sex + 'underware:' + this.underware)
}

var maleModel = new Model('男')
var femaleModel = new Model('女')

for (var i = 0; i < 50; i++) {
  maleModel.underware = 'underware' + i
  maleModel.takePhoto()
}

for (var i = 0; i < 50; i++) {
  femaleModel.underware = 'underware' + i
  femaleModel.takePhoto()
}
//效果一样，感觉好多了
