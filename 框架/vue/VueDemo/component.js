//------------组件的 data 选项必须是一个函数-----------------------

// 定义一个名为 button-counter 的新组件
Vue.component('button-counter', {
  // 一个组件的 data 选项必须是一个函数
  // 可以维护一份被返回对象(这里是 count) 的独立的拷贝
  data: function () {
    return {
      count: 0
    }
  },
  template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
})
// button-counter 的例子
// <div id="components-demo">
//   <button-counter></button-counter>
// </div>
//
// new Vue({ el: '#components-demo' })

//-------------组件是可复用的 Vue 实例----------------------


// 因为组件是可复用的 Vue 实例，所以它们与 new Vue 接收相同的选项，
// 例如 data、computed、watch、methods 以及生命周期钩子等。

//---------------传递静态 Prop--------------------


Vue.component('blog-post', {
  props: ['title'],
  template: '<h3>{{ title }}</h3>'
})
// 以下就是传递静态
// <blog-post title="My journey with Vue"></blog-post>
// <blog-post title="Blogging with Vue"></blog-post>
// <blog-post title="Why Vue is so fun"></blog-post>

//----------------传递动态 Prop 用 v-bind-------------------

new Vue({
  el: '#blog-post-demo',
  data: {
    posts: [
      { id: 1, title: 'My journey with Vue' },
      { id: 2, title: 'Blogging with Vue' },
      { id: 3, title: 'Why Vue is so fun' }
    ]
  }
})

// <blog-post
//   v-for="post in posts"
//   v-bind:key="post.id"
//   v-bind:title="post.title"
// ></blog-post>

//----------------监听子组件事件-------------------
