Function.prototype.mybind = function(context) {
    // bind方法返回的不是执行结果，而是返回一个方法
    if(typeof this !== 'function'){
        throw new TypeError('not function');
    }
    context = context || window;
    let _this = this;
    let args = [...arguments].slice(1);
    return function F(){
        // 处理函数使用new的情况
        if(this instanceof F){
            return new _this(...args, ...arguments);
        } else {
            return _this.apply(context, args.concat(...arguments));
        }
    }
}