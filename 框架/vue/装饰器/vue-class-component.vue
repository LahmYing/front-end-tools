<template>
  <div>
    <input v-model="msg">
    <p>prop: {{ propMessage }}</p>
    <p>msg: {{ msg }}</p>
    <p>helloMsg: {{ helloMsg }}</p>
    <p>computed msg: {{ computedMsg }}</p>
    <Hello ref="helloComponent" />
    <World />

    <p>
      <button @click="greet">Greet</button>
    </p>

    <p>
      Clicked: {{ count }} times
      <button @click="increment">+</button>
    </p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from '../../lib/index'
import Hello from './components/Hello.vue'
import World from './components/World'
import { mapState, mapMutations } from 'vuex'
// We declare the props separately
// to make props types inferable.
const AppProps = Vue.extend({
  props: {
    propMessage: String
  }
})
@Component({
  components: {
    Hello,
    World
  },
  // Vuex's component binding helper can use here
  computed: mapState([
    'count'
  ]),
  methods: mapMutations([
    'increment'
  ])
})
export default class App extends AppProps {
  // inital data
  msg: number = 123
  // use prop values for initial data
  helloMsg: string = 'Hello, ' + this.propMessage
  // annotate refs type ，注释 refs 的 type，有必要么？已经 import Hello 且 <Hello ref="helloComponent" /> 。答案见 method greet () 
  // 为什么加 ! → 表示强制解析（也就是告诉 typescript 编译器，我这里一定有值），? 表示可选
  $refs!: {
    // import 的 vue 组件会显示为接口类型
    helloComponent: Hello
  }
  // import 的 vue 组件会显示为接口类型
  test: Hello
  // 有的接口多了 [], 表示数组？→ 是的，两种方式 list: number[] = [] 或 list: Array<any> = []
  test1: Hello[]
  // additional declaration is needed
  // when you declare some properties in `Component` decorator
  count!: Number
  increment!: () => void
  // lifecycle hook
  mounted () {
    this.greet()
  }
  // computed
  get computedMsg () {
    return 'computed ' + this.msg
  }
  // 计算属性返回值加 type
  get done (): boolean {
    return true
  }

  // method
  greet () {
    alert('greeting: ' + this.msg)
    // 可以调用 Hello 组件的方法，本来跨组件如何调用方法的？组件通信我倒是知道
    this.$refs.helloComponent.sayHello()
  }
  // direct dispatch example
  // 直接派遣
  incrementIfOdd () {
    this.$store.dispatch('incrementIfOdd')
  }
}
</script>