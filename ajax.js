// 简单实现ajax

// 实例化
let xhr = new XMLHttpRequest;

// 初始化
xhr.open(method, url); // method: 请求方式 url: 请求地址
xhr.open(method, url, async); // async: 是否异步
xhr.open(method, url, async, user, password); // user password 可选 默认null

// 发送请求
xhr.send(data);

// 设置状态变化回调函数处理请求结果
xhr.onreadystatechange = () => {
    if(xhr.readyState === 4 && xhr.status === 200){
        console.log(xhr.responseText);
        // 处理返回数据
    }
}