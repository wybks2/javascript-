// 实例对象的隐式原型 指向构造函数的显示原型
// 构造函数有一个prototype属性，指针指向原型对象，而原型对象的contruct属性则是指向构造函数
// Object的_proto_指向空
// 构造函数的_proto_ 指向Function的prototype
// 构造函数的的prototype对象的 _proto_ 指向Object，Object的_proto_指向空

// 1. instanceof的运算符  用于判断一个构造函数的prototype属性 是否存在于要检测对象的原型链上
// 被检测对象的原型链，_proto_
const arr = [];
console.log(arr instanceof Object);