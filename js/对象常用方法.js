// ES6
Object.is()

Object.assign()

// 返回指定对象所有自身属性（非继承属性）的描述对象
// 自身属性、静态属性应该是一个意思
Object.getOwnPropertyDescriptor()


// __proto__ 建议换成
Object.setPrototypeOf() // （写操作）
Object.getPrototypeOf() // （读操作）
Object.create()         // （生成操作）


// 遍历 keys（不含继承的）
// Object.keys() 
var obj = { foo: 'bar', baz: 42 };
Object.keys(obj) // ["foo", "baz"]
// 遍历 values（不含继承的）
Object.values(obj)
// 遍历 entries（不含继承的）
Object.entries(obj) // [["foo", "baz"], [ "baz", 42 ]]
