# 系统插件

> 路径：`system/` · 本目录下每个文件即为一个独立插件

---

## system/add.js

### 添加消息

- **描述**：添加消息
- **事件**：`message`

| 正则表达式 | 处理函数 |
|-----------|---------|
| `^#(全局)?添加` | add |
| `^#(全局)?删除` | del |
| `^#(全局)?(消息\|词条)` | list |

## system/botOperate.js

### botOperate

- **描述**：Bot 操作
- **事件**：`message`

| 正则表达式 | 处理函数 |
|-----------|---------|
| `^#(Bot\|机器人)验证.+:.+$` | Verify |
| `^#(Bot\|机器人)(上\|下)线.+$` | Operate |

## system/disablePrivate.js

### 禁止私聊

- **描述**：对私聊禁用做处理当开启私聊禁用时只接收cookie以及抽卡链接
- **事件**：`notice.friend.poke、message.private`

## system/friend.js

### autoFriend

- **描述**：自动同意好友
- **事件**：`request.friend`
- **优先级**：5000

## system/invite.js

### invite

- **描述**：邀请自动进群
- **事件**：`request.group.invite`
- **优先级**：5000

## system/master.js

### 设置主人

- **描述**：设置主人
- **事件**：`message`

| 正则表达式 | 处理函数 |
|-----------|---------|
| `^#设置主人验证码$` | code |
| `^#设置主人$` | master |

## system/quit.js

### notice

- **描述**：自动退群
- **事件**：`notice.group.increase`
- **优先级**：5000

## system/recallReply.js

### 回复撤回

- **描述**：撤回回复消息
- **事件**：`message`

| 正则表达式 | 处理函数 |
|-----------|---------|
| `^#?撤回$` | recall |

## system/status.js

### 状态统计

- **描述**：#状态
- **事件**：`message`
- **优先级**：5000

| 正则表达式 | 处理函数 |
|-----------|---------|
| `^#(状态\|统计)` | status |

← [返回插件列表](./)
