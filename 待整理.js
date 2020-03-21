/**
 * @/typings/vue-shim.d.ts  声明，比如可以声明 vue 文件（ts 本身不识别 vue 文件）
 */


/**
 * 2019.9.27 周五
 * 
 * <div class="btn confirm pure-u-1-1" v-clipboard="cur_href" @success="copySuccess">一键复制链接</div>
 * v-clipboard 用于复制的插件
 * vue 插件：https://github.com/vuejs/awesome-vue
 * 
 */


/**
 * 2019.9.29 周日
 * 
 * 有时牵扯出较复杂的问题，可以在前面的步骤用其他思路解决问题，绕过这种牵扯
 * 
 * 
 * 目前是 hybrid 方式开发 App，适用于原生交互不复杂的业务，目前趋势是 RN 和 Flutter
 * 无论 hybrid 开发还是准备上手的 RN，App 系统的原生事件是一致的，只是写法不同罢了
 * 
 * 
 * 调用原生接口
 * 借用 DsBrige ，JSBrige 等包
 * https://blog.csdn.net/weixin_34279184/article/details/93166384
 * DSBridge：
 * js接受原生的传值，直接通过dsBridge.register()方法接受
 * js传值给原生，js通过dsBridge.call()方法传值，简单模拟了点击事件来传递
 * JSBrige
 * 见桌面图
 * 
 * 
 * 注册全局指令 
 * v-xxx 的形式
 * Vue.directive 见 /Users/administartor/Desktop/my-project/mall.m/src/_directives/
 * 
 * 
 * Node.contains()返回的是一个布尔值，来表示传入的节点是否为该节点的后代节点
 * 
 * 
 */
  

/**
 * 2019.9.30 周一
 * 
 * vue h5 混合应用
 * 点单后台项目：
 * 1.记录细节（但要更重原理）
 * 2.打包流程
 * 3.最佳实践 https://github.com/mcuking/mobile-web-best-practice
 * 
 * <div :class="component_class">
 * get component_class () {
    return [
      'badge',
      {
        [`theme-${this.theme}`]: this.theme
      }
    ]
  }
  动态 class 返回数组的[1]项是个对象，后面怎么调用？逻辑的业务意义先不管，先专注于纯逻辑意义

  组件绑定事件 @touchmove.native.stop.passive
  修饰符：
  .stop 阻止事件继续传播
  .prevent 阻止事件默认要做的动作（并不阻止传播），
  比如 <!-- 提交事件不再重载页面 -->   <form v-on:submit.prevent="onSubmit"></form>
  .stop.prevent 修饰符可以串联
  .capture 捕获模式,即内部元素触发的事件先在此处理，然后才交由内部元素进行处理
  .self 只当在 event.target 是当前元素自身时触发处理函数, 即事件不是从内部元素触发的
  .once 不像其它只能对原生的 DOM 事件起作用的修饰符，.once 修饰符还能被用到自定义的组件事件上
  .passive 设置为true时，表示 listener 永远不会调用 preventDefault(). 
  如果 listener 仍然调用了这个函数，客户端将会忽略它并抛出一个控制台警告
  <div v-on:scroll.passive="onScroll">...</div>  滚动事件的默认行为 (即滚动行为) 将会立即触发,而不会等待 `onScroll` 完成

  emit 逐层向上传递事件

  $t('action.confirm_checked', [checked.length]) 多语言带参数

  import CheckList, { CheckListItem } from '../form/CheckList.vue'
  导入组件本身，导入组件中的某个 export 接口之类

  之前遇到的 css 的 .pure 原来是 npm 包来的

  export const enum AUTO_PRINTING {
  ON = '1',
  OFF = '0'
}
 可枚举的常量 
 枚举的 item 会有默认枚举值，如下：
 enum Days {Sun, Mon, Tue, Wed, Thu, Fri, Sat};
 console.log(Days["Sun"] === 0); // true
 console.log(Days["Mon"] === 1); // true
 console.log(Days[0] === "Sun"); // true
 console.log(Days[1] === "Mon"); // true

 将与原生交互的方法定义为 Vue 插件来使用
 export default {
  install (Vue) {
    Vue.prototype.$navigator = {
      pop () {
        bridge.call('navigator.pop', { })
    }
  }
}

  将JavaScript对象转换为querystring查询字符串，如 { method: 'get', state: '200' } 转为 ?method=get&state=200
  /Users/administartor/Desktop/my-project/menu.m.admin/src/lib/index.ts 的 queryStringify

  encodeURIComponent(str)  // str: URI 的组成部分
  encodeURIComponent 转义除了字母、数字、(、)、.、!、~、*、'、-和_之外的所有字符
  为什么要对 uri 编码？https://www.cnblogs.com/jerrysion/p/5522673.html

  URI和URL之间的区别
  URI和URL都定义了资源是什么，但URL还定义了该如何访问资源。
  URL是一种具体的URI，它是URI的一个子集，它不仅唯一标识资源，而且还提供了定位该资源的信息。
  URI 是一种语义上的抽象概念，可以是绝对的，也可以是相对的，而URL则必须提供足够的信息来定位，是绝对的


  */


  /****************** 2019.10.10 周四 *********************/
  // 自定义的路由参数，刷新路由后是会丢失的哦，不推荐用于持久化的
  // 即便要用，也该用路由的 query 这个？参数，但目前也不常用这个
  // this.$route.params

  // 改 bug 尽量增量修改

  // Vue-Router 的路由动作的范围，是在本域名内。如要跳转其他 url，需用 window.location.href 这种

  // 跨域
  // 目前遇到的项目如 mall.m 和 menu.m.admin，我都只需请求同域名
  // 如我访问 http://localhost:60030/info/ali-pay?merchant_id=82 和 http://test-mall.wantu.cn/info/ali-pay?merchant_id=82
  // 呈现的就是响应的 JSON 数据。响应头有 server	nginx/1.12.2

  // 状态码

  // userAgent 与 url 加上 ‘ua?=ios’？
  // 使用
// if (this.$route.query && this.$route.query.ua) {
//   if (this.$route.query.ua === 'android') {
//     this.show_browser = 'android';
//   } else if (this.$route.query.ua === 'ios') {
//     this.show_browser = 'ios';
//   }
// }


/****************** 2019.10.11 周五 *********************/
// config/index.js 可看到前端数据来源的域名（包括本地运行时）


/****************** 2019.10.12 周六 *********************/
/**
 * 模板引擎时代：
 * 模板 + data = html
 */
const compiler = lodash.template("<h1><%= title %></h1>")
// 编译器 = 模板引擎(模板)
const divInnerHtml = compiler({ title: 'My Component' })
// 编译器(data)，编译 模板＋data 成功，然后将 divInnerHtml 赋给某个 div 即可

/**
 * VNode 时代即 虚拟DOM时代：
 *    模板 + data = VNode
 *    component 的产出是 VNode
 * VNode 的好处：
 *    分层设计，你可以理解为真实 DOM 的一套映射
 *    不仅能渲染到浏览器，还能渲染到其他平台
 *    还能实现 SSR
 */
// 借助 snabbdom 的 API:h 生成 VNode
const myComponent = (data) => {
  return h('h1', data)
}
// VNode 渲染成 真实 DOM
// 借助 snabbdom 的 API:patch
const prevVnode = myComponent({ title: 'prev' })
const someDiv = document.querySelector('#app')
patch(someDiv, prevVnode) // 虚拟DOM prevVnode 渲染到真实DOM #app 上
// data 改变时 diff 前后 VNode 即可
patch(prevVnode, nextVnode)


