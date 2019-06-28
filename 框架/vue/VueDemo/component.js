Vue.component('alert-box', {
  template: `
    <div class="demo-alert-box">
      <slot></slot>
    </div>
  `
})
var app28 = new Vue({
  el: '#app-28',
  data: {}
})


Vue.component('base-input', {
  // 切换 inheritAttrs 可看到 组件是否继承特性的 效果
  inheritAttrs: false,
  props: ['label', 'value'],
  template: `
    <label>
      {{ label }}
      <input
        v-bind="$attrs"
        v-bind:value="value"
        v-on:input="$emit('input', $event.target.value)"
      >
    </label>
  `
})
var app29 = new Vue({
  el: '#app-29',
  data: {
    required: true,
    placeholder: 'Enter your username',
    username: ''
  }
})


Vue.component('navigation-link', {
  props: ['url'],
  // slot 是访问不到 a 中的 url
  // 因为 url 的流动：<navigation-link url="/profile"> → navigation-link 组件内部
  // 而不是在 组件内部定义的
  template: `
  <a
    v-bind:href="url"
    class="nav-link"
  >
    <slot>Enter username</slot>
  </a>
`
  // Enter username 用户无输入时作为默认内容出现
})
var app30 = new Vue({
  el: '#app-30',
  data: function() {
    return {
      user: {
        name: ''
      }
    }
  }
})


Vue.component('base-layout', {
  // props: ['url'],
  template: `
  <div class="container">
    <header>
      <slot name="header"></slot>
    </header>
    <main>
      <slot></slot>
    </main>
    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>
`
})
var app31 = new Vue({
  el: '#app-31',
  data: function() {
    return {
      // user: {
      //   name: ''
      // }
    }
  }
})


// Vue.component('current-user', {
//   props: ['user'],
//   template: `
//   <span>
//     <slot v-bind:user="user">
//       {{ user.lastName }}
//     </slot>
//   </span>
// `
// })
// var app32 = new Vue({
//   el: '#app-32',
//   data: function() {
//     return {
//       user: {
//         firstName: 'fff',
//         lastName: 'lll'
//       }
//     }
//   }
// })


/****************
混入
**************/
// 定义一个混入对象
var myMixin = {
  created: function() {
    this.hello()
  },
  methods: {
    hello: function() {
      console.log('hello from mixin!')
    }
  }
}
// 定义一个使用混入对象的组件
// Vue.extend 创建一个 Vue 构造器的子类，可以像 new Vue 那样来创建实例
var Component = Vue.extend({
  mixins: [myMixin]
})
var app33 = new Component({
  el: '#app-33',
}) // => "hello from mixin!"


// 混入后内部合并的例子
var mixin = {
  methods: {
    foo: function() {
      console.log('foo')
    },
    conflicting: function() {
      console.log('from mixin')
    }
  }
}
var app34 = new Vue({
  mixins: [mixin],
  methods: {
    bar: function() {
      console.log('bar')
    },
    conflicting: function() {
      console.log('from self')
    }
  }
})
app34.foo() // => "foo"
app34.bar() // => "bar"
app34.conflicting() // => "from self"


// 全局混入
// 为自定义的选项 'myOption' 注入一个处理器。
Vue.mixin({
  created: function() {
    // this.$options 中新增 myOption
    var myOption = this.$options.myOption
    if (myOption) {
      console.log(myOption)
    }
  }
})

var app35 = new Vue({
  el: '#app-35',
  myOption: '全局混入!'
})
// => "hello!"





//-----------------渲染函数--------------------
// eg1
Vue.component('anchored-heading', {
  render: function(createElement) {
    return createElement(
      'h' + this.level, // 标签名称
      this.$slots.default // 子节点数组
    )
  },
  props: {
    level: {
      type: Number,
      required: true
    }
  }
})

var app36 = new Vue({
  el: '#app-36',
})


// eg3
Vue.component('eg3', {
  render: function(createElement) {
    // this.$parent.title 指的是 eg3 组件的父级，即 div #app-37 的 title
    return createElement('h1', this.$parent.title)
  },
  props: {

  }
})

var app37 = new Vue({
  el: '#app-37',
  data: {
    title: 'parent-title',
  }
})




//------------组件的 data 选项必须是一个函数-----------------------

// 定义一个名为 button-counter 的新组件
Vue.component('button-counter', {
  // 一个组件的 data 选项必须是一个函数
  // 可以维护一份被返回对象(这里是 count) 的独立的拷贝
  data: function() {
    return {
      count: 0
    }
  },
  template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
})

