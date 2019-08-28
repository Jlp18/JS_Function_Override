// 多种方式实现数组扁平化

const arr = [1,[[2,3],4],5];
// 第1种
const flatArr_1 = arr.join().split(',');
// ***********
//如果数组中的元素是数组，会将里面的数组也调用join()
console.log(arr.join('-')); // 1-2,3,4-5

// 第2种
const flatArr_2 = arr.toString().split(',');

// 第3种 flat()方法
const flatArr_3 = arr.flat(); // 拉平一层数组
const flatArr_4 = arr.flat(2); // 拉平两层数组
const flatArr_5 = arr.flat(Infinity); // 不管数组嵌套多少层，直接拉平至一维数组


// 第4种方法
function flatArr_one(arr){
    var res = [];
    for(var i = 0; i < arr.length; i++){
        if(Array.isArray(arr[i])){
            res = res.concat(flatArr_one(arr[i]));
        }else{
            res.push(arr[i]);
        }
    }
    return res;
}
console.log(flatArr_one(arr));

// 第5种方法
// 使用reduce方法
function flatArr_two(arr){
    return arr.reduce((result, item) => {
        return result.concat(Array.isArray(item) ? flatArr_two(item) : item);
    }, []);
}
console.log(flatArr_two(arr));

// 第6种方法
// 使用spread（...）扩展运算符
const flatArr_6 = [].concat(...arr);

// 循环遍历知道数组中不存在嵌套数组
function flatArr_three(arr){
    while(arr.some(item =>{return Array.isArray(item)})){
        arr = [].concat(...arr);
    }
    return arr;
}
console.log(flatArr_three(arr));