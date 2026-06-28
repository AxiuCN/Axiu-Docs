# mcsmanager-plugin

> 源码仓库：<https://github.com/A1Panda/mcsmanager-plugin>

<!-- cmds-start -->

### MCSManager-绑定

- **描述**：绑定MCSManager实例
- **事件**：`message`
- **优先级**：5000

| 正则表达式 | 处理函数 |
|-----------|---------|
| `^#?(mcs\|MCS)\\s\*(绑定信息\|bindinfo)$` | info |
| `^#?(mcs\|MCS)\\s\*(解绑\|unbind)$` | unbind |
| `^#?(mcs\|MCS)\\s\*(同步实例\|syncinstances)$` | syncInstances |
| `^#?(mcs\|MCS)\\s\*(绑定\|bind)\\s\*.\*$` | bind |

### MCSManager-守护进程

- **描述**：MCSManager 守护进程管理指令
- **事件**：`message`
- **优先级**：5000

| 正则表达式 | 处理函数 |
|-----------|---------|
| `^#?(mcs\|MCS)\\s\*(添加节点\|add-node)(?:\\s+(\[\\s\\S\]+))?$` | addNode |
| `^#?(mcs\|MCS)\\s\*(删除节点\|del-node)\\s\*(\[\\d\]+)$` | deleteNode |
| `^#?(mcs\|MCS)\\s\*(连接节点\|link-node)\\s\*(\[\\d\]+)$` | linkNode |
| `^#?(mcs\|MCS)\\s\*(节点列表\|nodes)$` | listNodes |

### MCSManager-文件

- **描述**：MCSManager 文件管理
- **事件**：`message`
- **优先级**：5000

| 正则表达式 | 处理函数 |
|-----------|---------|
| `^#?(mcs\|MCS)\\s\*(文件列表\|files)\\s\*(\\d+)(?:\\s+(\\d+))?(?:\\s+(\[^\\s\]+))?$` | listFiles |
| `^#?(mcs\|MCS)\\s\*(下载文件\|download)\\s\*(\\d+)\\s+(.+)$` | downloadFile |

### MCSManager-帮助

- **描述**：显示MCSManager帮助信息
- **事件**：`message`
- **优先级**：5000

| 正则表达式 | 处理函数 |
|-----------|---------|
| `^#?(mcs\|MCS)(help\|帮助\|菜单)$` | help |

### MCSManager-信息

- **描述**：获取MCSManager面板信息
- **事件**：`message`
- **优先级**：5000

| 正则表达式 | 处理函数 |
|-----------|---------|
| `^#?(mcs\|MCS)\\s\*(概览\|overview)$` | overview |
| `^#?(mcs\|MCS)\\s\*(用户列表\|users)\\s\*(\\d+)?$` | users |

### MCSManager-实例管理

- **描述**：MCSManager 实例管理指令
- **事件**：`message`
- **优先级**：5000

| 正则表达式 | 处理函数 |
|-----------|---------|
| `^#?(mcs\|MCS)\\s\*(实例列表\|list)\\s\*(\[0-9\]\*)?$` | listInstances |
| `^#?(mcs\|MCS)\\s\*(实例信息\|info)\\s\*(\[a-zA-Z0-9\]+)$` | instanceInfo |
| `^#?(mcs\|MCS)\\s\*(启动\|start)\\s\*(\[a-zA-Z0-9\]+)$` | startInstance |
| `^#?(mcs\|MCS)\\s\*(停止\|stop)\\s\*(\[a-zA-Z0-9\]+)$` | stopInstance |
| `^#?(mcs\|MCS)\\s\*(重启\|restart)\\s\*(\[a-zA-Z0-9\]+)$` | restartInstance |
| `^#?(mcs\|MCS)\\s\*(强制结束\|kill)\\s\*(\[a-zA-Z0-9\]+)$` | killInstance |
| `^#?(mcs\|MCS)\\s\*(日志\|log)\\s\*(\[a-zA-Z0-9\]+)\\s\*(\\d+)?$` | viewLog |
| `^#?(mcs\|MCS)\\s\*(命令\|cmd)\\s\*(\[a-zA-Z0-9\]+)\\s\*(.+)$` | sendCommand |

### MCSManager-用户管理

- **描述**：管理MCSManager用户
- **事件**：`message`
- **优先级**：5000

| 正则表达式 | 处理函数 |
|-----------|---------|
| `^#?(mcs\|MCS)\\s\*(创建用户\|createuser)\\s\*.\*$` | createUser |
| `^#?(mcs\|MCS)\\s\*(删除用户\|deleteuser)\\s\*.\*$` | deleteUser |
| `^#?(mcs\|MCS)\\s\*(修改权限\|setperm)\\s\*.\*$` | changePermission |
| `^#?(mcs\|MCS)\\s\*(重置密码\|resetpwd)\\s\*.\*$` | resetPassword |


<!-- cmds-end -->
---

← [返回插件列表](./)
