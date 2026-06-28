# mctool-plugin

> 源码仓库：<https://github.com/yoimiya-kokomi/mctool-plugin>

### MCTool-用户

- **描述**：Minecraft用户管理
- **事件**：`message`
- **优先级**：-5000

| 正则表达式 | 处理函数 |
|-----------|---------|
| `^#?\[Mm\]\[Cc\]绑定\\s+mojang\\s+(.+)$` | bindUser |
| `^#?\[Mm\]\[Cc\]解绑\\s+(mojang\|littleskin)\\s+(.+)$` | unbindUser |
| `^#?\[Mm\]\[Cc\]信息$` | getUserInfo |
| `^#?\[Mm\]\[Cc\]查询绑定\\s+(mojang\|littleskin)\\s+(.+)$` | queryBinding |
| `^#?\[Mm\]\[Cc\]头像\\s\*(全身\|半身\|头部)?\\s\*(.+)?$` | generateAvatar |
| `^#?\[Mm\]\[Cc\](?:uuid\|uid\|id)(?:\\s+(.+))?$` | queryUUID |
| `^#mc皮肤渲染$` | renderSkin |
| `^#?\[Mm\]\[Cc\]绑定\\s+littleskin$` | bindLittleSkin |
| `^#?\[Mm\]\[Cc\]切换绑定\\s\*(全部\|mojang\|littleskin)$` | switchDisplayMode |

### MCTool_更新

- **描述**：调用Yunzai自带更新模块进行插件更新
- **事件**：`message`
- **优先级**：2000

| 正则表达式 | 处理函数 |
|-----------|---------|
| `^#?(mc工具\|mctool)(插件)?(强制)?更新$` | update |
| `^#?(mc工具\|mctool)(插件)?更新(日志\|记录)$` | update\_log |

### MCTool-服务器

- **描述**：Minecraft服务器管理
- **事件**：`message`
- **优先级**：5000

| 正则表达式 | 处理函数 |
|-----------|---------|
| `^#?\[Mm\]\[Cc\](添加\|add)\\s+\\S+\\s+\\S+\\s\*.\*$` | addServer |
| `^#?\[Mm\]\[Cc\](删除\|del)\\s+\\d+$` | deleteServer |
| `^#?\[Mm\]\[Cc\](状态\|status\|列表\|list)$` | getServerList |
| `^#?\[Mm\]\[Cc\](在线\|online)$` | getOnlinePlayers |
| `^#?\[Mm\]\[Cc\]motd(?:\\s+\\S+(?::\\d+)?)?$` | queryMotd |

### MCTool-验证

- **描述**：Minecraft玩家验证配置
- **事件**：`message`
- **优先级**：5000

| 正则表达式 | 处理函数 |
|-----------|---------|
| `^#?\[Mm\]\[Cc\]验证\\s\*$` | getVerificationStatus |
| `^#?\[Mm\]\[Cc\]验证\\s+(开启\|关闭)$` | toggleVerification |
| `^#?\[Mm\]\[Cc\]验证重复使用\\s+(开启\|关闭)$` | toggleDuplicateNames |
| `^#?\[Mm\]\[Cc\]验证拒绝\\s+(开启\|关闭)$` | toggleAutoReject |
| `^#?\[Mm\]\[Cc\]验证列表$` | listVerifiedUsers |
| `^#?\[Mm\]\[Cc\]验证删除\\s+(.+)$` | deleteVerification |

### MCTool-验证请求

- **描述**：Minecraft玩家验证请求处理
- **事件**：`request.group.add`
- **优先级**：5000

### MCTool-推送命令

- **描述**：Minecraft服务器推送命令
- **事件**：`message`
- **优先级**：5000

| 正则表达式 | 处理函数 |
|-----------|---------|
| `^#?\[Mm\]\[Cc\](开启\|关闭)推送\\s\*(\\d+)?$` | togglePush |
| `^#?\[Mm\]\[Cc\](开启\|关闭)新人推送\\s\*(\\d+)?$` | toggleNewPlayerAlert |
| `^#?\[Mm\]\[Cc\](开启\|关闭)状态推送\\s\*(\\d+)?$` | toggleServerStatusPush |
| `^#?\[Mm\]\[Cc\]推送玩家\\s+(\\d+)\\s+(\\S+)$` | configurePlayerPush |
| `^#?\[Mm\]\[Cc\]取消推送玩家\\s+(\\d+)\\s+(\\S+)$` | cancelPlayerPush |
| `^#?\[Mm\]\[Cc\]推送\\s\*$` | getPushConfig |

### MCTool-帮助

- **描述**：显示帮助信息
- **事件**：`message`
- **优先级**：5000

| 正则表达式 | 处理函数 |
|-----------|---------|
| `^#?\[Mm\]\[Cc\](tool\|工具)?(help\|帮助\|菜单)$` | help |
| `^#?\[Mm\]\[Cc\]mod帮助$` | mcmodHelp |

### MCTool-Mod

- **描述**：Minecraft Mod搜索
- **事件**：`message`
- **优先级**：5000

| 正则表达式 | 处理函数 |
|-----------|---------|
| `^#?\[Mm\]\[Cc\]mod(?:搜索\|查找\|查询)\\s+(.+)$` | searchModDefault |
| `^#?\[Mm\]\[Cc\]modrinth(?:搜索\|查找\|查询)\\s+(.+)$` | searchModrinthMod |
| `^#?\[Mm\]\[Cc\]modcurse(?:搜索\|查找\|查询)\\s+(.+)$` | searchCurseforgeMod |
| `^#?\[Mm\]\[Cc\]mod翻页$` | nextPage |
| `^#?\[Mm\]\[Cc\]mod信息\\s+(\\S+)$` | getModInfo |
| `^#?\[Mm\]\[Cc\]modrinth信息\\s+(\\d+)$` | getModrinthInfo |
| `^#?\[Mm\]\[Cc\]modcurse信息\\s+(\\d+)$` | getCurseforgeInfo |
| `^#?\[Mm\]\[Cc\]mod版本\\s+(\\S+)(?:\\s+(\[^\\s\]+))?(?:\\s+(\[^\\s\]+))?$` | getModVersions |
| `^#?\[Mm\]\[Cc\]modrinth版本\\s+(\\d+)(?:\\s+(\[^\\s\]+))?(?:\\s+(\[^\\s\]+))?$` | getModrinthVersions |
| `^#?\[Mm\]\[Cc\]modcurse版本\\s+(\\d+)(?:\\s+(\[^\\s\]+))?(?:\\s+(\[^\\s\]+))?$` | getCurseforgeVersions |
| `^#?\[Mm\]\[Cc\]mod版本翻页$` | nextVersionPage |
| `^#?\[Mm\]\[Cc\]mod下载\\s+(\\S+)(?:\\s+(\[\\S\]+))?(?:\\s+(\[\\S\]+))?$` | getModVersion |

### MCTool-工具

- **描述**：Minecraft工具集
- **事件**：`message`
- **优先级**：5000

| 正则表达式 | 处理函数 |
|-----------|---------|
| `^#?\[Mm\]\[Cc\]服务状态$` | checkServiceStatus |

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

### MCTool-推送

- **描述**：Minecraft服务器推送服务
- **事件**：`message`
- **优先级**：5000

| 正则表达式 | 处理函数 |
|-----------|---------|
| `^$` | noop |

---

← [返回插件列表](./)
