# loveMys-plugin

> 源码仓库：<https://github.com/kissnavel/loveMys>

---

### 停更说明
1、本仓库全部功能已整合至：“<a href="https://github.com/kissnavel/genshin">genshin</a>”仓库，推荐使用此仓库。

2、本仓库将暂停更新，修复致命错误除外。

### 安装插件
在云崽根目录下打开终端，运行：
``` bash
git clone https://github.com/kissnavel/loveMys.git ./plugins/loveMys-plugin/
pnpm install --filter=loveMys-plugin
```

### 使用的平台
0：test_nine；1：ttocr.com；2：2captcha.com

### 使用插件
重启后在 config/api.yaml中按照平台文档填入type、api、resapi、key、query、resquery

### 说明
1、<a href="https://github.com/babanbang/loveMys">原仓库</a>，本仓库修改了部分功能，已添加国际服支持。

2、绑定设备需配合<a href="https://github.com/kissnavel/genshin">genshin</a>使用。

---

## 指令列表

<!-- cmds-start -->

### mys请求错误处理

- **描述**：无
- **事件**：`message`
- **优先级**：1

### [loveMys] 插件更新

- **描述**：[loveMys] 插件更新
- **事件**：`message`
- **优先级**：1

| 正则表达式 | 处理函数 |
|-----------|---------|
| `^#loveMys(插件)?(强制)?更新$` | update |
| `^#loveMys(插件)?更新日志$` | updateLog |


<!-- cmds-end -->
---

← [返回插件列表](./)
