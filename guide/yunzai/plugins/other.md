# 工具插件

> 路径：`other/` · 本目录下每个文件即为一个独立插件

---

---

## 指令列表

<!-- cmds-start -->

## other/install.js

### 安装插件

- **描述**：#安装插件 #安装TRSS-Plugin
- **事件**：`message`

| 正则表达式 | 处理函数 |
|-----------|---------|
| `^#安装(插件\|Atlas\|genshin\|DF\|ws\|TRSS\|miao\|Philia\|Guoba\|yenai\|flower\|xianyu\|earth-k\|useless\|StarRail\|xiaoyao-cvs\|trss-xianxin\|Telegram\|Discord\|WeChat\|QQBot\|Route\|ICQQ\|KOOK)(-\[Pp\]lugin)?$` | install |

## other/restart.js

### 进程管理

- **描述**：#重启 #关机 #停止
- **事件**：`message`

| 正则表达式 | 处理函数 |
|-----------|---------|
| `^#重启$` | restart |
| `^#关机$` | stop |
| `^#停(机\|止)$` | exit |

## other/sendLog.js

### 发送日志

- **描述**：发送最近100条运行日志
- **事件**：`message`

| 正则表达式 | 处理函数 |
|-----------|---------|
| `^#(运行\|错误)\*日志\[0-9\]\*(.\*)` | sendLog |

## other/update.js

### 更新

- **描述**：#更新 #强制更新
- **事件**：`message`

| 正则表达式 | 处理函数 |
|-----------|---------|
| `^#更新日志` | updateLog |
| `^#(安?静)?(强制)?更新` | update |
| `^#全部(安?静)?(强制)?更新$` | updateAll |

## other/version.js

### 喵喵:版本

- **描述**：版本
- **事件**：`message`
- **优先级**：50

| 正则表达式 | 处理函数 |
|-----------|---------|
| `/^#版本$/` | version |


<!-- cmds-end -->
---

← [返回插件列表](./)
