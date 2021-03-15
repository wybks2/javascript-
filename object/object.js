// 1. 简写
// 2. 数学表达式 this['a'+'bc'] = this.abc;
// 3. object.is() 等同于 ===； +不等于-0   NaN 等于 NaN
// 4. 方法的name属性 返回方法名字。bind 返回bound 函数名。get， get.name
// 5. object.assign(target, source, source) 将source可枚举属性复制到target上面，不会复制原型链上的。 
// 

Object.defineProperties(Object, 'is', function(){

})

const assignObj = function(){
  return Object.assign(...arguments);
}

console.log(Object(true),'布尔值')
console.log(Object(2))
console.log(Object('abc'));
console.log(assignObj({},'abc'))
// 布尔值 数字类型 没有可枚举属性 会直接被跳过   undefined null不能转成对象，因为没有原始包装类，也会被跳过
console.log(assignObj('abc'))
console.log(assignObj(true,'abc'))
console.log(assignObj('123',{a:1}))

// console.log(assignObj('123','123')) 两个字符串为什么不行呢
