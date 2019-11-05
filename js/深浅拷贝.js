// 浅拷贝
// 1.Object.clone
// 2.Object.assign
// 3.扩展符号，比如 let b = [...a],就拷贝了 a 给 b


// 深拷贝
// 1.JSON.parse(JSON.stringify(object))
//    stringify 后对象转为字符串，为基本类型，此时再 parse 成新对象时，就不会与老对象共用指针了
// 缺点：
//    会忽略 undefined
//    不能序列化函数
//    不能解决循环引用的对象 


// 2.如果确定没有 循环引用，那就用这个吧
//deep copy深拷贝
var deepCopy = function (obj) {
  const keys = Object.keys(obj)//得到obj里所有的keys

  const newObject = {}

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i]
    if (typeof obj[key] === 'object') {
      newObject[key] = deepCopy(obj[key]) // 此处递归
    } else {
      newObject[key] = obj[key]
    }
  }
  return newObject
}


// 3.最通用的，但对性能有影响，用
// lodash 的 _.cloneDeep(value) 函数


// 4.如果不想引入 lodash 库，那就用下面这个吧，
// 保持引用关系
function cloneForce(x) {
  // =============
  const uniqueList = []; // 用来去重
  // =============

  let root = {};

  // 循环数组
  const loopList = [
    {
      parent: root,
      key: undefined,
      data: x,
    }
  ];

  while (loopList.length) {
    // 深度优先
    const node = loopList.pop();
    const parent = node.parent;
    const key = node.key;
    const data = node.data;

    // 初始化赋值目标，key为undefined则拷贝到父元素，否则拷贝到子元素
    let res = parent;
    if (typeof key !== 'undefined') {
      res = parent[key] = {};
    }

    // =============
    // 数据已经存在
    let uniqueData = find(uniqueList, data);
    if (uniqueData) {
      parent[key] = uniqueData.target;
      continue; // 中断本次循环
    }

    // 数据不存在
    // 保存源数据，在拷贝数据中对应的引用
    uniqueList.push({
      source: data,
      target: res,
    });
    // =============

    for (let k in data) {
      if (data.hasOwnProperty(k)) {
        if (typeof data[k] === 'object') {
          // 下一次循环
          loopList.push({
            parent: res,
            key: k,
            data: data[k],
          });
        } else {
          res[k] = data[k];
        }
      }
    }
  }

  return root;
}

function find(arr, item) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].source === item) {
      return arr[i];
    }
  }

  return null;
}

