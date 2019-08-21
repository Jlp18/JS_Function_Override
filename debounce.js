// 实现一个防抖函数
function debounce(action, delay){
    // 利用闭包保存定时器
    let timer = null;
    return function(){
        let context = this;
        let args = arguments;
        // 在规定时间内再次触发 清除定时器重新计时
        clearTimeout(timer);
        timer = setTimeout(function(){
            action.apply(context, args);
        }, delay);
    }
}

// test 
function fn(){
    console.log('防抖');
}

addEventListener('scroll', debounce(fn, 1000));