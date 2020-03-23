//策略模式：最初代码实现->2.js
var calculateBonus = function (level, salary) {
    if (level === 'S') {
        return salary * 5
    }
    if (level === 'A') {
        return salary * 3
    }
    if (level === 'B') {
        return salary * 2
    }
}
console.log(calculateBonus('S', 4000))
console.log(calculateBonus('B', 2000))