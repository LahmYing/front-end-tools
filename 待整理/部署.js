// 只看自己修改的分支的效果，直接部署即可
// 如果要加入最新内容，git fetch （拉取远程库更新，如有发布最新的 release 分支，最好 merge release 分支）
// 部署 => 测试环境的域名在各个 test.js 文件(如 test3.js) 中有注明
npm run deploy:test3
