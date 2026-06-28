# 工具插件

本目录下每个文件即为一个独立插件。

> 路径：`other/`

## other/install.js

**插件：** 安装插件

**共 1 条指令：**

- `^#安装(插件|Atlas|genshin|DF|ws|TRSS|miao|Philia|Guoba|yenai|flower|xianyu|earth-k|useless|StarRail|xiaoyao-cvs|trss-xianxin|Telegram|Discord|WeChat|QQBot|Route|ICQQ|KOOK)(-[Pp]lugin)?$`

## other/restart.js

**插件：** 进程管理

**共 3 条指令：**

- `^#重启$`
- `^#关机$`
- `^#停(机|止)$`

## other/sendLog.js

**插件：** 发送日志

**共 1 条指令：**

- `^#(运行|错误)*日志[0-9]*(.*)`

## other/update.js

**插件：** 更新

**共 3 条指令：**

- `^#更新日志`
- `^#(安?静)?(强制)?更新`
- `^#全部(安?静)?(强制)?更新$`

## other/version.js

**插件：** 喵喵:版本

（无指令，后台/事件插件）

---

← [返回插件列表](./)
