## 参考
(前端E2E测试略解)[https://blog.csdn.net/qq_39300332/article/details/81197503]

### 什么是E2E

E2E（End To End）即端对端测试，属于黑盒测试，通过编写测试用例，自动化模拟用户操作，确保组件间通信正常，程序流数据传递如预期

### 典型E2E测试框架对比

| 名称        | 断言       | 是否跨浏览器支持 | 实现    | 官网        |
|------------|------------|------------|------------|------------|
| nightwatch | assert 和 Chai Expect | 是 |selenium | http://nightwatchjs.org/ |
| cypress | Chai、Chai-jQuery 等 | 否 |Chrome | https://www.cypress.io/ |
|testcafe| 	自定义的断言| 	是| 	不是基于 selenium 实现| 	https://devexpress.github.io/testcafe/|

- nightwatch 需要安装配置 selenium，selenium-server需要安装jdk（Java Development Kit）。
- cypress 安装方便，测试写法和单元测试一致，只支持 Chrome 类浏览器，有支持其他浏览器的计划
- testcafe 安装方便，测试写法与之前的单元测试差异比较大，编写测试用例时只能选择到可见的元素