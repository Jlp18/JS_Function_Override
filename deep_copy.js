// 实现一个基本的深拷贝

// 1.JSON.stringfy()/JSON.parse()
let obj = {a: 1, b: {x: 3}};
let copy_1 = JSON.parse(JSON.stringify(obj));

// 2.递归拷贝(对象的属性值为对象需要递归拷贝)
function deepClone(obj){
    let copy_2 = obj instanceof Array ? [] : {};
    for(let i in obj){
        if(obj.hasOwnProperty(i)){
            copy_2[i] = typeof obj[i] === 'object' ? deepClone(obj[i]) : obj[i];
        }
    }
    return copy_2;
}