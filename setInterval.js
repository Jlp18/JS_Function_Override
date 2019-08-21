// 使用setTimeout模拟setInterval

// 可避免setInterval因执行时间导致的间隔执行时间不一致
setTimeout(function(){
    // do something
    setTimeout(arguments.callee, 1000);
}, 1000);