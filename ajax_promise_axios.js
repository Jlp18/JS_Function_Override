// 基于promise写ajax
function ajax_promise(options){
    // 请求地址
    const url = options.url;
    
    // 请求方法
    const method = options.method.toLocaleLowerCase() || 'get';

    // 默认异步为true
    const async = options.async;

    // 请求参数
    const data = options.data;

    // 实例化
    const xhr = new XMLHttpRequest();

    // 请求超时时间
    if(options.timeout && options.timeout > 0){
        xhr.timeout = options.timeout;
    }

    // 返回一个Promise实例
    return new Promise((resolve, reject) => {
        xhr.ontimeout = () => reject && reject('请求超时');
        
        // 监听状态变化回调函数
        xhr.onreadystatechange = () => {
            // 只有readyState为4时候成功
            if(xhr.readyState === 4){
                // status在200-300之间表示请求成功 304资源未变 取缓存
                if(xhr.status >= 200 && xhr.status < 300 || xhr.status === 304){
                    resolve && resolve(xhr.responseText);
                } else {
                    reject && reject();
                }
            }
        }

        // 错误回调函数
        xhr.onerror = (err) => {
            reject && reject(err);
        }

        let paramArr = [];
        let encodeData;
        // 处理请求参数
        if(data instanceof Object){
            for(let key in data){
                // 参数拼接需要通过encodeURIComponent进行编码
                paramArr.push(encodeURIComponent(key)+ '=' + encodeURIComponent(data[key]));
            }
            encodeData = paramArr.join('&');
        }


        // get方法参数拼接
        if(method === 'get'){
            // 查找URL中是否有？以及其位置
            const index = url.indexOf('?');

            if(index === -1){
                url += '?';
            } else if(index !== url.length - 1) {
                url += '&';
            }
            url += encodeData;
        }

        // 初始化
        xhr.open(method, url, async);

        // 发送请求
        if(method === 'get'){
            xhr.send(null);
        } else {
            // post请求方式需要设置请求头
            xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded;charset=UTF-8');
            xhr.send(encodeData);
        }

    })
}