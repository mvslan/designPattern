//添加一个中介者对象，专门管理玩家

function Player(name, teamColor) {
  this.name = name
  this.teamColor = teamColor
  this.state = 'alive'
}

Player.prototype.win = function () {
  console.log(this.name + ':win')
}
Player.prototype.die = function () {
  this.state = 'dead'
  playerDirectory.receiveMessage('playerDead', this)
}
Player.prototype.lose = function () {
  console.log(this.name + ':lose')
}
Player.prototype.remove = function () {
  console.log(this.name + ':remove')
  playerDirectory.receiveMessage('removePlayer', this)
}
Player.prototype.changeTeam = function (color) {
  playerDirectory.receiveMessage('changeTeam', this, color)
}

//工厂函数，用处很小了已经
var playerFactory = function (name, teamColor) {
  var newPlayer = new Player(name, teamColor)
  playerDirectory.receiveMessage('addPlayer', newPlayer)
  return newPlayer
}

//中介者
var playerDirectory = (function () {
  //精髓就在这里
  var players = {}, //保存所有玩家
    operations = {} //中介者可以执行的操作

  operations.addPlayer = function (newPlayer) {
    var teamColor = newPlayer.teamColor
    players[teamColor] = players[teamColor] || []  //如果是新的队伍，则创建之

    players[teamColor].push(newPlayer)
  }
  operations.removePlayer = function (player) {
    var teamPlayers = players[player.teamColor]
    for (var i = 0; i < teamPlayers.length; i++) {
      if (teamPlayers[i] === player) {
        teamPlayers.splice(i, 1)
      }
    }
  }
  operations.changeTeam = function (player, newTeamColor) {
    operations.removePlayer(player)
    player.teamColor = newTeamColor
    operations.addPlayer(player)
  }
  operations.playerDead = function (player) {
    var teamColor = player.teamColor
    teamPlayers = players[teamColor]

    var all_dead = true
    for (var i = 0, player; player = teamPlayers[i++];) {
      if (player.state !== 'dead') {
        all_dead = false
        break;
      }
    }
    if (all_dead) {
      for (var i = 0, player; player = teamPlayers[i++];) {
        player.lose()
      }
      for (var color in players) {
        if (teamColor !== color) {
          var teamPlayers = players[color]
          for (var j = 0, player; player = teamPlayers[j++];) {
            player.win()
          }
        }
      }
    }
  }

  var receiveMessage = function () {
    var message = Array.prototype.shift.call(arguments)
    operations[message].apply(this, arguments)
  }

  return {
    receiveMessage: receiveMessage
  }
})()

var player1 = playerFactory('玩家1', 'red')
var player2 = playerFactory('玩家2', 'red')
var player3 = playerFactory('玩家3', 'red')

var player4 = playerFactory('玩家4', 'blue')
var player5 = playerFactory('玩家5', 'blue')
var player6 = playerFactory('玩家6', 'blue')

player1.die()
player3.remove()
player2.die()
