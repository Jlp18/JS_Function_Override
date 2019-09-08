// 函数柯里化
function Currying(fn){
    
    // fn参数的个数
    var length = fn.length;

    // 定一个数组存放执行的参数
    var args = [];
    return function(arg){
        // 将执行过的参数放入参数数组中
        args.push(arg);
        // 参数还没有执行完的时候
        if(args.length < length){
            // 调用当前执行函数
            return arguments.callee;
        }else {// 参数执行完之后，调用预定函数执行
            return fn.apply(this, args);
        }
    }
}

function fn(a,b,c){
    return a+b+c;
}

var temp = Currying(fn)(1)(2)(3);
//var temp = Currying(fn);
//console.log(temp(1)(2)(3));


// 经典面试题
/**
 * 实现一个add方法，使计算结果能够满足如下预期：
 * add(1)(2)(3) = 6;
 * add(1, 2, 3)(4) = 10;
 * add(1)(2)(3)(4)(5) = 15;
 */

function add() {
    console.log(arguments);
    // 第一次执行时，定义一个数组专门用来存储所有的参数
    var _args = Array.prototype.slice.call(arguments);

    // 在内部声明一个函数，利用闭包的特性保存_args并收集所有的参数值
    var _adder = function() {
        _args.push(...arguments);
        return _adder;
    };

    // 利用toString隐式转换的特性，当最后执行时隐式转换，并计算最终的值返回
    _adder.toString = function () {
        return _args.reduce(function (a, b) {
            return a + b;
        });
    }
    return _adder;
}
add(1)(2)(3);      
console.log(add(1, 2, 3)(4));
