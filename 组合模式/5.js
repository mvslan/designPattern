//添加删除功能。
//需要引用父对象
var Folder = function (name) {
  this.name = name
  this.files = []
}
Folder.prototype.add = function (file) {
  //添加父节点引用
  file.parent = this
  this.files.push(file)
}
Folder.prototype.scan = function () {
  console.log('开始扫描文件夹：' + this.name)
  for (var i = 0, file; file = this.files[i++];) {
    file.scan()
  }
}
Folder.prototype.delete = function () {
  if (this.parent === null) {
    return
  }
  for (var i = 0, files = this.parent.files; file = files[i]; i++) {
    if (file === this) {
      files.splice(i, 1)
    }
  }
}

var File = function (name) {
  this.name = name
  this.parent = null
}
File.prototype.add = function () {
  throw new Error('文件下面不能添加文件')
}
File.prototype.scan = function () {
  console.log('开始扫描文件：' + this.name)
}
File.prototype.delete = function () {
  if (this.parent === null) {
    return
  }
  for (var i = 0, files = this.parent.files; file = files[i]; i++) {
    if (file === this) {
      files.splice(i, 1)
    }
  }
}

var folder = new Folder('学习资料')
var folder1 = new Folder('vue')
var folder2 = new Folder('react')

var file1 = new File('vue api')
var file2 = new File('react api')
var file3 = new File('设计模式')

folder1.add(file1)
folder2.add(file2)
folder.add(folder1)
folder.add(folder2)
folder.add(file3)


folder1.delete()
folder.scan()

