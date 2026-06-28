# Lotus-Plugin

> 源码仓库：<https://github.com/yoimiya-kokomi/Lotus-Plugin>

### [荷花插件] 重构迁移

- **描述**：Migrate old Lotus-Plugin to Lotus-ReFactor
- **事件**：`message`

| 正则表达式 | 处理函数 |
|-----------|---------|
| `^#荷花迁移重构$` | startMigration |
| `^#确认荷花迁移$` | firstConfirm |
| `^#最终确认荷花迁移$` | finalConfirm |
| `^#确认删除荷花旧库$` | deleteOldBackup |

### [荷花插件] 全部体力

- **描述**：触发 #体力、*体力、%体力
- **事件**：`message`
- **优先级**：0

| 正则表达式 | 处理函数 |
|-----------|---------|
| `^(!体力\|全部体力\|#全部体力)$` | sendAllDaily |

### [荷花插件] 自动签到

- **描述**：集成MihoyoBBSTools，提供自动签到服务
- **事件**：`message`
- **优先级**：0

| 正则表达式 | 处理函数 |
|-----------|---------|
| `^#注册自动签到$` | register |
| `^#刷新自动签到$` | refresh |
| `^#自动签到帮助$` | help |
| `^#初始化签到环境$` | initialize |
| `^#(测试\|开始)签到$` | runCheckin |
| `^#批量刷新签到$` | batchRefresh |
| `^#注册本群签到$` | registerGroup |
| `^#自动签到日志$` | getLatestLog |
| `^#启用社区签到$` | enableCommunitySignIn |
| `^#自动签到(黑\|白)名单$` | switchPermissionMode |
| `^#(添加\|删除)(黑\|白)名单(.\*)$` | updatePermissionList |
| `^#签到(黑\|白)名单列表$` | viewPermissionLists |
| `^#签到名单列表$` | viewGroupCheckinList |
| `^#荷花插件更新$` | checkPluginUpdate |

### [荷花插件] 自定义执行

- **描述**：通过指令模拟指定用户在指定场景执行命令
- **事件**：`message`
- **优先级**：0

| 正则表达式 | 处理函数 |
|-----------|---------|
| `^#execute` | execute |

### [荷花插件] B站解析

- **描述**：处理B站视频、直播链接及搜索
- **事件**：`message`
- **优先级**：0

| 正则表达式 | 处理函数 |
|-----------|---------|
| `(bilibili.com\|b23.tv\|bili2233.cn\|t.bilibili.com\|^BV\[1-9a-zA-Z\]\{10\}$\|^av\[0-9\]+$)` | parse |
| `^#B站登录$` | login |
| `^#荷花搜视频.+` | searchVideo |
| `^#看\[0-9\]+$` | pickVideo |
| `^#荷花看视频.+` | directWatch |

### [荷花插件] 报告推送白名单管理

- **描述**：主人通过群聊开启/关闭自动签到报告推送
- **事件**：`message`
- **优先级**：5

| 正则表达式 | 处理函数 |
|-----------|---------|
| `^#开启荷花自动签到报告推送$` | enablePush |
| `^#关闭荷花自动签到报告推送$` | disablePush |

### [荷花插件] 音乐合伙人

- **描述**：音乐合伙人自动评定
- **事件**：`message`
- **优先级**：10

| 正则表达式 | 处理函数 |
|-----------|---------|
| `^#合伙人测试$` | manualTest |
| `^#合伙人登录$` | partnerLogin |
| `^#合伙人日志$` | getPartnerLog |

### [荷花插件] 本地文件上传

- **描述**：通过指令发送服务器本地的文件或文件夹
- **事件**：`message`
- **优先级**：200

| 正则表达式 | 处理函数 |
|-----------|---------|
| `^#上传(.\*)$` | upload |

### [荷花插件] 群组管理

- **描述**：获取群成员列表，并处理退群事件
- **事件**：`message`
- **优先级**：240

| 正则表达式 | 处理函数 |
|-----------|---------|
| `^#(Lotus)?群成员 ?(\\d\*)$` | sendGroupMembersFile |

### [荷花插件] 捐赠

- **描述**：发送荷花插件捐赠链接
- **事件**：`message`
- **优先级**：5000

| 正则表达式 | 处理函数 |
|-----------|---------|
| `(捐赠\|donate\|Donate)` | sendDonateLink |

---

← [返回插件列表](./)
