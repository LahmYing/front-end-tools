/*
每个函数
都有 prototype 属性，除了 Function.prototype.bind() ，该属性指向原型。

每个对象
都有 __proto__ 属性，指向了创建该对象的构造函数的原型。
其实这个属性指向了[[prototype]]，但是[[prototype]] 是内部属性，我们并不能访问到，所以使用 _proto_ 来访问。

原型链
对象可以通过 __proto__ 来寻找不属于该对象的属性，__proto__ 将对象连接起来组成了原型链
*/


// 例子
function Shape() {
  console.log(this);
  this.x = 999;
  this.y = 123;
}

let newObj = new Shape()

  // 函数的构造函数往上找 
  >> newObj.constructor // function Shape()
  >> Shape.constructor // function Function()

  // 函数的原型的构造函数是函数自己
  >> Shape.prototype.constructor // function Shape()
  >> newObj.__proto__.constructor // function Shape()