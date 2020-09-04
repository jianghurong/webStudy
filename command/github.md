```js
git add . // 提交当前项目所有改动到修改区
git commit -m // 添加当前修改区注释
git pull // 拉取项目最新改动
git push // 更新项目
git reset HEAD . // 撤销 git add . 操作
git reset --hard HEAD^ // 回退到上一次commit状态
```

## 已有项目上传至github
```js
1. github 新建仓库
2. git add .
3. git commit -m "note"
4. git remote rm origin // required
5. git remove add origin
6. git push -u origin master
```