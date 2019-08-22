let imgs = document.querySelectorAll('img');
// 可视区高度
let clientHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
function lazyLoad(){
    // 滚动卷去的高度
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    for(let i = 0; i < imgs.length; i++){
        // 得到图片顶部距离可视区顶部的距离
        let x = clientHeight + scrollTop - imgs[i].offsetTop;
        // 图片在可视区内
        if(x > 0 && x < clientHeight+imgs[i].height){
            imgs[i].src = imgs[i].getAttribute('data');
        }
    }
}
setInterval(lazyLoad, 1000);