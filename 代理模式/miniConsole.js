console.log('welcome miniConsole.js')
miniConsole = {
    log: function () {
        console.log(Array.prototype.join.call(arguments))
    }
}