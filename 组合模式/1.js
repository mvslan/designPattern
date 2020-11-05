var closeDoorCommand = {
  execute: function () {
    console.log('关门')
  }
}

var openPCCommand = {
  execute: function () {
    console.log('开电脑')
  }
}

var openQQCommand = {
  execute: function () {
    console.log('开QQ')
  }
}

var MacroCommand = function () {
  return {
    commandList: [],
    add: function (command) {
      this.commandList.push(command)
    },
    execute: function () {
      for (var i = 0, command; command = this.commandList[i++];) {
        command.execute()
      }
    }
  }
}

var macroCommand = MacroCommand()

//宏命令包含了一组子命令，形成了树形结构
macroCommand.add(closeDoorCommand)
macroCommand.add(openPCCommand)
macroCommand.add(openQQCommand)

//macroCommand：它是一个组合对象，表现为命令，但实际上只是一组真正命令的代理
macroCommand.execute()