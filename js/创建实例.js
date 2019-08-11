// 创建实例 new Person() 时发生了什么
function Shape() {
  console.log(this);
  this.x = 999;
  this.y = 123;
}

let newObj = new Shape()
  // new 这个语法糖帮你省下的那些代码
  // 1.新建一个临时的空对象 obj
  // 2.链接到原型 obj._proto_ = Shape.prototype
  // 3.替换 this, Shape.call(obj) 
  //   3.1 本来执行 Shape() 时，即执行 Shape.call(undefinded),this 为 Window，即 x/y 为 Window.x/y
  //   3.2 替换后，this 变成 obj -> obj.x/y -> newObj.x/y
  //   3.3 一句话，你 new 完且赋给新变量 newObj，你才能用 Shape() 里面的 this.xxx
  // 4.返回临时对象 obj
  // 最后我们手动将 obj 赋给 newObj






