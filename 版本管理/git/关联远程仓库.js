// 场景
/*
github 如何关联远程仓库

远程仓库：git@github.com:LahmYing/front-end-tools.git
*/


git clone git@github.com:LahmYing/front-end-tools.git
// 添加远程库(连接远程库)
git remote add origin git@github.com:LahmYing/front-end-tools.git
// 此时报错： The authenticity of host 'github.com (13.229.188.59)' can't be established
// 解决： https://blog.csdn.net/qq_34446663/article/details/81106018
// 再次报错： fatal: remote origin already exists.
// 解决如下
// git remote rm origin
// 然后再执行一次
// git remote add origin git@github.com:LahmYing/front-end-tools.git
