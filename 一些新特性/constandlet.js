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

