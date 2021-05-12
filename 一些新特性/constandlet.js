// const是常量。一旦赋值不能改变
// let 局部变量，不存在变量提升。
// 暂时性死区，一定在某个作用域内let定义了这个变量，那么这个变量在这个作用域内就被绑定。不受，外界作用域同名变量影响
// 隐蔽的暂时性死区
// function bar(x=y, y=2){
//   console.log(x, y);
// }
// bar();
// 禁止重复申明
// 块级作用域防止变量提升  函数作用域变量不会提升到外部作用域
// 块级作用域使得匿名立即执行函数 不再必要
// 匿名IIFF的作用
var tep=1;
function temp() {
  console.log(tep)
  // 下面的tep 变量提升了
  if(false){
    var tep = 2;
  }
}
temp();
console.log(tep)

// 预编译的知识


// 顶层对象 浏览器顶层对象是window node顶层对象是global
// window与web worker可以用self 指向顶层对象
// 没有一种确切的方法获取所有顶层对象
// 1. new Function( return this );  严格模式下，返回undefined
// 2. 全局环境下，浏览器this返回window。es6模块和node模块返回当前模块
// 3. 非对象中的函数中this，指向全局对象。

