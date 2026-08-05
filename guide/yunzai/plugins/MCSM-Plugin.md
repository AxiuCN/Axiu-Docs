# MCSM-Plugin / MCSManager + Minecraft 综合管理

> 源码仓库：<https://github.com/AxiuCN/MCSM-Plugin>

---

基于 Yunzai-Bot v3 的 MCSManager + Minecraft 综合管理插件（ESM，GPLv3）。合并重构自 Axiu-Plugin（重启/更新）、mcsmanager-plugin（面板绑定/实例管理）、mctool-plugin（MC 服务器）三个源插件，统一代码风格与数据存储。

## 指令说明

以下指令说明供 bot 使用者（群友 / 管理员）参考，标「主人」的指令仅机器主人可用。

### 面板绑定

首次使用实例管理前需先绑定 MCSManager 面板，绑定成功后即可用同一 QQ 直接操作面板下已分配的实例。

| 指令 | 权限 | 说明 |
|------|------|------|
| `#mcsm绑定 <URL> <API密钥>` | 所有人 | 绑定 MCSManager 面板，支持 `URL/密钥` 或 `URL 密钥` 两种写法，重复绑定会覆盖更新 |
| `#mcsm绑定信息` | 所有人 | 查看当前 QQ 的绑定信息（地址、密钥、默认实例等） |
| `#mcsm同步实例` | 所有人 | 同步面板用户下的实例列表，绑定后建议先执行 |
| `#mcsm解绑` | 所有人 | 解绑面板，删除当前 QQ 的绑定数据 |

### 实例管理

绑定并同步后，可用序号（1、2、3…，按实例列表顺序）或实例 UUID 指代实例操作。

| 指令 | 权限 | 说明 |
|------|------|------|
| `#mcsm实例列表 [页码]` | 所有人 | 实例列表（每页 10 个） |
| `#mcsm实例信息 <实例ID/序号>` | 所有人 | 实例详情（状态、配置等） |
| `#mcsm启动 <实例ID/序号>` | 所有人 | 启动实例，完成后发送启动日志 |
| `#mcsm停止 <实例ID/序号>` | 所有人 | 停止实例 |
| `#mcsm重启 <实例ID/序号>` | 所有人 | 重启实例 |
| `#mcsm强制结束 <实例ID/序号>` | 所有人 | 强制结束实例，需回复「确定」确认（30 秒超时） |
| `#mcsm日志 <实例ID/序号> [大小KB]` | 所有人 | 查看实例日志（默认 1000KB） |
| `#mcsm命令 <实例ID/序号> <命令>` | 所有人 | 向实例发送控制台命令 |

> 强制结束会直接 kill 进程，可能导致数据丢失，务必谨慎使用。

### MC 服务器

服务器列表按群存储，每个群独立维护自己的列表。

| 指令 | 权限 | 说明 |
|------|------|------|
| `#mc添加 <名称> <地址> [描述]` | 群管理员 | 添加 MC 服务器到本群列表 |
| `#mc删除 <ID>` | 群管理员 | 从本群列表移除服务器 |
| `#mc状态` / `#mc列表` | 所有人 | 查看本群服务器列表及在线状态、人数 |
| `#mc在线` | 所有人 | 查看本群服务器在线玩家列表 |
| `#mcmotd <地址[:端口]>` | 所有人 | 查询任意服务器 MOTD |

### Yunzai 自管理

以下命令与 Bot 本身相关，仅主人可用。

| 指令 | 权限 | 说明 |
|------|------|------|
| `#重启` | 主人 | 重启 Bot（MCSM API / 框架原生双路，MCSM 失败自动回退原生） |
| `#更新` | 主人 | 更新 Bot 本体 |
| `#更新 <插件名>` | 主人 | 更新指定插件 |
| `#强制更新 <插件名>` | 主人 | 强制还原并更新（git reset --hard） |
| `#全部更新` | 主人 | 更新 Bot 及所有插件 |
| `#更新日志 <插件名>` | 主人 | 查看插件更新日志 |

### 帮助

