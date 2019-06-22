var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})

var app2 = new Vue({
  el: '#app-2',
  data: {
    message: '页面加载于 ' + new Date().toLocaleString()
  }
})

var app3 = new Vue({
  el: '#app-3',
  data: {
    seen: true
  }
})

var app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [{
        text: 'v-for'
      },
      {
        text: 'v-for'
      },
      {
        text: 'v-for'
      }
    ]
  }
})

var app5 = new Vue({
  el: '#app-5',
  data: {
    message000: 'Hello Vue.js!'
  },
  methods: {
    reverseMessage: function() {
      this.message000 = this.message000.split('').reverse().join('')
    }
  }
})

var app6 = new Vue({
  el: '#app-6',
  data: {
    message: 'Hello Vue!'
  }
})


// 定义名为 todo-item 的新组件
Vue.component('todo-item', {
  // todo-item 组件现在接受一个
  // "prop"，类似于一个自定义特性。
  // 这个 prop 名为 todo。
  props: ['todo'],
  // 插入的 div
  template: '<li>{{ todo.text }}</li>'
})

// var app7 = new Vue({
//     el: '#app-7',
//     data: {
//         groceryList: [{
//                 id: 0,
//                 text: '蔬菜'
//             },
//             {
//                 id: 1,
//                 text: '奶酪'
//             },
//             {
//                 id: 2,
//                 text: '随便其它什么人吃的东西'
//             }
//         ]
//     }
// })

var app8 = new Vue({
  el: '#app-8',
  data: {
    url: 'http://www.runoob.com',
  }
})

var app9 = new Vue({
  el: '#app-9',
  data: {

    // doSomething: function(){
    //   alert('doSomething')
    // },

    doSomething2: function() {
      alert('修饰符')
    },
  }
})

var app10 = new Vue({
  el: '#app-10',
  data: {

    doSomething: function() {
      alert('doSomething')
    },

    message: '页面加载于 ' + new Date().toLocaleString(),

    // doSomething2: function(){
    //   alert('修饰符')
    // },
  }
})


var app11 = new Vue({
  el: '#app-11',
  data: {
    message: 'Hello'
  },
  computed: {
    // 计算属性的 getter
    reversedMessage: function() {
      // `this` 指向 app11 实例
      return this.message.split('').reverse().join('')
    }
  }
})


var app12 = new Vue({
  el: '#app-12',
  data: {},
  // 计算属性的写法 computed
  computed: {
    doSomething2: function() {
      return alert('不更新且只在渲染之初出现的计算属性：' + Date.now())
    }
  }
})

var app13 = new Vue({
  el: '#app-13',
  data: {
    firstName: 'Foo',
    lastName: 'Bar',
    fullName: 'Foo Bar'
  },
  watch: {
    firstName: function(val) {
      this.fullName = val + ' ' + this.lastName
    },
    lastName: function(val) {
      this.fullName = this.firstName + ' ' + val
    }
  }
})


var app14 = new Vue({
  el: '#app-14',
  data: {
    firstName: 'Foo',
    lastName: 'Bar',
  },
  computed: {
    fullName: {
      // getter
      get: function() {
        return this.firstName + ' ' + this.lastName
      },
      // setter
      set: function(newValue) {
        var names = newValue.split(' ')
        this.firstName = names[0]
        this.lastName = names[names.length - 1]
      }
    }
  }
})


var watchExampleVM = new Vue({
  el: '#app-15',
  data: {
    question: '',
    answer: 'I cannot give you an answer until you ask a question!'
  },
  watch: {
    // 如果 `question` 发生改变，这个函数就会运行
    question: function(newQuestion, oldQuestion) {
      this.answer = 'Waiting for you to stop typing...'
      this.debouncedGetAnswer()
    }
  },
  created: function() {
    // `_.debounce` 是一个通过 Lodash 限制操作频率的函数。
    // 在这个例子中，我们希望限制访问 yesno.wtf/api 的频率
    // AJAX 请求直到用户输入完毕才会发出。想要了解更多关于
    // `_.debounce` 函数 (及其近亲 `_.throttle`) 的知识，
    // 请参考：https://lodash.com/docs#debounce
    this.debouncedGetAnswer = _.debounce(this.getAnswer, 500)
  },
  methods: {
    getAnswer: function() {
      if (this.question.indexOf('?') === -1) {
        this.answer = 'Questions usually contain a question mark. ;-)'
        return
      }
      this.answer = 'Thinking...'
      var vm = this
      axios.get('https://yesno.wtf/api')
        .then(function(response) {
          vm.answer = _.capitalize(response.data.answer)
        })
        .catch(function(error) {
          vm.answer = 'Error! Could not reach the API. ' + error
        })
    }
  }
})


var app16 = new Vue({
  el: '#app-16',
  data: {
    isActive: true,
    error: null
  },
  computed: {
    classObject: function() {
      return {
        active: this.isActive && !this.error,
        'text-danger': this.error && this.error.type === 'fatal'
      }
    }
  }
})


var app17 = new Vue({
  el: '#app-17',
  data: {
    isActive: true,
    activeClass: 'active',
    errorClass: 'error',
  },
})


Vue.component('my-component', {
  template: '<p class="foo bar">内容在组件的 template 里</p>'
})
var app18 = new Vue({
  el: '#app-18',
  data: {
    isActive: true,
  },
})


var app19 = new Vue({
  el: '#app-19',
  data: {
    styleObject: {
      color: 'red',
      fontSize: '20px'
    }
  },
})


var app20 = new Vue({
  el: '#app-20',
  data: {
    baseStyles: {
      color: 'red',
      fontSize: '20px',
    },
    overridingStyles: {
      color: 'gray',
    },
  },
})


var app21 = new Vue({
  el: '#app-21',
  data: {
    baseStyles: {
      color: 'gray',
      fontSize: '15px',
    },
    overridingStyles: {
      transform: 'rotate(-2deg)',
    },
  },
})



var app22 = new Vue({
  el: '#app-22',
  data: {
    // awesome:999,
    awesome: 1,
  },
})



var app23 = new Vue({
  el: '#app-23',
  data: {
    // awesome:999,
    type: 'C',
  },
})



var app24 = new Vue({
  el: '#app-24',
  data: {
    loginType: 'username'
  },
  methods: {
    toggleLoginType: function () {
      return this.loginType = this.loginType === 'username' ? 'email' : 'username'
    }
  }
})


var app25 = new Vue({
  el: '#app-25',
  data: {
    loginType: 'username'
  },
  methods: {
    toggleLoginType: function () {
      return this.loginType = this.loginType === 'username' ? 'email' : 'username'
    }
  }
})


var app26 = new Vue({
  el: '#app-26',
  data: {
    parentMessage: 'Parent',
    items: [
      { message: 'Foo' },
      { message: 'Bar' }
    ]
  }
})


var app27 = new Vue({
  el: '#app-27',
  data: {
    object: {
      title: 'How to do lists in Vue',
      author: 'Jane Doe',
      publishedAt: '2016-04-10'
    }
  }
})
