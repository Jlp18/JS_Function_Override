function create(obj){
    function F(){};
    //  原型式继承obj
    F.prototype = obj;
    return new F(); 
}