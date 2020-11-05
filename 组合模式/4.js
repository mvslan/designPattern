//实例：扫描文件夹

var Folder = function (name) {
  this.name = name
  this.files = []
}
Folder.prototype.add = function (file) {
  this.files.push(file)
}
Folder.prototype.scan = function () {
  console.log('开始扫描文件夹：' + this.name)
  for (var i = 0, file; file = this.files[i++];) {
    file.scan()
  }
}

var File = function (name) {
  this.name = name
}
File.prototype.add = function () {
  throw new Error('文件下面不能添加文件')
}
File.prototype.scan = function () {
  console.log('开始扫描文件：' + this.name)
}


var mainFolder = new Folder('学习资料')
var folder1 = new Folder('vue资料')
var folder2 = new Folder('react资料')

var file1 = new File('vue api')
var file2 = new File('vue 生命周期')
var file3 = new File('react-router')
var file4 = new File('设计模式')


folder1.add(file1)
folder1.add(file2)
folder2.add(file3)

mainFolder.add(folder1)
mainFolder.add(folder2)
mainFolder.add(file4)

mainFolder.scan()