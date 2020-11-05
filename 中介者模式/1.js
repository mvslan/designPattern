/**
 * 中介者：解除对象和对象之间的耦合，专门用来分发逻辑事件
 */

//泡泡堂游戏

//这个版本只能有两个玩家，代码也十分拉胯

function Player(name) {
  this.name = name
  this.enemy = null //敌人
}
Player.prototype.win = function () {
  console.log(this.name + ':win')
}
Player.prototype.lose = function () {
  console.log(this.name + ":lose")
}
Player.prototype.die = function () {
  this.lose()
  this.enemy.win()
}

var player1 = new Player('玩家1')
var player2 = new Player('玩家2')

player1.enemy = player2
player2.enemy = player1

player1.die()

