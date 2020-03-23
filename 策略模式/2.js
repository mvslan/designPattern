// js版本的策略模式->1.html
var strategies = {
    'S': function (salary) {
        return salary * 5
    },
    'A': function (salary) {
        return salary * 3
    },
    'B': function (salary) {
        return salary * 2
    },
}
var calculateBonus = function (level, salary) {
    return strategies[level](salary)
}
console.log(calculateBonus('S', 4000))
console.log(calculateBonus('B', 2000))