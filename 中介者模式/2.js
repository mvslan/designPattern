// 改进，多人运动
// 在人数较少的时候还行，人多了就顶不住了

var players = []

function Player(name, teamColor) {
  this.partners = [] //队友列表
  this.enemies = [] //敌人列表
  this.state = 'live' //玩家状态
  this.name = name //角色名字
  this.teamColor = teamColor //队伍颜色
}

Player.prototype.win = function () {
  console.log('winner:' + this.name)
}

Player.prototype.lose = function () {
  console.log('loser:' + this.name)
}

Player.prototype.die = function () {
  var all_dead = true
  this.state = 'dead'

  for (var i = 0, partner; partner = this.partners[i++];) {
    if (partner.state !== 'dead') {
      all_dead = false
    }
  }
  if (all_dead == true) {
    this.lose()
    for (var i = 0, partner; partner = this.partners[i++];) {
      partner.lose()
    }
    for (var i = 0, enemy; enemy = this.enemies[i++];) {
      enemy.win()
    }
  }
}

var playerFactory = function (name, teamColor) {
  var newPlayer = new Player(name, teamColor)

  for (var i = 0, player; player = players[i++];) {
    if (newPlayer.teamColor === player.teamColor) {
      player.partners.push(newPlayer)
      newPlayer.partners.push(player)
    } else {
      player.enemies.push(newPlayer)
      newPlayer.enemies.push(player)
    }
  }
  players.push(newPlayer)

  return newPlayer
}

var player1 = playerFactory('玩家1', 'red')
var player2 = playerFactory('玩家2', 'red')
var player3 = playerFactory('玩家3', 'red')

var player4 = playerFactory('玩家4', 'blue')
var player5 = playerFactory('玩家5', 'blue')
var player6 = playerFactory('玩家6', 'blue')

player1.die()
player2.die()
player3.die()

