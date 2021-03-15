// proxy作为代理，在target之前对其操作进行一些拦截，返回其想要返回的东西。
// 学习proxy之前，建议先把object的部分重新回顾一下，因为本身proxy拦截的就是object上的一些方法。

const handler = {
    // 拦截对象属性的读取
    get: function(target, name, receiver) {
        console.log('get')
        if(name == 'prototype'){
            return Object.prototype
        }
        return 'hello'+name
    },
    // 拦截对象属性的设置，返回一个布尔值
    set: function(target, name, receiver) {
        console.log('set')
        return 34
    },
    // 拦截key in proxy的操作，返回一个布尔值
    has: function(target, name) {
       console.log('has')  
    },
    // delete proxy[key]的操作，返回一个布尔值
    deleteProperty: function(target, key) {
       console.log('delete')
    },
    // 拦截proxy实例，并将其作为函数调用的操作
    apply:function(target, object, args) {
        console.log('apply')
        return args
    },
    // 拦截Proxy实例，并将其作为构造函数调用的操作
    construct: function(target, args) {
        console.log('construct')
        return args;
    }
}

var fproxy = new Proxy(function(x,y){
    return x+y;
}, handler);

console.log(fproxy(1,2)); //调用的apply
console.log(new fproxy(1,2)) //调用construct
fproxy.name = 32;
console.log(fproxy.name, 32 in fproxy);