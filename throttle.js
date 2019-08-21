// 实现一个节流函数 限制函数触发频率
function throttle(action, delay){
    // 利用闭包保存时间
    let prev = Date.now();
    return function(){
        let now = Date.now();
        let context = this;
        let args = arguments;
        if(now - prev >= delay){
            action.apply(context, args);
            prev = Date.now();
        }
    }
}

function fn() {
    console.log('节流');
}

// test
addEventListener('scroll', throttle(fn, 1000));