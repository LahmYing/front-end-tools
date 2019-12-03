### 镜像

查询当前镜像

yarn config get registry

设置为淘宝镜像

yarn config set registry http://registry.npm.taobao.org/

设置回默认的官方镜像

yarn config set registry https://registry.yarnpkg.com

### 初始化一个新项目

yarn init

### 添加依赖包

yarn add [package]

yarn add [package]@[version]

yarn add [package]@[tag]

### 全局添加依赖

yarn global <add/bin/list/remove/upgrade>

global 是一个必须跟在 yarn 后面的命令。 

输入 `yarn add global package-name` 会把名为 global 和 package-name 的包添加到本地，而非全局添加 package-name

### 将依赖项添加到不同依赖项类别中

分别添加到 devDependencies、peerDependencies 和 optionalDependencies 类别中：

yarn add [package] --dev

yarn add [package] --peer

yarn add [package] --optional

### 升级依赖包

指定包名称升级指定依赖 不指定包名称升级所有依赖

yarn upgrade [package]

yarn upgrade [package]@[version]

yarn upgrade [package]@[tag]

### 移除依赖包

yarn remove [package]

### 安装项目的全部依赖

yarn

yarn install

### 列出已安装的包

#### 默认情况下，所有包和它们的依赖会被显示。 要限制依赖的深度，你可以给 list 命令添加一个标志 --depth 所需的深度

yarn list

yarn list --depth=0

#### yarn list --pattern <pattern> 会根据模式标志会筛选出依赖列表

yarn list --pattern gulp

yarn list --pattern "gulp|grunt" --depth=1

### 显示一个包的信息

yarn info <package>

显示指定 version 的包的信息

yarn info [package]@[version]

显示包的 version 信息

yarn info [package] version

### 运行一个定义好的包脚本

yarn run [script] [脚本参数]

yarn run test

yarn run test -o --watch

如果你不指定一个脚本给 yarn run 命令，run 命令会列出包里所有可运行的脚本

yarn run

### 列出脚本运行时可用的环境变量

yarn run env

如果想覆盖此命令，可以在 package.json 中定义自己的 "env" 脚本

## yarn 升级

```bash
sudo -s # mac 进入管理员模式 

npm uninstall -g yarn # 先卸载

npm install yarn@1.3.2 -g # 安装指定版本

npm install yarn@latest -g # 安装最新版本
```



