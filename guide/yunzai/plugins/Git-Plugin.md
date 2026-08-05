# Git-Plugin / Git 仓库助手

> 源码仓库：<https://github.com/QingYingX-Bot/Git-Plugin>

---

面向 Yunzai 的 Git 仓库助手，支持 GitHub / Gitee / GitCode / Gitea 四个平台。可查询仓库、Issue、PR、README，支持仓库订阅、轮询推送、Webhook 实时推送，以及 Git 仓库链接自动解析。

## 指令说明

以下指令说明供 bot 使用者（群友 / 管理员）参考，标「主人」的指令仅机器主人可用。

### 查询仓库 / Issue / PR / README

查询指令有两类写法：**平台直达命令**用平台名作前缀（`#githubrepo owner/repo`），**通用命令**用第一个参数指定平台（`#gitrepo github owner/repo`）。只填仓库不填编号时，Issue / PR 命令返回开启的编号列表，连续编号会压缩显示（如 `1~4, 8, 10~12`）。

| 指令 | 权限 | 说明 |
|------|------|------|
| `#gitrepo github owner/repo` | 所有人 | 查询仓库信息（描述、Star、Fork、默认分支、更新时间），返回仓库卡片图 |
| `#gitissue github owner/repo#1` | 所有人 | 查询单个 Issue 详情，渲染为卡片图 |
| `#gitissue github owner/repo` | 所有人 | 列出该仓库开启的 Issue 编号 |
| `#gitpr github owner/repo#1` | 所有人 | 查询单个 PR 详情 |
| `#gitpr github owner/repo` | 所有人 | 列出该仓库开启的 PR 编号 |
| `#gitreadme github owner/repo` | 所有人 | 把仓库 README 渲染为图片 |
| `#gitlimit` | 所有人 | 查询 GitHub API 限流剩余额度 |

各平台的直达命令前缀：

| 平台 | 仓库 | Issue | PR | README |
|------|------|-------|----|--------|
| GitHub | `#githubrepo` | `#githubissue` | `#githubpr` | `#githubreadme` |
| Gitee | `#giteerepo` | `#giteeissue`（编号带 `I` 前缀，如 `#I12345`） | `#giteepr` | `#giteereadme` |
| GitCode | `#gitcoderepo` | `#gitcodeissue` | `#gitcodepr` | `#gitcodereadme` |
| Gitea | `#gitearepo` | `#giteaissue` | `#giteapr` | `#giteareadme` |

> Gitea 需要额外带实例地址，例如 `#gitrepo gitea https://gitea.example.com owner/repo`。卡片渲染失败时自动回落为纯文本。

### 仓库订阅与推送

订阅目标由命令发送位置决定：**群聊**发命令推送到当前群，**私聊**发命令推送到当前好友。订阅后，仓库出现新增 Issue / PR 或 commit 更新时会自动推送。

| 指令 | 权限 | 说明 |
|------|------|------|
| `#gitsub github owner/repo` | 所有人 | 订阅一个或多个仓库（多个用 `,`、`，`、`、` 分隔），订阅前会先校验仓库存在 |
| `#githubsub owner/repo` | 所有人 | GitHub 直达订阅 |
| `#gitunsub github owner/repo` | 所有人 | 取消订阅单个仓库；不带仓库名时取消当前会话全部订阅 |
| `#gitlist [platform]` | 所有人 | 查看当前会话订阅列表，可指定平台筛选 |
| `#gitdefault github owner/repo` | 所有人 | 设置当前会话默认仓库，之后查询可省略仓库参数 |

> 推送有三条链路：`pollingEnabled` 定时轮询新增 Issue / PR；`repoUpdate` 按 cron 轮询分支最新 commit 并推送更新卡片（可配置多分支、多群）；`webhook` 由平台实时回调插件接口。三者均在 `config/config/git.yaml` 配置，无需命令操作。

### 链接自动解析

开启后，群聊或私聊直接发送 Git 仓库链接，会自动生成仓库卡片图，无需使用查询指令。

