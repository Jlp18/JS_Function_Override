Function.prototype.mycall = function (context){

    // 不是函数
    if( typeof this !== 'function'){
        throw new TypeError('not function');
    }
    // 防止上下文为空
    context = context || window;
    context.fn = this;
    // 获取参数
    let args = [...arguments].slice(1);
    // 执行结果
    let result = context.fn(...args);
    // 释放
    delete context.fn;
    return result;
}