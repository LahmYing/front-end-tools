// 自定义 type 吧
// 搜索类型 [product: 商品列表, package: 套餐挂接商品列表, printer_add_products: 打印机挂接菜品]
type SearchType = 'product' | 'package' | 'printer_add_products'

// https://juejin.im/post/5cbb3888f265da039955d9a7
// TS学习笔记（一）：基本类型
let tsBoolean: boolean = false;
let tsNumber: number = 123;
let tsString: string = 'abc';

// 数组
let tsLinstStr: string[] = ['A', 'B', 'C', 'D'];
let tsLintStr2: Array<string> = ['A', 'B', 'C', 'D'];
let tsLinstNum2: number[] = [1, 2, 3, 4];
let tsListMix: any[] = ['A', 1, 'B', 2, { a: 12 }];
let tsListMix2: Array<any> = ['A', 1, 'B', 2, { a: 12 }];

let tsTuple: [string, number] = ['AA', 222]

// 枚举
enum Color { Red, Green, Pink }
let tsEnum: Color = Color.Green;

let tsNull: null = null;
let tsUndefined: undefined = undefined;
let tsObject: object = { a: 'aaaa' };

function tsVoidFun (a: string, b: string): void {
  console.log(a + b)
}

function error (message: string): nerver {
  throw new Error(message);
}

let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;


// void操作符的作用就是先执行表达式，然后返回undefined，无论表达式是什么都是返回undefined值 
// The void operator evaluates the given *expression* and then returns undefine


// https://ts.xcatliu.com/advanced/type-aliases
// 类型别名 type
