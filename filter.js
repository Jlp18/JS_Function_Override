Array.prototype.myFilter = function(fn) {
  if(!Array.isArray(this) || !this.length){
    throw new TypeError('not array or array is empty');
  } else {
    let result = [];
    for(let i = 0; i < this.length; i++){
      // 如果条件为真，则将数组元素 push 到 result 中
      if(fn(this[i], i , this)){
        result.push(this[i]);
      }
    }
  }
  return result;
}