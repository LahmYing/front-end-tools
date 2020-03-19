// git clone

// 查看远程库的信息
// 当你从远程仓库克隆时，实际上Git自动把本地的master分支和远程的master分支对应起来了，并且，远程仓库的默认名称是origin
// git remote
// git remote -v

// 查看分支情况
// git branch -a

// 切换到分支
// git checkout 分支

// 当前状态
// git status

// 提交记录
// git log
// git log --pretty=oneline


/**************** 新增功能，创建 feature 分支 ********************/
// 新建并切换到分支 branch_name，新建的分支还没有关联到指定的远程分支的
// git checkout -b branch_name
// 添加进缓存
// git add .
// 提交
// git commit -m "fix(price_manage):修正price_manage目录下的"
// git push 会提示将分支推到远程


/*************** dev 合共 feature 分支 *********************/
// 切换到 dev 分支 （已关联到远程 dev）
// git checkout dev
// git pull
// 在当前分支即本地 dev 分支上，合并 branch_name 分支 
// git merge branch_name
// git push


/**************** 修复 BUG ********************/
//  确定好在哪个分支上修复 bug,比如 dev,切换到 dev，从 dev 上创建临时分支 issue-xxx
//  修复完成，切换到 dev ，在 dev 上合并 issue-xxx 并删除该临时分支


/*************** 删除分支 *********************/
// 删除本地分支 new_store
// git branch -d new_store

// 删除远程分支 new_store
// git push origin --delete new_store


/************** 修改用户信息 **********************/
/**
 * 修改 user.name
 * git config  --global user.name huanglanying 
 * 
 * 修改 user.email 
 * git config  --global user.email huanglanying@hitour.cc
 * 
 * 查看
 * git config user.name
 * git config user.email
 * */

 
/************* 工作栈 ***********************/
/**
 * 暂存工作到 stash 栈
 * git stash
 * 
 * stash 栈中只有一个工作时，从栈中恢复该工作到分支中，并从栈中删除之
 * git stash pop
 * 
 * 查看栈中的所有工作
 * git stash list
 * 
 * 恢复指定工作
 * git stash apply stash@{0}
 */


/************* 合并 ***********************/
// git merge --abort   //中止合并
// git reset --merge   //撤销合并
// git pull            //拉去代码

/************* 版本回退 ***********************/
// git reset --hard 3e744
// 3e744 为版本号前几位

