Function.prototype.myapply = function(context){

    if(typeof this !== 'function'){
        throw new TypeError('not function');
    }
    context = context || window;
    context.fn = this;

    let result;
    // apply传参数为一个数组
    if(arguments[1]){
        result = context.fn(...arguments[1]);
    } else {
        result = context.fn();
    }
    delete context.fn;
    return result;
}
