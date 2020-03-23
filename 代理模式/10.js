var test = function () {
    var i = 0;
    return function () {
        console.log(i++)
    }
}
var a = test()
var b = test()
a()
b()
a()
b()
a()
b()