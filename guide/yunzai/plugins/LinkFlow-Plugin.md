# LinkFlow-Plugin

> 源码仓库：<https://github.com/yoimiya-kokomi/LinkFlow-Plugin>

### BiliLivePush

- **描述**：无
- **事件**：`message`
- **优先级**：-114500

| 正则表达式 | 处理函数 |
|-----------|---------|
| `^#?(全体\|匿名)?订阅直播` | setLivePush |
| `^#?(全体\|匿名)?取消订阅直播` | delLivePush |
| `^#?(全体\|匿名)?订阅UP` | setLivePushByUid |
| `^#?(全体\|匿名)?取消订阅UP` | delLivePushByUid |
| `^#?(本?群\|我的?)?订阅(列表\|list)?` | listLivePush |

### [LinkFlow]链接解析

- **描述**：多平台链接解析与视频下载
- **事件**：`message`
- **优先级**：-9999

| 正则表达式 | 处理函数 |
|-----------|---------|
| `/^#开启解析$/i` | cmdEnable |
| `/^#关闭解析$/i` | cmdDisable |
| `/https?:\\/\\//i` | autoParse |

### [LinkFlow]帮助

- **描述**：查看LinkFlow-Plugin帮助
- **事件**：`message`
- **优先级**：500

| 正则表达式 | 处理函数 |
|-----------|---------|
| `/^#(linkflow\|LinkFlow\|b站\|B站)帮助$/i` | help |

### [LinkFlow]激励计划

- **描述**：B站UP主激励计划抢奖励
- **事件**：`message`
- **优先级**：500

| 正则表达式 | 处理函数 |
|-----------|---------|
| `/^#激励(创建\|生成)配置$/i` | cmdCreateConfig |
| `/^#激励添加\\s+\\d\{1,2\}\\s+/i` | cmdAddLink |
| `/^#激励列表$/i` | cmdListLinks |
| `/^#激励删除\\s+\\d\{1,2\}$/i` | cmdRemoveLink |
| `/^#领取每日激励$/i` | cmdDailyClaim |
| `/^#(添加\|增加)激励白名单\\s\*/i` | cmdAddWhitelist |
| `/^#(删除\|移除)激励白名单\\s\*/i` | cmdRemoveWhitelist |
| `/^#激励白名单$/i` | cmdWhitelist |

### [LinkFlow]账号登录

- **描述**：B站扫码登录（机器人公共/个人）+ 工具环境初始化
- **事件**：`message`
- **优先级**：500

| 正则表达式 | 处理函数 |
|-----------|---------|
| `/^#机器人\[bB\]站登录$/i` | cmdBotLogin |
| `/^#\[bB\]站登录$/i` | cmdPersonalLogin |
| `/^#\[bB\]站状态$/i` | cmdStatus |
| `/^#初始化工具环境$/i` | cmdInitTools |

### [LinkFlow]订阅管理

- **描述**：B站动态/直播订阅推送
- **事件**：`message`
- **优先级**：500

| 正则表达式 | 处理函数 |
|-----------|---------|
| `/^#(全体\|匿名)?订阅\[bB\]站UP动态\\s+\\S+/i` | addDynamicSub |
| `/^#(全体\|匿名)?取消\[bB\]站UP动态\\s+\\S+/i` | delDynamicSub |
| `/^#动态订阅列表$/i` | listDynamicSub |
| `/^#(全体\|匿名)?订阅\[bB\]站UP直播\\s+\\S+/i` | addLiveSubByUid |
| `/^#(全体\|匿名)?订阅\[bB\]站UP直播间\\s+\\S+/i` | addLiveSubByRoom |
| `/^#(全体\|匿名)?取消\[bB\]站UP直播\\s+\\S+/i` | delLiveSubByUid |
| `/^#(全体\|匿名)?取消\[bB\]站UP直播间\\s+\\S+/i` | delLiveSubByRoom |
| `/^#直播订阅列表$/i` | listLiveSub |

---

← [返回插件列表](./)