| 指令 | 权限 | 说明 |
|------|------|------|
| `#mcsm帮助` / `#mcsm菜单` | 所有人 | 渲染帮助面板 |

### 配置

首次启动自动从 `config.yaml.example` 复制到 `config.yaml`，锅巴后台「MCSM-Plugin」可视化配置；MC 服务器列表存于 `config/mc-server.yaml`。

```yaml
restart:
  enableMcsm: false          # 启用 MCSM 面板重启
  mcsmHost: '127.0.0.1'      # 面板地址
  mcsmPort: 23333            # 面板端口
  mcsmApiKey: ''             # API Key
  mcsmInstanceUuid: ''       # 云崽实例 UUID
  mcsmDaemonId: ''           # 守护进程 ID
  restartCron: []            # 定时重启 Cron
```

---

## 指令列表

<!-- cmds-start -->

### MCSM-自管理

- **描述**：MCSM云崽实例重启更新
- **事件**：`message`

| 正则表达式 | 处理函数 |
|-----------|---------|
| `^#重启$` | restart |
| `^#更新日志` | updateLog |
| `^#(安?静)?(强制)?更新` | update |
| `^#全部(安?静)?(强制)?更新$` | updateAll |

### MCSManager-绑定

- **描述**：绑定MCSManager实例
- **事件**：`message`
- **优先级**：5000

| 正则表达式 | 处理函数 |
|-----------|---------|
| `^#?(mcsm\|MCSM)\\s\*(绑定信息\|bindinfo)$` | info |
| `^#?(mcsm\|MCSM)\\s\*(解绑\|unbind)$` | unbind |
| `^#?(mcsm\|MCSM)\\s\*(同步实例\|syncinstances)$` | syncInstances |
| `^#?(mcsm\|MCSM)\\s\*(绑定\|bind)\\s\*.\*$` | bind |

### MCSManager-帮助

- **描述**：显示MCSManager帮助信息
- **事件**：`message`
- **优先级**：5000

| 正则表达式 | 处理函数 |
|-----------|---------|
| `^#?(mcsm\|MCSM)(help\|帮助\|菜单)$` | help |

### MCSManager-实例管理

- **描述**：MCSManager 实例管理指令
- **事件**：`message`
- **优先级**：5000

| 正则表达式 | 处理函数 |
|-----------|---------|
| `^#?(mcsm\|MCSM)\\s\*(实例列表\|list)\\s\*(\[0-9\]\*)?$` | listInstances |
| `^#?(mcsm\|MCSM)\\s\*(实例信息\|info)\\s\*(\[a-zA-Z0-9\]+)$` | instanceInfo |
| `^#?(mcsm\|MCSM)\\s\*(启动\|start)\\s\*(\[a-zA-Z0-9\]+)$` | startInstance |
| `^#?(mcsm\|MCSM)\\s\*(停止\|stop)\\s\*(\[a-zA-Z0-9\]+)$` | stopInstance |
| `^#?(mcsm\|MCSM)\\s\*(重启\|restart)\\s\*(\[a-zA-Z0-9\]+)$` | restartInstance |
| `^#?(mcsm\|MCSM)\\s\*(强制结束\|kill)\\s\*(\[a-zA-Z0-9\]+)$` | killInstance |
| `^#?(mcsm\|MCSM)\\s\*(日志\|log)\\s\*(\[a-zA-Z0-9\]+)\\s\*(\\d+)?$` | viewLog |
| `^#?(mcsm\|MCSM)\\s\*(命令\|cmd)\\s\*(\[a-zA-Z0-9\]+)\\s\*(.+)$` | sendCommand |

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


<!-- cmds-end -->

## 鸣谢

- [Axiu-Plugin](https://github.com/AxiuCN/Axiu-Plugin) — MCSManager 面板重启与 Bot 自更新
- [mcsmanager-plugin](https://github.com/A1Panda/mcsmanager-plugin) — 面板绑定、实例管理与用户管理
- [mctool-plugin](https://github.com/Dnyo666/mctool-plugin) — 节点管理、文件管理与 MC 服务器状态查询

---

← [返回插件列表](./)
