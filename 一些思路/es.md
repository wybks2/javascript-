1. ES2021  
> String.prototype.replaceAll();
> promise.any(); then 输出最先请求到的， catch 所有请求失败输出；promise.race() then 输出最先请求到的 catch 请求失败输出
> Weakref
> 逻辑赋值运算符
> 数字分隔符

2. ES2020
> 哈希符号表示类的私有变量。
> promise.allSettled 返回一个数组，包含每个Promise的数据。
```
[Object{status:'fulfilled', value:undefined}]
```
> ?? 与|| 差不多。但是不会受0或者''等数据影响 合并空运算符
> ? 可选的链接操作符
> BigInt js可以处理的最大安全数字(2^53-1),BigInt通过把n放在末尾，可以解决。
> 动态引入

3. ES2019
> array.prototype.flat(number) and flatMap()  数组展平
> try catch 语句, catch可以不带参数。 
```
// old:
try {

} catch(err) {

} 
// new :
try {

} catch {

}
```
> Object.prototype.   头尾去空格
> JSON.stringfy() 加强格式化
> JSON 超集
> Function.prototype.toString 的加强  返回源代码的实际文本片段
> Object.fromEntries()  [[key,value]] => {key:value}
> Symbol.description 返回symbol文本 
```
const a = Symbol('123')
a.description() // '123'
```
> Array.prototype.sort 的强化
