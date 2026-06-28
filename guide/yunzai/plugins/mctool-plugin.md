# mctool-plugin

**插件：** MCTool-用户 / MCTool_更新 / MCTool-服务器 / MCTool-验证 / MCTool-验证请求 / MCTool-推送命令 / MCTool-帮助 / MCTool-Mod / MCTool-工具 / MCSManager-绑定 / MCSManager-守护进程 / MCSManager-文件 / MCSManager-帮助 / MCSManager-信息 / MCSManager-实例管理 / MCSManager-用户管理 / MCTool-推送

> 源码仓库：<https://github.com/yoimiya-kokomi/mctool-plugin>

**共 68 条指令：**

- `^#?[Mm][Cc]绑定\s+mojang\s+(.+)$`
- `^#?[Mm][Cc]解绑\s+(mojang|littleskin)\s+(.+)$`
- `^#?[Mm][Cc]信息$`
- `^#?[Mm][Cc]查询绑定\s+(mojang|littleskin)\s+(.+)$`
- `^#?[Mm][Cc]头像\s*(全身|半身|头部)?\s*(.+)?$`
- `^#?[Mm][Cc](?:uuid|uid|id)(?:\s+(.+))?$`
- `^#mc皮肤渲染$`
- `^#?[Mm][Cc]绑定\s+littleskin$`
- `^#?[Mm][Cc]切换绑定\s*(全部|mojang|littleskin)$`
- `^#?(mc工具|mctool)(插件)?(强制)?更新$`
- `^#?(mc工具|mctool)(插件)?更新(日志|记录)$`
- `^#?[Mm][Cc](添加|add)\s+\S+\s+\S+\s*.*$`
- `^#?[Mm][Cc](删除|del)\s+\d+$`
- `^#?[Mm][Cc](状态|status|列表|list)$`
- `^#?[Mm][Cc](在线|online)$`
- `^#?[Mm][Cc]motd(?:\s+\S+(?::\d+)?)?$`
- `^#?[Mm][Cc]验证\s*$`
- `^#?[Mm][Cc]验证\s+(开启|关闭)$`
- `^#?[Mm][Cc]验证重复使用\s+(开启|关闭)$`
- `^#?[Mm][Cc]验证拒绝\s+(开启|关闭)$`
- `^#?[Mm][Cc]验证列表$`
- `^#?[Mm][Cc]验证删除\s+(.+)$`
- `^#?[Mm][Cc](开启|关闭)推送\s*(\d+)?$`
- `^#?[Mm][Cc](开启|关闭)新人推送\s*(\d+)?$`
- `^#?[Mm][Cc](开启|关闭)状态推送\s*(\d+)?$`
- `^#?[Mm][Cc]推送玩家\s+(\d+)\s+(\S+)$`
- `^#?[Mm][Cc]取消推送玩家\s+(\d+)\s+(\S+)$`
- `^#?[Mm][Cc]推送\s*$`
- `^#?(mcs|MCS)(help|帮助|菜单)$`
- `^#?[Mm][Cc]mod帮助$`
- `^#?[Mm][Cc]mod(?:搜索|查找|查询)\s+(.+)$`
- `^#?[Mm][Cc]modrinth(?:搜索|查找|查询)\s+(.+)$`
- `^#?[Mm][Cc]modcurse(?:搜索|查找|查询)\s+(.+)$`
- `^#?[Mm][Cc]mod翻页$`
- `^#?[Mm][Cc]mod信息\s+(\S+)$`
- `^#?[Mm][Cc]modrinth信息\s+(\d+)$`
- `^#?[Mm][Cc]modcurse信息\s+(\d+)$`
- `^#?[Mm][Cc]mod版本\s+(\S+)(?:\s+([^\s]+))?(?:\s+([^\s]+))?$`
- `^#?[Mm][Cc]modrinth版本\s+(\d+)(?:\s+([^\s]+))?(?:\s+([^\s]+))?$`
- `^#?[Mm][Cc]modcurse版本\s+(\d+)(?:\s+([^\s]+))?(?:\s+([^\s]+))?$`
- `^#?[Mm][Cc]mod版本翻页$`
- `^#?[Mm][Cc]mod下载\s+(\S+)(?:\s+([\S]+))?(?:\s+([\S]+))?$`
- `^#?[Mm][Cc]服务状态$`
- `^#?(mcs|MCS)\s*(绑定信息|bindinfo)$`
- `^#?(mcs|MCS)\s*(解绑|unbind)$`
- `^#?(mcs|MCS)\s*(同步实例|syncinstances)$`
- `^#?(mcs|MCS)\s*(绑定|bind)\s*.*$`
- `^#?(mcs|MCS)\s*(添加节点|add-node)(?:\s+([\s\S]+))?$`
- `^#?(mcs|MCS)\s*(删除节点|del-node)\s*([\d]+)$`
- `^#?(mcs|MCS)\s*(连接节点|link-node)\s*([\d]+)$`
- `^#?(mcs|MCS)\s*(节点列表|nodes)$`
- `^#?(mcs|MCS)\s*(文件列表|files)\s*(\d+)(?:\s+(\d+))?(?:\s+([^\s]+))?$`
- `^#?(mcs|MCS)\s*(下载文件|download)\s*(\d+)\s+(.+)$`
- `^#?(mcs|MCS)\s*(概览|overview)$`
- `^#?(mcs|MCS)\s*(用户列表|users)\s*(\d+)?$`
- `^#?(mcs|MCS)\s*(实例列表|list)\s*([0-9]*)?$`
- `^#?(mcs|MCS)\s*(实例信息|info)\s*([a-zA-Z0-9]+)$`
- `^#?(mcs|MCS)\s*(启动|start)\s*([a-zA-Z0-9]+)$`
- `^#?(mcs|MCS)\s*(停止|stop)\s*([a-zA-Z0-9]+)$`
- `^#?(mcs|MCS)\s*(重启|restart)\s*([a-zA-Z0-9]+)$`
- `^#?(mcs|MCS)\s*(强制结束|kill)\s*([a-zA-Z0-9]+)$`
- `^#?(mcs|MCS)\s*(日志|log)\s*([a-zA-Z0-9]+)\s*(\d+)?$`
- `^#?(mcs|MCS)\s*(命令|cmd)\s*([a-zA-Z0-9]+)\s*(.+)$`
- `^#?(mcs|MCS)\s*(创建用户|createuser)\s*.*$`
- `^#?(mcs|MCS)\s*(删除用户|deleteuser)\s*.*$`
- `^#?(mcs|MCS)\s*(修改权限|setperm)\s*.*$`
- `^#?(mcs|MCS)\s*(重置密码|resetpwd)\s*.*$`
- `^$`


---

← [返回插件列表](./)
