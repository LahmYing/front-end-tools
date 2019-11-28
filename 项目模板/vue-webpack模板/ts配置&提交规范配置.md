### 提交规范
.commitlintrc.js

## ts 配置
### tsconfig.json
```json
{
  "include": [
    "src/**/*.ts",
    "src/**/*.vue"
  ],
  "exclude": [
    "node_modules"
  ],
  "compilerOptions": {
    // 允许从没有设置默认导出的模块中默认导入
    "allowSyntheticDefaultImports": true,
    // 启用装饰器
    "experimentalDecorators": true,
    "allowJs": true,
    // 采用的模块系统
    "module": "esnext",
    "target": "es5",
    "moduleResolution": "node",
    "isolatedModules": true,
    "lib": [
      "dom",
      "es5",
      "es6",
      "es7",
      "es2018"
    ],
    "sourceMap": true,
    "pretty": true,
    "noUnusedLocals": true,
    "baseUrl": ".",
    "paths":{
      "@/*": ["src/*"]
    }
  }
}

```

### tslint.json
```json
{
  "defaultSeverity": "error",
  "extends": [
    "tslint-config-standard"
  ],
  "rules": {
    "no-unnecessary-type-assertion": false,
    "strict-type-predicates": false,
    "trailing-comma": false,
    "variable-name": false,
    "no-floating-promises": false,
    "no-unused-expression": false
  }
}
```


## 提交规范
### .commitlintrc.js
```js
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    "type-enum": [
      2,
      'always',
      [
        'feat', // 新增 feature
        'fix', // 修复 bug
        'docs', // 仅仅修改了文档
        'style', // 修改了空格、格式缩进、逗号等等，不改变代码逻辑
        'refactor', // 代码重构
        'test', // 测试用例
        'revert', // 回滚到上一个版本
        'chore', // 改变构建流程、或者增加依赖库、工具等
        'perf', // 优化相关，比如提升性能、体验
        'temp' // 临时提交，建议完成后合并
      ]
    ],
    'subject-case': [0, 'never', ['lower-case']]
  }
}
```