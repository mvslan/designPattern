/**
 * 正题
 * 组合模式就是组合了一堆命令，可以统一调用，而忽略单个命令
 */

//更强大的宏命令--只要有execute，你就是他的一员，进行深度遍历

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

var openAcCommand = {
  execute: function () {
    console.log('开空调')
  }
}

var openTvCommand = {
  execute: function () {
    console.log('开电视')
  }
}
var openSoundCommand = {
  execute: function () {
    console.log('开音响')
  }
}

var macroCommand1 = MacroCommand()
macroCommand1.add(openTvCommand)
macroCommand1.add(openSoundCommand)


var closeDoorCommand = {
  execute: function () {
    console.log('关门')
  }
}
var openPcCommand = {
  execute: function () {
    console.log('开电脑')
  }
}
var openQQCommand = {
  execute: function () {
    console.log('开QQ')
  }
}
var macroCommand2 = MacroCommand()
macroCommand2.add(closeDoorCommand)
macroCommand2.add(openPcCommand)
macroCommand2.add(openQQCommand)

var macroCommand = MacroCommand()
macroCommand.add(openAcCommand)
macroCommand.add(macroCommand1)
macroCommand.add(macroCommand2)

macroCommand.execute()


