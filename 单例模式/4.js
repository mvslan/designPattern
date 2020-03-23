//惰性单例模式，也就是在需要的时候才创建实例对象
Singleton.getInstance = (function () {
    var instance = null
    return function (name) {
        if (!instance) {
            instance = new Singleton(name)
        }
        return instance
    }
})()