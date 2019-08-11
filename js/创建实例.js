// 创建实例 new Person() 时发生了什么

function Shape() {
  console.log(this);
  this.x = 999;
  this.y = 123;
}

let newObj = new Shape()
// 回顾下 new 的过程
// 1.新建空对象 obj
// 2.链接到类的原型 obj._proto_ = Shape.prototype
// 3.替换 this, Shape.call(obj)   ,所以 this.x 
//   3.1 本来执行 Shape() 时，即执行 Shape.call(undefinded),this 为 Window，即 x/y 为 Window.x/y
//   3.2 替换后，this 变成 obj -> obj.x/y -> newObj.x/y
//   3.3 一句话，你 new 完且赋给新变量 newObj，你才能用 Shape() 里面的 this.xxx
// 4.返回对象 obj
// 5.obj 赋值给 newObj



