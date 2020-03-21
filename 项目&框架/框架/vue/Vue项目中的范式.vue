<template>
  <div>
    <!-- v-if 惯用 template 开启，有奇特作用？咱不管 -->
    <!-- <template v-if="!show_action_menu">
    </template>
    <div v-else>
    </div> -->
  </div>

</template>

<script lang='ts'>
// 子组件 emit("emitEven", value)
// ️父组件监听 @emitEven="父组件方法"

// model 选项
import { Vue, Component, Prop, Watch } from 'vue-property-decorator'

export interface ActionItem {
  name: string
  disabled?: boolean
  click?: () => void  // 接口里还能直接给函数
}

export default class ActionsBar extends Vue {

  @Prop({
    // 当给子组件设置 props 属性时，如果参数类型是 Array 或 Object ，它的默认值必须是由工场函数返回，不能直接赋值
    default: () => [],
    // 当是 Object 类型时，而且又使用 箭头函数时，如果设置默认值为空对象，必须加上括号
    // default: () => ({})
    // validator: 自定义 Prop 验证函数，返回布尔值
    // array.every() : 测试一个数组内的所有元素是否都能通过某个指定函数的测试。它返回一个布尔值, 若收到一个空数组，此方法在一切情况下都会返回 true
    validator: actions => actions.every(item => item.name)
  })
  actions: ActionItem[]


  // @Watch('checked_list', { immediate: true })
  // immediate: true 将立即以表达式的当前值触发回调


  // 动态 class
  // <div :class="component_class">
  get component_class () {
    return [
      'badge',
      {
        [`theme-${this.theme}`]: this.theme
      }
    ]
  }


  // <popup
  //   :class="classes"
  //   v-model="showPopup"
  //   v-bind="$props" 
  //   @touchmove.native.stop.passive
  // ></popup>
  // 
  // v-bind="$props"? this.$props? 
  // 
  @Component({
    props: {
      //  将子组件 Popup 的 props 传给当前父组件的 props. 
      //  这里这种用法好处：可一次传多个 prop 
      //  单个 prop 个人建议尽量用 export 里的 @Prop 用法，
      ...(Popup as any).props
    },
    components: {
      Popup
    }
  })
  //   interface PopupProps {
  //   height: string
  //   width: string
  // }
  // 作用：将接口的 height width 等挂载为 BottomDialog 组件的属性？
  // export default class BottomDialog extends Vue<PopupProps> { }


  // 多类型 或 | 
  checked: number | string | string[] | number[] = ''
  @Prop({ default: () => [] })
  list: Array<string | CheckListItem>


  @Prop([String, Boolean]) // 为 Vue 提供的类型检查
  propC: string | boolean  // 为 TS 提供的类型检查


// API res 是天然的 Promise，后可 .then().catch()


// array.find ((params) => { params > 10 })
// find() 方法返回数组中满足提供的测试函数的第一个元素的值。否则返回 undefined


// 让 vue 识别全局方法/变量, 可用 this.$message 等，见：
// @/typings/vue-shim.d.ts
// @/typings/vue.d.ts
declare module 'vue/types/vue' { }


// https://ts.xcatliu.com/advanced/type-aliases
// 类型别名 type
  


















}
</script>

<style>
</style>