var components_demo = new Vue({
  el: '#components-demo'
})


//-------------组件是可复用的 Vue 实例----------------------


// 因为组件是可复用的 Vue 实例，所以它们与 new Vue 接收相同的选项，
// 例如 data、computed、watch、methods 以及生命周期钩子等。

//----------------------组件注册---------------------------

// 局部注册
var ComponentA = {
  template: '<button>ComponentA</button>'
}
var ComponentB = {
  template: '<button>ComponentB</button>'
}
var ComponentC = {
  template: '<button>ComponentC</button>'
}

var register_demo = new Vue({
  el: '#register',
  components: {
    'component-a': ComponentA,
    'component-b': ComponentB
  }
})

// 局部组件互用的设置
// 希望 ComponentA2 在 ComponentB2 中可用，则你需要这样写：
var ComponentA2 = {
  template: '<p>ComponentA2</p>'
}

var ComponentB2 = {
  components: {
    'component-a2': ComponentA2
  },
  template: '<p>ComponentB2</p>'
}

var register_demo2 = new Vue({
  el: '#register2',
  components: {
    'component-a2': ComponentA2,
    'component-b2': ComponentB2
  }
})

//---------------传递静态 Prop--------------------


Vue.component('blog-post', {
  props: ['title'],
  template: '<p>{{ title }}</p>'
})
var static_prop_demo = new Vue({
  el: '#static-prop',
})


//----------------传递动态 Prop 用 v-bind-------------------

Vue.component('dynamic-prop', {
  props: ['post'],
  template: `
    <div class="blog-post">
      <h3>{{ post.title }}</h3>
      <div v-html="post.content"></div>
    </div>
  `
})

var dynamic_prop_demo = new Vue({
  el: '#dynamic-prop',
  data: {
    posts: [{
        id: 1,
        title: '1',
        content: 'dynamic-prop1'
      },
      {
        id: 2,
        title: '2',
        content: 'dynamic-prop2'
      },
      {
        id: 3,
        title: '3',
        content: 'dynamic-prop3'
      }
    ]
  }
})



//----------------Prop 传入一个对象的所有属性-------------------

Vue.component('obj-prop', {
  props: ['id', 'title'],
  template: `
    <div>
      <p>id = {{ id }}</p>
      <p>title = {{ title }}</p>
    </div>
  `
})

var obj_prop_demo = new Vue({
  el: '#obj-prop',
  data: {
    post: {
      id: 1,
      title: 'My Journey with Vue'
    }
  }
})


//------prop 流动：父 => 子，子级应该新建基于 prop 的拷贝以防止改动父级 prop-------------------

// 定义一个本地的 data 属性并将这个 prop 用作其初始值
// props: ['initialCounter'],
// data: function () {
//   return {
//     counter: this.initialCounter
//   }
// }

// 定义一个计算属性，进行转换
// props: ['size'],
// computed: {
//   normalizedSize: function () {
//     return this.size.trim().toLowerCase()
//   }
// }


//------Prop 验证：类型检查+默认值+带有默认值的对象+自定义验证函数-------------------
/*
Vue.component('my-component', {
  props: {
    // 基础的类型检查 (`null` 和 `undefined` 会通过任何类型验证)
    propA: Number,
    // 多个可能的类型
    propB: [String, Number],
    // 必填的字符串
    propC: {
      type: String,
      required: true
    },
    // 带有默认值的数字
    propD: {
      type: Number,
      default: 100
    },
    // 带有默认值的对象
    propE: {
      type: Object,
      // 对象或数组默认值必须从一个工厂函数获取
      default: function () {
        return { message: 'hello' }
      }
    },
    // 自定义验证函数
    propF: {
      validator: function (value) {
        // 这个值必须匹配下列字符串中的一个
        return ['success', 'warning', 'danger'].indexOf(value) !== -1
      }
    }
  }
})
*/


//------如果不希望组件的根元素继承特性-------------------
/*
Vue.component('base-input', {
  inheritAttrs: false,  // 如果不希望组件的根元素继承特性
  props: ['label', 'value'],
  template: `
    <label>
      {{ label }}
      <input
        v-bind="$attrs"
        v-bind:value="value"
        v-on:input="$emit('input', $event.target.value)"
      >
    </label>
  `
})
*/
