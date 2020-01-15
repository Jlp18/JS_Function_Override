Array.prototype.myMap = function(fn) {
  if(!Array.isArray(this) || !this.length) {
    throw new TypeError('not array or array is empty');
  } else {
    let result = [];
    for(let i = 0; i < this.length; i++) {
      result.push(fn(this[i], i, this));
    }
  }
  return result;
}