// prototype

function Father() {
  this.gift = "fire"
  this.race = "human"
} 
Father.prototype.superSkill = "fire of god";
// 我的理解 通过原型链继承 其实还是说不出来 因为子类父类概念混淆了
// 

function Son_proto() {
  this.name = "son of Fathe, proto"
}
Son_proto.prototype = new Father();
// Son_proto的原型 指向父类的实例对象。 父类实例对象的隐式原型 指向父类的显示原型
// 实例对象的隐式原型 => 构造函数的显示原型
// 对原型的理解也不够透彻
// 捋一捋思路
// 构造函数都有原型对象，还有一个构造器constractor。构造器指向原型对象，原型对象指向构造器。[构造器有何用的]
// 

const son = new Son_proto();
console.log(son.race)
