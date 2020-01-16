// 左边的变量的原型链上是否存在右边变量的原型
function instanceOf(left, right){
    let leftValue = left.__proto__;
    let rightValue = right.prototype;
    while(true){
        if(leftValue === null){
            return false;
        }
        if(leftValue === right){
            return true;
        }
        // fixed
        rightValue = rightValue.__proto__;
    }
}