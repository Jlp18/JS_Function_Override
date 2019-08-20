function myNew(fun){
    return function(){
        // 创建一个新对象且将其隐式原型指向构造函数原型
        let obj = {
            __proto__ : fun.prototype
        }

        // 执行构造函数
        fun.call(obj, ...arguments);

        // 返回对象
        return obj;
    }
}

function person(name, age){
    this.name = name;
    this.age = age;
}

let obj = myNew(person)('name','age');  // {name: "name", age: "age"}