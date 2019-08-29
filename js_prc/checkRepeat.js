// 数组去重方法
const Arr = [1,2,'1',2,1,2,4,5,3,3,3,5,6,"@","@"];

// 1
// 最基本的数组去重算法
function checkRepeat_1(arr) {
    let tempArr = [arr[0]];
    let repeat = false;
    for(let i = 1; i < arr.length; i++){
        repeat = false;
        for(let j = 0; j < tempArr.length; j++){
            if(arr[i] === tempArr[j]){
                repeat = true;
                break;
            }
        }
        if(!repeat){
            tempArr.push(arr[i]);
        }
    }
    return tempArr;
}

// 2
// 利用对象属性去判断
function checkRepeat_2(arr){
    let temp = {};
    let result = [];
    for(let i in arr){
        if(temp[arr[i]]){
            continue;
        }else{
            result.push(arr[i]);
            temp[arr[i]] = 1;
        }
    }
    return result;
}

// 3
// 先排序，再遍历原始数组与去重数组末项比较(===存在问题)
function checkRepeat_3(arr){
    let tempArr = arr.sort(); // 先排序
    let result = [tempArr[0]];
    for(let i = 1; i < tempArr.length; i++){
        if(tempArr[i] !== result[result.length-1]){
            result.push(tempArr[i]);
        }
    }
    return result;
}

// 4
// 利用下标查询
function checkRepeat_4(arr){
    let tempArr = [arr[0]];
    for(let i = 1; i < arr.length; i++){
        if(tempArr.indexOf(arr[i]) === -1){
            tempArr.push(arr[i]);
        }
    }
    return tempArr;
}

// 5
// ES6 Set
let tempArr = [...new Set(Arr)];
console.log(tempArr);