<template>

</template>

<script lang='ts'>
import { Vue, Component, Prop } from 'vue-property-decorator'

// 自定义 type 吧
// 搜索类型 [product: 商品列表, package: 套餐挂接商品列表, printer_add_products: 打印机挂接菜品]
type SearchType = 'product' | 'package' | 'printer_add_products'

@Component
export default class YourComponent extends Vue {
  @Prop(Number) readonly propA: number | undefined
  @Prop({ default: 'default value' }) readonly propB!: string
  @Prop([String, Boolean]) readonly propC: string | boolean | undefined
  // 前4个等同于
  // export default {
  //   props: {
  //     propA: {
  //       type: Number
  //     },
  //     propB: {
  //       default: 'default value'
  //     },
  //     propC: {
  //       type: [String, Boolean]
  //     },
  //     newType: {
  //       default: 'product'
  //       type: SearchType
  //     }
  //   }
  // }

  @Prop({ default: 'product' })
  newType: SearchType

  // required 是 propOption
  @Prop({ required: true })
  name: string

  // filter 可以这样定义结果类型?  // => boolean // 可以，filter 保留通过测试的元素
  @Prop(Function)
  filter: (product: Product) => boolean

  // keep-alive 组件停用时调用, 该钩子在服务器端渲染期间不被调用
  deactivated () {
  }

  // 调用子组件 BottomDialog 的 show 和 hide 方法
  show () {
    (this.$refs.btmDialog as BottomDialog).show()
  }
  hide () {
    (this.$refs.btmDialog as BottomDialog).hide()
  }



}
</script>

<style>
</style>