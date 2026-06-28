# Axiu-Plugin

> 源码仓库：<https://github.com/AxiuCN/Axiu-Plugin>

---

## 安装插件

> 在Yunzai根目录执行命令安装
Github
``` bash 
git clone --depth=1 https://github.com/AxiuCN/Axiu-Plugin ./plugins/Axiu-Plugin/
```

- 安装依赖
``` bash
pnpm install --filter=Axiu-Plugin
```

### 说明
本插件阿修Axiu自用

<!-- cmds-start -->

### [Axiu-Plugin]重启管理

- **描述**：#重启 (MCS云崽实例)
- **事件**：`message`

| 正则表达式 | 处理函数 |
|-----------|---------|
| `^#重启$` | restart |

### [Axiu-Plugin] 自动入群审核

- **描述**：根据黑白名单自动处理加群申请，否则@其他管理员
- **事件**：`request.group.add`
- **优先级**：10

### [Axiu-Plugin]三路深渊排队链接获取

- **描述**：#排队
- **事件**：`message`
- **优先级**：10

| 正则表达式 | 处理函数 |
|-----------|---------|
| `^#排队$` | endgameQueue |


<!-- cmds-end -->
---

← [返回插件列表](./)
