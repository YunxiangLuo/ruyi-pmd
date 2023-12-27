# RuyiSDK PMD Docs

本仓库主要记录RuyiSDK的需求文档、设计文档、产品文档等内容。

## 关于docs仓库

### 技术

docs仓库采用vitepress技术将Markdown格式的文档自动生成为web页面，结合github-pages 设置，能够自动将文档更新进行发布。

### 仓库目录介绍

- docs ： Markdown文档；采用分级管理。
  - .vitepress/config.mts : 目录索引定义。
  - process：项目过程文档
  - usermanual：用户使用手册
- build ：根据Markdown文档构建的html网页。

### 贡献文档

欢迎大家一起参与RUYISDK文档贡献。贡献方法：

1. fork 本仓库；
2. 在docs/docs/ 目录下按需新建目录和markdown文档，或者修改已有的markdown文档；
3. 修改docs/docs/.vitepress/config.mts 文档调整目录；
4. 提交修改并创建pull request将文档贡献提交到docs仓库，等待仓库管理员审核合入；
5. pr被合入后大约几十秒或几分钟后，访问[Page](https://xijing21.github.io/ruyi-pmd/)检查网页是否更新。

### 链接

官方仓库：https://github.com/ruyisdk/

用户文档：[https://ruyisdk.github.io/docs/](https://ruyisdk.github.io/docs/)
