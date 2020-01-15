Array.prototype.myReduce = function(fn, initialValue) {
  // 获取数组
  let initialArr = this;
  if(!Array.isArray(initialArr) || !initialArr.length) {
    throw new TypeError('not array or array is empty');
  } else {
    // 如果没有将initialValue传递给该函数，我们将使用第一个数组项作为initialValue
    let hasInitialValue = initialValue !== undefined;
    let value = hasInitialValue ? initialValue : initialArr[0];

    // 如果有传递 initialValue，则索引从 1 开始，否则从 0 开始
    for(let i = hasInitialValue ? 0 : 1; i < initialArr.length; i++){
      value = fn(value, initialArr[i], i, initialArr);
    }
  }
  return value;
}