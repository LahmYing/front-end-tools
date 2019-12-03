## ts 配置
### tsconfig.json
https://www.typescriptlang.org/docs/handbook/compiler-options.html
```json
{
  "include": [
    "src/**/*.ts",
    "src/**/*.vue"
  ],
  "exclude": [
    "node_modules",
  ],
  "compilerOptions": {
    // 允许从模块进行默认导入而没有默认导出。这不影响代码发出，仅影响类型检查
    "allowSyntheticDefaultImports": true,
    // 为ES装饰器启用实验性支持
    "experimentalDecorators": true,
    "allowJs": true,
    // esnext 是一个 JavaScript 库,可以将 ES6 草案规范语法转成今天的 JavaScript 语法
    "module": "esnext",
    "target": "es5",
    // 确定如何解析模块
    "moduleResolution": "node",
    // 执行其他检查，以确保单独的编译（例如使用transpileModule或@ babel / plugin-transform-typescript）是安全的
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
    // 报错，变量等存在却未使用时
    "noUnusedLocals": true,
    // 基本目录，用于解析非相对模块名称
    "baseUrl": ".",
    "paths":{
      "@/*": ["src/*"]
    }
  }
}

```

### tslint.json
https://palantir.github.io/tslint/rules/
```json
{
  "defaultSeverity": "warning",
  "extends": [
    "tslint:recommended"
  ],
  "linterOptions": {
    "exclude": [
      "node_modules/**"
    ]
  },
  "rules": {
    // 单引号
    "quotemark": [
      true,
      "single"
    ],
    // 分号 ;
    "semicolon": [
      false,
      "always"
    ],
    // 函数括号前的空格
    "space-before-function-paren": true,
    "no-unnecessary-type-assertion": false,
    "strict-type-predicates": false,
    "trailing-comma": false,
    "variable-name": false,
    "no-floating-promises": false,
    "no-unused-expression": false,
    "indent": [
      true,
      "spaces",
      2
    ],
    "interface-name": false,
    "ordered-imports": false,
    "object-literal-sort-keys": false,
    "no-consecutive-blank-lines": false,
    // 箭头函数参数需要()包裹
    "arrow-parens": false,
    // 不允许通过字符串文本进行对象访问
    "no-string-literal": false
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

## 代码提交钩子 Husky
https://segmentfault.com/a/1190000017790500