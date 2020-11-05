//缺点：叶节点可能会使用add方法，需要错误处理

var openAcCommand = {
  execute: function () {
    console.log('开空调')
  },
  add: function () {
    throw new Error('叶节点不能添加子对象')
  }
}
openAcCommand.add()