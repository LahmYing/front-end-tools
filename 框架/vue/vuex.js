// vuex-class-component
this.actionFoo({ value: true }) // 等同 store.dispatch('foo', { value: true })
this.mutationFoo({ value: true }) // 等同store.commit('foo', { value: true })


/**
 * Vuex.Store 实例方法
 * 
 * replaceState(state: Object)
 * 替换 store 的根状态
 * 
 * subscribe(handler: Function): Function
 * 订阅 store 的 mutation
 * 
 * subscribeAction(handler: Function): Function
 * 订阅 store 的 action
 */
