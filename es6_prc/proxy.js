var person = {
    name: 'San Zhang'
}
/**
 * 测试所有拦截属性
 */
var person_proxy = new Proxy(person, {
    get: function(target, property, receiver) {
        if(property in target) {
            return target[property]
            // 也可以写成
            // return Reflect.get(target, property, receiver)
        } else {
            throw new ReferenceError("Property \"" + property + "\" does not exist." )
        }
    },
    set: function(target, property, value, receiver) {
        // 在这里可以做一些校验规则
        target[property] = value
    },
    // apply: function(target, context, args) {}
    /*
    * has方法拦截hasProperty操作，而不是hasOwnProperty
    */
    has: function(target, property, receiver) {
        // 在这里可以做一下规则校验
        return property in target
    },
    // construct: function(target, args) {}
    /*
    * deleteProperty方法拦截delete操作，如果这个方法抛出错误或者返回false，当前属性就无法被delete方法删除
    */
    deleteProperty: function(target, property) {
        if (property[0] === '_') {
            throw new Error(`Invalid attempt to delete private "${property}" property`);
        }
        return true
    },
    /*
    * defineProperty方法拦截Object.defineProperty操作
    */
    defineProperty: function(target, property) {
        // 返回false，导致增加新属性会抛出错误
        return false
    },
    /**
     * getOwnPropertyDescripter方法拦截Object.getOwnPropertyDescriptor
     * @param {*} target 
     * @param {*} property 
     */
    getOwnPropertyDescriptor: function(target, property) {
         
    },
    /**
     * getPrototypeOf方法拦截以下操作：
     * Object.getPrototypeOf()
     * Object.prototype.__proto__
     * Object.prototype.isPrototypeOf()
     * Object.getPrototypeOf()
     * Reflect.getPrototypeOf()
     * instanceOf 运算符
     */
    getPrototypeOf: function(target, property) {},
    /**
     * isExtensible方法拦截Object.isExtensible操作
     */
    isExtensible: function(targt) {},
    /**
     * ownKeys方法拦截Object.keys()操作 
     */
    ownKeys: function(target) {},
    /**
     * preventExtensions方法拦截Object.preventExtensions()。该方法必须返回一个布尔值。
     * 这个方法有一个限制，只有当Object.isExtensible(proxy)为false（即不可扩展）时，proxy.preventExtensions才能返回true，否则会报错
     */
    preventExtensions: function(target) {},
    /**
     * setPrototypeOf方法主要用来拦截Object.setPrototypeOf方法
     */
    setPrototypeOf: function(target, proto) {}
})

/**
 * Proxy.revocable() 返回一个可以取消的Proxy实例
 */
let {proxy, revoke} = Proxy.revocable(person, {
    /**handler */
})

console.log(person_proxy.name)
// console.log(person_proxy.age)

var targetFunc = function() {
    return "i am the target"
}
var function_proxy = new Proxy(targetFunc, {
    /**
     * apply方法用来拦截函数的调用、call和apply方法
     * @param {*} target 目标对象
     * @param {*} context 目标对象的上下文对象(this)
     * @param {*} args 目标对象的参数数组
     */
    apply: function(target, context, args) {
        // return "i am the proxy"
        return Reflect.apply(target, context, args)
        // return target.apply(context, args)
    },
    /**
     * construct 方法拦截new方法
     * @param {*} target 目标对象 
     * @param {*} args 参数    
     */
    construct: function(target, args) {
        // 必须返回一个对象，否则会报错
        return new target(...args)
    }
})
console.log(function_proxy())
console.log(function_proxy.call(null))
console.log(function_proxy.apply(null))

/**
 * 拦截方法的继承
 */
var extends_proxy = Object.create(person_proxy)
console.log(extends_proxy)
console.log(extends_proxy.name)

/**
 * 利用get拦截，实现一个生成随机数的函数
 */
var func_proxy = new Proxy({}, {
    get: function(target, property, receiver) {
        if(property === 'generateNum') {
            return function(min = 0, max = 100) {
                return parseInt(Math.random() * (max - min + 1) + min, 10)
            }
        } else {
            Reflect.get(target, property, receiver)
        }
    }
})
console.log(func_proxy.generateNum(1, 10))
