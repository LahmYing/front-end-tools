## 生命周期大致分为以下阶段

### 初始化
 - 初始化事件、生命周期
beforeCreate
 - 初始化注入、响应性 ### 注入了什么？ 
created

### 寻找元素 
有，下一步；没有，等实例找到元素再下一步，vm.$mount(el)

### 寻找元素模板

### 编译模板并渲染 
优先用 template，没有就用元素的 outerHtml

### beforeMount
创建 vm.$el 属性，替换掉 el

### 将渲染挂载到页面  = mounted

### beforeUpdate 

### 数据更新，虚拟 DOM 树重渲染及打补丁，从而更新渲染

### updated

### beforeDestroy

### 销毁 = destroyed

