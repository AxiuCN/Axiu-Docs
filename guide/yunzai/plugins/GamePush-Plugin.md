# GamePush-Plugin

> 源码仓库：<https://gitcode.com/rainbowwarmth/GamePush-Plugin>

---

<div align="center">

![GamePush](https://img.shields.io/badge/GamePush-Plugin-blue?style=for-the-badge&logo=gamepad)
![Karin](https://img.shields.io/badge/Karin-Bot-green?style=for-the-badge&logo=robot)
![Miao-Yunzai](https://img.shields.io/badge/Miao-Yunzai-green?style=for-the-badge&logo=robot)
![TRSS-Yunzai](https://img.shields.io/badge/TRSS-Yunzai-green?style=for-the-badge&logo=robot)
![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)
![Node.js](https://img.shields.io/badge/Node.js-22+-brightgreen?style=for-the-badge&logo=node.js)

**🚀 游戏版本监控推送插件**

_实时监控游戏版本更新 | 自动推送预下载通知 | 支持多游戏平台_

</div>

---

### ✨ 功能特色

#### 🎯 支持游戏

- 🌟 **原神** (Genshin Impact)
- ⭐ **崩坏：星穹铁道** (Honkai: Star Rail)
- 🔥 **绝区零** (Zenless Zone Zero)
- ⚡ **崩坏 3** (Honkai Impact 3rd)
- 🌊 **鸣潮** (Wuthering Waves)

#### 🛠️ 核心功能

- 📱 **版本监控** - 实时检测游戏版本更新
- 🔔 **自动推送** - 版本更新及预下载通知
- ⚙️ **灵活配置** - 支持开启/关闭推送功能
- 🕐 **定时任务** - 自动定时检查更新
- 💾 **Redis 存储** - 高效的数据管理
- 🎛️ **Guoba、Karin-Web 支持** - 可视化配置界面

---

### 📦 安装指南

#### 前置要求

- ✅ [Miao-Yunzai](https://github.com/yoimiya-kokomi/Miao-Yunzai) , [TRSS-Yunzai](https://gitee.com/TimeRainStarSky/Yunzai), [Karin](https://github.com/KarinJS/Karin)
- ✅ [nodejs 22+](https://nodejs.org/zh-cn/download)
- ✅ [Redis 数据库](https://redis.io/)

#### 安装步骤

1. **克隆插件**

```bash
## 使用 Miao-Yunzai 和 TRSS-Yunzai
### 使用GitCode
git clone https://gitcode.com/rainbowwarmth/GamePush-Plugin.git ./plugins/GamePush-Plugin
### 使用Gitee
git clone https://gitee.com/rainbowwarmth/GamePush-Plugin.git ./plugins/GamePush-Plugin
### 使用CNB
git clone https://cnb.cool/rainbowwarmth/GamePush-Plugin.git ./plugins/GamePush-Plugin
### 使用GitHub
git clone https://github.com/rainbowwarmth/GamePush-Plugin.git ./plugins/GamePush-Plugin

## 使用 Karin
### 使用GitCode
git clone https://gitcode.com/rainbowwarmth/GamePush-Plugin.git ./plugins/karin-plugin-gamepush
### 使用Gitee
git clone https://gitee.com/rainbowwarmth/GamePush-Plugin.git ./plugins/karin-plugin-gamepush
### 使用CNB
git clone https://cnb.cool/rainbowwarmth/GamePush-Plugin.git ./plugins/karin-plugin-gamepush
### 使用GitHub
git clone https://github.com/rainbowwarmth/GamePush-Plugin.git ./plugins/karin-plugin-gamepush

```

2. **安装依赖**

```bash
pnpm install -P
```

3. **启动机器人**

```bash
## 重启Miao-Yunzai 或 TRSS-Yunzai 或 Karin 即可自动加载插件
```

---

### 🎮 使用指南

#### 基础命令

| 命令                  | 功能                       | 权限     | 特别说明              |
| --------------------- | -------------------------- | -------- | --------------------- |
| `#原神版本监控`       | 检查原神版本状态           | Master   |                       |
| `#原神开启版本推送`   | 开启原神版本推送           | Master   |                       |
| `#原神关闭版本推送`   | 关闭原神版本推送           | Master   |                       |
| `#原神当前版本`       | 查看原神当前版本           | 所有用户 |                       |
| `#原神版本数据`       | 查看原神历史版本更新大小   | 所有用户 |                       |
| `#星铁获取下载链接`   | 查看星铁当前版本下载链接   | 所有用户 | 原神、崩坏3不支持获取 |
| `#星铁获取预下载链接` | 查看星铁当前版本预下载链接 | 所有用户 | 原神、崩坏3不支持获取 |

#### 支持的游戏命令前缀

- 🌟 原神: `#` / `#原神` / `#ys` / `#YS`
- ⭐ 星铁: `*` / `#星铁` / `#sr` / `#SR`
- 🔥 绝区零: `%` / `#绝区零` / `#zzz` / `#ZZZ`
- ⚡ 崩坏 3: `!` / `#崩三` / `#bh3` / `#BH3`
- 🌊 鸣潮: `~` / `#鸣潮` / `#ww` / `#WW`

#### 管理命令

| 命令                        | 功能                       | 权限   |
| --------------------------- | -------------------------- | ------ |
| `#[游戏]删除rediskey`       | 删除游戏 Redis 键值        | Master |
| `#[游戏]删除预下载rediskey` | 删除预下载 Redis 键值      | Master |
| `#[游戏]设置rediskey`       | 设置游戏 Redis 键值        | Master |
| `#[游戏]设置预下载rediskey` | 设置游戏预下载 Redis 键值  | Master |
| `#更新游戏版本数据`         | 强制覆盖本地的游戏版本数据 | Master |

---

### ⚙️ 配置说明

#### 定时任务配置

插件支持自定义定时任务，默认每 5 分钟检查一次：

```javascript
// 默认配置
cron: "0 0/5 * * * *" // 每5分钟执行一次
```

#### Guoba 、Karin-web 可视化配置

插件支持 Guoba 插件和 Karin-Web 的可视化配置界面，可以通过 Web 界面进行：

- 🎛️ 推送开关设置
- ⏰ 定时任务配置

---

### 🏗️ 项目结构

```
GamePush-Plugin/
├── 📁 apps/           # 功能模块
│   ├── 🎮 ys.js       # 原神功能
│   ├── ⭐ sr.js       # 星铁功能
│   ├── 🔥 zzz.js      # 绝区零功能
│   ├── ⚡ bh3.js      # 崩坏3功能
│   ├── 🌊 ww.js       # 鸣潮功能
│   ├── ⚙️ set.js      # 设置管理
│   └── 📋 task.js     # 定时任务
├── 📁 components/     # 组件模块
├── 📁 lib/           # 工具库
├── 📁 model/         # 数据模型
├── 📁 resources/     # 资源文件
├── 🔧 index.js       # 入口文件
├── 🎛️ guoba.support.js # Guoba支持
├── 🎛️ web.config.js # Karin-Web 支持
└── 📦 package.json   # 项目配置
```

---

### 🔧 开发说明

#### 技术栈

- **框架**: [Miao-Yunzai](https://github.com/yoimiya-kokomi/Miao-Yunzai) 、 [TRSS-Yunzai](https://gitee.com/TimeRainStarSky/Yunzai) 、[Karin](https://github.com/KarinJS/Karin)
- **语言**: JavaScript (ES6+)
- **数据库**: [Redis](https://redis.io/)
- **任务调度**: Cron
- **配置管理**: Guoba 、Karin-Web

#### 核心特性

- 🔄 **模块化设计** - 每个游戏独立模块
- 📡 **API 监控** - 实时获取官方版本信息
- 💾 **数据持久化** - Redis 存储历史版本数据
- 🎯 **精准推送** - 避免重复通知
- ⚡ **高性能** - 异步处理，低资源占用

---

### 🤝 贡献指南

欢迎提交 Issue 和 Pull Request！

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

---

### 📄 许可证

本项目基于 [MIT License](LICENSE) 开源协议。

---

### 👨‍💻 作者

**rainbowwarmth**

- 🐙 GitHub: [@rainbowwarmth](https://github.com/rainbowwarmth)

---

### 🙏 致谢

感谢以下项目和开发者：

- [Miao-Yunzai](https://github.com/yoimiya-kokomi/Miao-Yunzai) - 强大的机器人框架
- [TRSS-Yunzai](https://gitee.com/TimeRainStarSky/Yunzai) - 强大的机器人框架
- [Karin](https://github.com/KarinJS/Karin) - 强大的机器人框架
- [Guoba-Plugin](https://github.com/guoba-yunzai/guoba-plugin) - 可视化配置支持

---

<div align="center">

**⭐ 如果这个项目对你有帮助，请给个 Star 支持一下！**

![Star History](https://img.shields.io/github/stars/rainbowwarmth/GamePush-Plugin?style=social)

</div>

<!-- cmds-start -->

### [GamePush-Plugin]原神功能

- **描述**：原神版本更新及预下载推送
- **事件**：`message`
- **优先级**：99

| 正则表达式 | 处理函数 |
|-----------|---------|
| `^#\*(ys\|YS\|原神)?版本监控$` | ysCheck |
| `^#\*(ys\|YS\|原神)?(开启\|关闭)版本推送$` | ysPushSet |
| `^#\*(ys\|YS\|原神)?当前版本$` | ysVer |
| `^#\*(ys\|YS\|原神)?版本数据(.\*)$` | ysVersionData |

### [GamePush-Plugin]崩坏3功能

- **描述**：崩坏3版本更新及预下载推送
- **事件**：`message`
- **优先级**：100

| 正则表达式 | 处理函数 |
|-----------|---------|
| `^#\*(!\|！\|崩坏三\|崩坏3\|崩三\|崩3\|bbb\|三崩子)?版本监控$` | bh3Check |
| `^#\*(!\|！\|崩坏三\|崩坏3\|崩三\|崩3\|bbb\|三崩子)?(开启\|关闭)版本推送$` | bh3PushSet |
| `^#\*(!\|！\|崩坏三\|崩坏3\|崩三\|崩3\|bbb\|三崩子)?当前版本$` | bh3Ver |
| `^#\*(!\|！\|崩坏三\|崩坏3\|崩三\|崩3\|bbb\|三崩子)?版本数据(.\*)$` | bh3VersionData |

### [GamePush-Plugin]主人功能

- **描述**：[GamePush-Plugin]主人功能
- **事件**：`message`
- **优先级**：100

| 正则表达式 | 处理函数 |
|-----------|---------|
| `/^#\*(?:(?:(ys\|YS\|原神)\|(\\\*\|星铁\|星轨\|穹轨\|星穹\|崩铁\|星穹铁道\|崩坏星穹铁道\|铁道)\|(%\|％\|绝区零\|zzz\|ZZZ\|绝区)\|(!\|！\|崩坏三\|崩坏3\|崩三\|崩3\|bbb\|三崩子)\|(~\|～\|鸣潮\|ww\|WW\|mc)\|(:\|：\|zmd\|终末地))\\s\*)?删除rediskey$/` | delkey |
| `/^#\*(?:(?:(ys\|YS\|原神)\|(\\\*\|星铁\|星轨\|穹轨\|星穹\|崩铁\|星穹铁道\|崩坏星穹铁道\|铁道)\|(%\|％\|绝区零\|zzz\|ZZZ\|绝区)\|(!\|！\|崩坏三\|崩坏3\|崩三\|崩3\|bbb\|三崩子)\|(~\|～\|鸣潮\|ww\|WW\|mc)\|(:\|：\|zmd\|终末地))\\s\*)?删除预下载rediskey$/` | delPrekey |
| `/^#\*(?:(?:(ys\|YS\|原神)\|(\\\*\|星铁\|星轨\|穹轨\|星穹\|崩铁\|星穹铁道\|崩坏星穹铁道\|铁道)\|(%\|％\|绝区零\|zzz\|ZZZ\|绝区)\|(!\|！\|崩坏三\|崩坏3\|崩三\|崩3\|bbb\|三崩子)\|(~\|～\|鸣潮\|ww\|WW\|mc)\|(:\|：\|zmd\|终末地))\\s\*)?设置rediskey\\s\*(.+)$/` | setkey |
| `/^#\*(?:(?:(ys\|YS\|原神)\|(\\\*\|星铁\|星轨\|穹轨\|星穹\|崩铁\|星穹铁道\|崩坏星穹铁道\|铁道)\|(%\|％\|绝区零\|zzz\|ZZZ\|绝区)\|(!\|！\|崩坏三\|崩坏3\|崩三\|崩3\|bbb\|三崩子)\|(~\|～\|鸣潮\|ww\|WW\|mc)\|(:\|：\|zmd\|终末地))\\s\*)?设置预下载rediskey\\s\*(.+)$/` | setPrekey |
| `#更新游戏版本数据` | updatedb |

### [GamePush-Plugin]崩坏:星穹铁道功能

- **描述**：崩坏:星穹铁道版本更新及预下载推送
- **事件**：`message`
- **优先级**：100

| 正则表达式 | 处理函数 |
|-----------|---------|
| `^#\*(\\\*\|星铁\|星轨\|穹轨\|星穹\|崩铁\|星穹铁道\|崩坏星穹铁道\|铁道)?版本监控$` | srCheck |
| `^#\*(\\\*\|星铁\|星轨\|穹轨\|星穹\|崩铁\|星穹铁道\|崩坏星穹铁道\|铁道)?(开启\|关闭)版本推送$` | srPushSet |
| `^#\*(\\\*\|星铁\|星轨\|穹轨\|星穹\|崩铁\|星穹铁道\|崩坏星穹铁道\|铁道)?当前版本$` | srVer |
| `^#\*(\\\*\|星铁\|星轨\|穹轨\|星穹\|崩铁\|星穹铁道\|崩坏星穹铁道\|铁道)?版本数据(.\*)$` | srVersionData |
| `^#\*(\\\*\|星铁\|星轨\|穹轨\|星穹\|崩铁\|星穹铁道\|崩坏星穹铁道\|铁道)获取下载链接$` | srDownloadLinks |
| `^#\*(\\\*\|星铁\|星轨\|穹轨\|星穹\|崩铁\|星穹铁道\|崩坏星穹铁道\|铁道)获取预下载链接$` | srPreDownloadLinks |

### [GamePush-Plugin]鸣潮功能

- **描述**：鸣潮版本更新及预下载推送
- **事件**：`message`
- **优先级**：100

| 正则表达式 | 处理函数 |
|-----------|---------|
| `^#\*(~\|～\|鸣潮\|ww\|WW\|mc)?版本监控$` | wwCheck |
| `^#\*(~\|～\|鸣潮\|ww\|WW\|mc)?(开启\|关闭)版本推送$` | wwPushSet |
| `^#\*(~\|～\|鸣潮\|ww\|WW\|mc)?当前版本$` | wwVer |
| `^#\*(~\|～\|鸣潮\|ww\|WW\|mc)?版本数据(.\*)$` | wwVersionData |
| `^#\*(~\|～\|鸣潮\|ww\|WW\|mc)获取下载链接$` | wwDownloadLinks |
| `^#\*(~\|～\|鸣潮\|ww\|WW\|mc)获取预下载链接$` | wwPreDownloadLinks |

### [GamePush-Plugin]终末地功能

- **描述**：终末地版本更新及预下载推送
- **事件**：`message`
- **优先级**：100

| 正则表达式 | 处理函数 |
|-----------|---------|
| `^#\*(:\|：\|zmd\|终末地)?版本监控$` | zmdCheck |
| `^#\*(:\|：\|zmd\|终末地)?(开启\|关闭)版本推送$` | zmdPushSet |
| `^#\*(:\|：\|zmd\|终末地)?当前版本$` | zmdVer |
| `^#\*(:\|：\|zmd\|终末地)?版本数据(.\*)$` | zmdVersionData |
| `^#\*(:\|：\|zmd\|终末地)获取下载链接$` | zmdDownloadLinks |
| `^#\*(:\|：\|zmd\|终末地)获取预下载链接$` | zmdPreDownloadLinks |

### [GamePush-Plugin]绝区零功能

- **描述**：绝区零版本更新及预下载推送
- **事件**：`message`
- **优先级**：100

| 正则表达式 | 处理函数 |
|-----------|---------|
| `^#\*(%\|％\|绝区零\|zzz\|ZZZ\|绝区)?版本监控$` | zzzCheck |
| `^#\*(%\|％\|绝区零\|zzz\|ZZZ\|绝区)?(开启\|关闭)版本推送$` | zzzPushSet |
| `^#\*(%\|％\|绝区零\|zzz\|ZZZ\|绝区)?当前版本$` | zzzVer |
| `^#\*(%\|％\|绝区零\|zzz\|ZZZ\|绝区)?版本数据(.\*)$` | zzzVersionData |
| `^#\*(%\|％\|绝区零\|zzz\|ZZZ\|绝区)获取下载链接$` | zzzDownloadLinks |
| `^#\*(%\|％\|绝区零\|zzz\|ZZZ\|绝区)获取预下载链接$` | zzzPreDownloadLinks |


<!-- cmds-end -->
---

← [返回插件列表](./)
