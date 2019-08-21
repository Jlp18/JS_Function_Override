// rem实现的原理
function rem(){
    let doc = document.documentElement;
    let width = doc.getBoundingClientRect().width;
    // 假设设计稿为宽750 则rem为10px
    let rem = width / 75;
    doc.style.fontSize = rem + 'px';
}