| 指令 | 权限 | 说明 |
|------|------|------|
| `#gitlink on` | 所有人 | 开启当前会话的链接自动解析 |
| `#gitlink off` | 所有人 | 关闭当前会话的链接自动解析 |

> 默认开关由配置 `autoResolveLinks` 控制（默认开启），`#gitlink` 只影响当前会话。

### 帮助

| 指令 | 权限 | 说明 |
|------|------|------|
| `#gt帮助` / `#git帮助` | 所有人 | 查看 Git-Plugin 帮助图 |

### 更新插件

| 指令 | 权限 | 说明 |
|------|------|------|
| `#gt更新` / `#git更新` | 主人 | 更新 Git-Plugin |
| `#gt强制更新` / `#git强制更新` | 主人 | 强制还原并更新（git reset --hard） |

---

## 指令列表

<!-- cmds-start -->

### Git-Plugin-更新

- **描述**：无
- **事件**：`message`
- **优先级**：50

| 正则表达式 | 处理函数 |
|-----------|---------|
| `^\[#/!！\]?(?:gt\|git)(?:插件)?(?:安?静)?(?:强制)?更新$` | update |
| `^\[#/!！\]?(?:gt\|git)update$` | update |

### Git-Plugin-链接卡片

- **描述**：无
- **事件**：`message`
- **优先级**：500

| 正则表达式 | 处理函数 |
|-----------|---------|
| `/https?:\\/\\/(?:github\\.com\|gitee\\.com\|gitcode\\.com)\\/\[^\\s\\/#?\]+\\/\[^\\s\\/#?\]+(?:\[\\/?#\]\[^\\s\]\*)?/i` | resolveLink |

### Git-Plugin-帮助

- **描述**：无
- **事件**：`message`
- **优先级**：500

| 正则表达式 | 处理函数 |
|-----------|---------|
| `^\[#/!！\]?(gt帮助\|gthelp\|git帮助\|githelp)$` | help |

### Git-Plugin-查询

- **描述**：无
- **事件**：`message`
- **优先级**：500

| 正则表达式 | 处理函数 |
|-----------|---------|
| `^\[#/!！\]?(githubrepo\|gitcoderepo\|giteerepo\|gitearepo\|gitrepo)\\b` | repo |
| `^\[#/!！\]?(githubissue\|gitcodeissue\|giteeissue\|giteaissue\|gitissue)\\b` | issue |
| `^\[#/!！\]?(githubpr\|gitcodepr\|giteepr\|giteapr\|gitpr)\\b` | pull |
| `^\[#/!！\]?(githubreadme\|gitcodereadme\|giteereadme\|giteareadme\|gitreadme)\\b` | readme |
| `^\[#/!！\]?(githublimit\|gitcodelimit\|giteelimit\|gitealimit\|gitlimit)$` | rateLimit |

### Git-Plugin-设置

- **描述**：无
- **事件**：`message`
- **优先级**：500

| 正则表达式 | 处理函数 |
|-----------|---------|
| `^\[#/!！\]?(githubdefault\|gitcodedefault\|giteedefault\|giteadefault\|gitdefault)\\b` | setDefault |
| `^\[#/!！\]?gitlink\\b` | setLink |

### Git-Plugin-订阅

- **描述**：无
- **事件**：`message`
- **优先级**：500

| 正则表达式 | 处理函数 |
|-----------|---------|
| `^\[#/!！\]?(githubsub\|gitcodesub\|giteesub\|giteasub\|gitsub)\\b` | subscribe |
| `^\[#/!！\]?(githubunsub\|gitcodeunsub\|giteeunsub\|giteaunsub\|gitunsub)\\b` | unsubscribe |
| `^\[#/!！\]?gitlist(?:\\s+(github\|gitee\|gitcode\|gitea))?$` | list |

### Git-Plugin-订阅轮询

- **描述**：无
- **事件**：`message`
- **优先级**：1000


<!-- cmds-end -->

## 鸣谢

暂无

---

← [返回插件列表](./)
