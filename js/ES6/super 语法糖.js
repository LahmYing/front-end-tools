class A {
  constructor() {
    this.f2 = () => console.log('a.f2'); // 原型链上的属性
    this.f3.aa = 'A';                    // 原型链上的属性
  }
  f() { console.log('a.f'); }   //  A 的静态属性
  f1() { console.log('a.f1'); } //  A 的静态属性
  f3() { }                      //  A 的静态属性
}


class B extends A {
  constructor() {
    super()

    super.f = () => console.log('b.super.f');
    this.f(); // 'b.super.f'  // B 不允许修改 A 的静态属性, 会被强制改成 this.f() 
    super.f(); // 'a.f'       // B 访问 A 的静态属性

    this.f2(); // 'a.f2'      // 直接继承 原型链上的属性
  }
}

// super 其实就是 B._proto_ 加上 B.prototype._proto_ = A.prototype
