/*****************
import
*****************/
// 通过import获取a.js文件的内部变量，{}括号内的变量来自于a.js文件export出的变量标识符。
import {
    sex,
    echo,
    echo2
} from "./a.js"

console.log(sex) // boy
echo(sex) // boy
echo2(sex) // boy
// chrome 报错，firefox 正常
// Failed to load module script: The server responded with a non-JavaScript MIME type of "". Strict MIME type checking is enforced for module scripts per HTML spec.
// 原因：本地 js file 不带 MIME type，chrome 会 check 这个东西
// 解决：运行在服务器上即可，或置于 firefox 环境


/*****************
import default
*****************/
// 本质上，a.js文件的export default输出一个叫做default的变量，然后系统允许你为它取任意名字。所以可以为import的模块起任何变量名，且不需要用大括号包含
import any from "./a.js"
import any12 from "./a.js"

console.log(any, any12) // boy,boy

// 同时 import 默认方法(_)和其他接口(each, forEach)
// import _, { each, forEach } from 'lodash';


/*****************
import as
*****************/
import {
    streamV1,
    streamV2,
    streamLatestVersion
} from "./a.js"

console.log(streamV1, streamV2, streamLatestVersion) // boy,boy


/*****************
取到模块内部实时的值
*****************/
import {
    foo
} from "./a.js"

// bar
console.log('foo值==',foo)
// 500ms 后 console.log(foo)
// baz
setTimeout(() => console.log('500ms后的foo值==',foo), 500);


/*****************
import 为只读，不可修改
*****************/
// import 的都是只读的，因为它的本质是输入接口，如 上面的 foo
// 但如果 foo 是一个对象，改写 foo 的属性是允许的，不过不推荐这样做


/*****************
模块整体加载
*****************/
// OverallModuleLoading.js
/*
export function area(radius) {
  return Math.PI * radius * radius;
}

export function circumference(radius) {
  return 2 * Math.PI * radius;
}
*/

// .js 要加上，不然连 firefox 都禁止
import * as allModule from './OverallModuleLoading.js';

console.log('加载整个模块：');
console.log('圆面积：' + allModule.area(4));
console.log('圆周长：' + allModule.circumference(14));
