# ZZZ-Plugin

> 源码仓库：<https://gitee.com/bietiaop/ZZZ-Plugin>

---

<p align="center">
  <a href="https://github.com/ZZZure/ZZZ-Plugin"><img src="https://s2.loli.net/2024/04/19/hOEDmsoUFy6nH5d.jpg" width="480" height="270" alt="ZZZ-Plugin"></a>
</p>
<h1 align="center">ZZZ-Plugin</h1>
<h4 align="center">🚧Yunzai 绝区零 Bot 插件 ｜ 交流群 973399270🚧</h4>

> [!tip]
> 说明
>
> 插件依靠社区维护，发起者随缘更新，但是 ZZZure 组织成员会对 PR 进行合并，你可以在 PR 页面@协助者进行合并。
>
> 在你使用之前请 **务必** 完整阅读 `README` 内容，如因无视 `README` 遇到的问题，在提问时难免遭受嘲笑。

## 安装

进入 Yunzai 根目录，请根据网络情况选择运行下述指令之一：

使用 github

```bash
git clone --depth=1 https://github.com/ZZZure/ZZZ-Plugin.git ./plugins/ZZZ-Plugin
```

使用 gitee

```bash
git clone --depth=1 https://gitee.com/bietiaop/ZZZ-Plugin.git ./plugins/ZZZ-Plugin
```

安装后重启 Yunzai 即可使用。

### 注意

刷新抽卡链接需要“[逍遥插件](https://github.com/ctrlcvs/xiaoyao-cvs-plugin)”支持。需要刷新抽卡链接功能请安装逍遥插件。

## 功能

以下所有功能前缀为：`#zzz`、`%`、`#ZZZ`、`#绝区零` 任选其一

<details>
<summary> 点击展开帮助图 </summary>
<p align="center">
  <img width="800" src="https://s2.loli.net/2025/06/03/8jfKHbOkMXgxVu7.jpg" title="帮助图片">
</p>
</details>

### 自定义评分权重、伤害计算

**自定义评分权重** 请查看 [此教程](https://github.com/ZZZure/ZZZ-Plugin/blob/dev/src/model/score/README.md)

**自定义伤害计算** 请查看 [此教程](https://github.com/ZZZure/ZZZ-Plugin/blob/dev/src/model/damage/README.md)

### 攻略、图鉴

**攻略、图鉴建议使用第三方插件**，本插件的攻略功能是在没有专业插件的情况下的保底功能。

推荐使用的图鉴插件：

- [Atlas](https://github.com/Nwflower/Atlas)
  Atlas 是一个适用于 V3 版本及以上 Yunzai-Bot 的图鉴查询插件，可通过 Yunzai-Bot 查询游戏图鉴，插件代码严格遵循 ES6 规范。
- [Mora-Plugin](https://gitee.com/Rrrrrrray/mora-plugin)
  Mora-Plugin 是一个 Yunzai-Bot 的插件 仅用于自我学习其他优秀插件

### 自定义面板图

> 注意：未自定义角色面板图时，若穿戴角色时装，立绘会自动显示为时装立绘。自定义面板图后该功能失效

将你下载的面板图放在 `zzz插件目录/resources/images/panel/[角色名称]/` 文件夹下。若文件夹不存在请自行创建。

**角色名称** 可以是 [米游社绳网情报站](https://baike.mihoyo.com/zzz/wiki/channel/map/2/43) 中显示的代理人 `简称` 或 `全称`，也可以是 [插件数据 PartnerId2Data](resources/map/PartnerId2Data.json) 中的 `name` 或 `full_name`。四个路径依序检测，取第一个存在的路径中的面板图

若要查看或者批量删除自定义面板图，请发送指令 `%帮助` 进行查看如何使用相关指令。

### 验证码

遭遇验证码是不可避免的，这是米游社保护账号的一种方式，机器人的所有请求在米游社看来都是非法的，因此 **大概率** 会遭遇验证码。

如果你需要绕过验证码，请使用第三方插件。或者到交流群里询问他人使用的方法（请务必声明你 **已经** 阅读过 `README` 内容）。

### 默认设备

发送 `%设置默认设备` 可修改本插件自带默认设备参数，或使用锅巴插件进行修改。

### 绑定设备

本插件会自带一个默认设备参数模拟真机进行请求，但是这个设备参数会被所有使用本插件的用户共同使用，因此 **大概率** 会遭遇账号异常，因此在遇到米游社抛出对应错误时，需要每个人绑定 **已经登陆米游社账号的常用设备参数** 进行请求。

如果需要绑定设备，请发送 `%绑定设备帮助` 进行查看如何绑定。第一种方法就是抓包，此种方法危害性较小，技术难度相对较高，但是 IOS 与 Android 设备通用。

使用方法二绑定设备操作方便，仅需下载一个 **开源软件** 复制设备信息即可，仅适用于 Android 设备，但是其他人会看到你的设备基本信息如型号、ID 标识符等，需要提醒用户慎重选择。

如果认为以上两种方法麻烦，你可以自己尝试探索出其他未发现的方法。

绑定设备 **无法 100%解决** 账号异常问题。

### 更新展柜面板

若通过默认的米游社更新面板遇见账号异常问题，可尝试 **%更新展柜面板**，这将调用 [Enka](https://enka.network/?zzz) 接口更新游戏内展示的角色的数据。如若通过此方法更新的角色数据与实际不一致，请 [提出 issue](https://github.com/ZZZure/ZZZ-Plugin/issues/new)

该服务可能偶尔无法使用，如更新展柜面板一直请求失败，可通过锅巴修改 `自定义enkaApi地址` 项来自定义请求链接，请求和返回与 Enka 格式一致皆可

### 角色图缺失

由于历史代码缘故，以前在游戏资源未更新就进行资源下载的可能导致角色图片缺失，你可以到插件资源目录手动删除对应文件，或者执行命令 `%删除全部资源` 进行删除。删除全部资源指令目前 **不会** 删除自定义面板图，仅会删除下载的图片资源，再次使用时需重新下载图片（自动下载）。

### 更新推送

如果你不需要更新推送，发送 `%关闭更新推送` 即可关闭更新推送，如果需要推送发送 `%开启更新推送` 即可开启更新推送。

此功能目前为默认关闭状态，如果你更新插件过早，可能会默认为开启状态，此时需要你发送指令进行关闭。

**此功能仅针对不及时更新插件并且到群里询问已解决的 bug 的用户。**

## 贡献

请先 `fork` 或切换至 本仓库 **dev 分支**，修改 **dev 分支** 并测试完成后提交 PR。

**请注意：**

> [!important]
> 请勿直接修改 **main** 分支的 dist 等编译产物；请基于 dev 分支修改并提交 PR，CI 会自动编译 ts 并同步到 main。
> 
> 请勿直接修改 **resources** 下的 css 编译产物；请基于 dev 分支对应的 scss 文件修改并提交，CI 会自动编译 scss 并同步到 main。

### 开发规范

* 提交前请确保本地已运行 `pnpm check`，能够成功通过且无报错

* 代码风格请参考 [eslint.config.mjs](https://gitee.com/bietiaop/ZZZ-Plugin/blob/main/eslint.config.mjs)
  * 代码自检：`pnpm lint`
  * 自动修复：`pnpm lint:fix`

### TS 环境、编译

* 在宿主环境下（如将插件安装于 Miao-Yunzai 中进行开发），可使用 [tsconfig.json](https://gitee.com/bietiaop/ZZZ-Plugin/blob/main/tsconfig.json) 作为 ts 环境配置
  * 全部编译：`pnpm build`
  * 监听编译：`pnpm watch`

* 在脱离宿主环境下（如独立开发或在 github actions 中编译），可使用 [tsconfig.src.json](https://gitee.com/bietiaop/ZZZ-Plugin/blob/main/tsconfig.src.json) 作为 ts 环境配置
  * 全部编译：`pnpm build:src`
  * 监听编译：`pnpm watch:src`

### SCSS 编译

* 本项目的样式使用 scss 编写

* 项目的 scss 文件集中在 [resources](https://gitee.com/bietiaop/ZZZ-Plugin/tree/main/resources) 的子目录，开发时请编写/修改 scss，请勿提交 css
  * 全部编译：`pnpm build:css`
  * 监听编译：`pnpm watch:css`

## 鸣谢

- 特别鸣谢 **[Wuyi 无疑](https://github.com/KimigaiiWuyi)** 为 `ZZZeroUID` 和 `ZZZ-Plugin` 作出的巨大贡献！本插件的功能按照 **Wuyi 无疑** 的设计进行编写。欢迎给本仓库以及 [`ZZZeroUID`](https://github.com/ZZZure/ZZZeroUID) 点个 Star！
- 特别鸣谢以下攻略作者：
  - 新艾利都快讯
  - 清茶沐沐 Kiyotya
  - 小橙子阿
  - 猫冬
  - 月光中心

### 仓库贡献者

<a href="https://github.com/ZZZure/ZZZ-Plugin/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=ZZZure/ZZZ-Plugin" />
</a>

### Reportbeats

![Alt](https://repobeats.axiom.co/api/embed/613a1e7717c6651ca1b725ceb710f6dc03fdb937.svg "Repobeats analytics image")

### Star History

[![Star History Chart](https://api.star-history.com/svg?repos=ZZZure/ZZZ-Plugin&type=Date)](https://star-history.com/#ZZZure/ZZZ-Plugin&Date)

## 其他

- 本项目仅供学习使用，请勿用于商业用途
- [GPL-3.0 License](https://gitee.com/bietiaop/ZZZ-Plugin/blob/main/LICENSE)

<!-- cmds-start -->

### [ZZZ-Plugin]abyss

- **描述**：zzz式舆防卫战
- **事件**：`message`
- **优先级**：70

| 正则表达式 | 处理函数 |
|-----------|---------|
| `^((#\|%\|/)?(zzz\|ZZZ\|绝区零))(上期\|往期)?(式舆防卫战\|式舆\|深渊\|防卫战\|防卫)$` | abyss |

### [ZZZ-Plugin]Calendar

- **描述**：zzzCalendar
- **事件**：`message`
- **优先级**：70

| 正则表达式 | 处理函数 |
|-----------|---------|
| `^((#\|%\|/)?(zzz\|ZZZ\|绝区零))(cal\|日历)$` | calendar |

### [ZZZ-Plugin]Card

- **描述**：zzzcard
- **事件**：`message`
- **优先级**：70

| 正则表达式 | 处理函数 |
|-----------|---------|
| `^((#\|%\|/)?(zzz\|ZZZ\|绝区零))(card\|卡片\|个人信息\|角色)$` | card |

### [ZZZ-Plugin]climbingTower

- **描述**：zzz爬塔
- **事件**：`message`
- **优先级**：70

| 正则表达式 | 处理函数 |
|-----------|---------|
| `^((#\|%\|/)?(zzz\|ZZZ\|绝区零))(拟真鏖战试炼\|鏖战\|爬塔)$` | climbingTower |

### [ZZZ-Plugin]Code

- **描述**：zzzcode
- **事件**：`message`
- **优先级**：70

| 正则表达式 | 处理函数 |
|-----------|---------|
| `^((#\|%\|/)?(zzz\|ZZZ\|绝区零))(code\|兑换码)$` | code |

### [ZZZ-Plugin]Damage

- **描述**：zzzdamage
- **事件**：`message`
- **优先级**：70

| 正则表达式 | 处理函数 |
|-----------|---------|
| `^((#\|%\|/)?(zzz\|ZZZ\|绝区零))(.+)伤害\\d\*$` | charDamagePanel |

### [ZZZ-Plugin]deadly

- **描述**：zzz危局强袭战
- **事件**：`message`
- **优先级**：70

| 正则表达式 | 处理函数 |
|-----------|---------|
| `^((#\|%\|/)?(zzz\|ZZZ\|绝区零))(上期\|往期)?(危局强袭战\|危局\|强袭\|强袭战)$` | deadly |

### [ZZZ-Plugin]explorationDetail

- **描述**：zzz区域收集
- **事件**：`message`
- **优先级**：70

| 正则表达式 | 处理函数 |
|-----------|---------|
| `^((#\|%\|/)?(zzz\|ZZZ\|绝区零))(区域收集\|收集\|探索\|探索度)$` | explorationDetail |

### [ZZZ-Plugin]GachaLog

- **描述**：zzzGachaLog
- **事件**：`message`
- **优先级**：70

| 正则表达式 | 处理函数 |
|-----------|---------|
| `^^((#\|%\|/)?(zzz\|ZZZ\|绝区零))抽卡帮助$` | gachaHelp |
| `^((#\|%\|/)?(zzz\|ZZZ\|绝区零))抽卡链接$` | startGachaLog |
| `^((#\|%\|/)?(zzz\|ZZZ\|绝区零))(刷新\|更新)抽卡(链接\|记录)?$` | refreshGachaLog |
| `^^((#\|%\|/)?(zzz\|ZZZ\|绝区零))抽卡(分析\|记录\|统计)$` | gachaLogAnalysis |
| `^^((#\|%\|/)?(zzz\|ZZZ\|绝区零))获取抽卡链接$` | getGachaLink |

### [ZZZ-Plugin]Guide

- **描述**：#zzz角色攻略
- **事件**：`message`
- **优先级**：70

| 正则表达式 | 处理函数 |
|-----------|---------|
| `^^((#\|%\|/)?(zzz\|ZZZ\|绝区零))攻略(说明\|帮助)$` | GuideHelp |
| `^((#\|%\|/)?(zzz\|ZZZ\|绝区零))(更新)?\\S+攻略(\\d+\|all)?$` | Guide |

### [ZZZ-Plugin]Help

- **描述**：zzzhelp
- **事件**：`message`
- **优先级**：70

| 正则表达式 | 处理函数 |
|-----------|---------|
| `^((#\|%\|/)?(zzz\|ZZZ\|绝区零))(帮助\|help)$` | help |

### [ZZZ-Plugin]hollowZero

- **描述**：zzz零号空洞
- **事件**：`message`
- **优先级**：70

| 正则表达式 | 处理函数 |
|-----------|---------|
| `^((#\|%\|/)?(zzz\|ZZZ\|绝区零))(零号空洞\|零号\|空洞)$` | hollowZeroHelp |
| `^((#\|%\|/)?(zzz\|ZZZ\|绝区零))(枯萎苗圃\|枯萎\|苗圃)$` | hollowZero |
| `^((#\|%\|/)?(zzz\|ZZZ\|绝区零))(迷失之地\|迷失)$` | hollowZeroS2 |

### [ZZZ-Plugin]Manage

- **描述**：zzzmanage
- **事件**：`message`
- **优先级**：70

| 正则表达式 | 处理函数 |
|-----------|---------|
| `^((#\|%\|/)?(zzz\|ZZZ\|绝区零))下载(全部\|所有)资源$` | downloadAll |
| `^((#\|%\|/)?(zzz\|ZZZ\|绝区零))删除(全部\|所有)资源$` | deleteAll |
| `^((#\|%\|/)?(zzz\|ZZZ\|绝区零))设置默认攻略(\\d+\|all)$` | setDefaultGuide |
| `^((#\|%\|/)?(zzz\|ZZZ\|绝区零))设置所有攻略显示个数(\\d+)$` | setMaxForwardGuide |
| `^((#\|%\|/)?(zzz\|ZZZ\|绝区零))设置渲染精度(\\d+)$` | setRenderPrecision |
| `^((#\|%\|/)?(zzz\|ZZZ\|绝区零))刷新抽卡间隔(\\d+)$` | setRefreshGachaInterval |
| `^((#\|%\|/)?(zzz\|ZZZ\|绝区零))刷新面板间隔(\\d+)$` | setRefreshPanelInterval |
| `^((#\|%\|/)?(zzz\|ZZZ\|绝区零))刷新角色间隔(\\d+)$` | setRefreshCharInterval |
| `^((#\|%\|/)?(zzz\|ZZZ\|绝区零))添加(\\S+)别名(\\S+)$` | addAlias |
| `^((#\|%\|/)?(zzz\|ZZZ\|绝区零))删除别名(\\S+)$` | deleteAlias |
| `^((#\|%\|/)?(zzz\|ZZZ\|绝区零))(上传\|添加)(\\S+)(角色\|面板)图$` | uploadCharacterImg |
| `^((#\|%\|/)?(zzz\|ZZZ\|绝区零))(获取\|查看)(\\S+)(角色\|面板)图(\\d+)?$` | getCharacterImages |
| `^((#\|%\|/)?(zzz\|ZZZ\|绝区零))删除(\\S+)(角色\|面板)图(.+)$` | deleteCharacterImg |
| `^((#\|%\|/)?(zzz\|ZZZ\|绝区零))(开启\|打开\|on\|启用\|启动\|关闭\|关掉\|off\|禁用\|停止)群(内)?(式舆防卫战\|式舆\|深渊\|防卫战\|防卫\|危局强袭战\|危局\|强袭\|强袭战\|临界推演\|临界\|推演)排名$` | switchGroupRank |
| `^((#\|%\|/)?(zzz\|ZZZ\|绝区零))(插件)?版本$` | getChangeLog |
| `^^((#\|%\|/)?(zzz\|ZZZ\|绝区零))(插件)?更新日志$` | getCommitLog |
| `^^((#\|%\|/)?(zzz\|ZZZ\|绝区零))(插件)?检查更新$` | hasUpdate |
| `^((#\|%\|/)?(zzz\|ZZZ\|绝区零))设置默认设备` | setDefaultDevice |
| `^((#\|%\|/)?(zzz\|ZZZ\|绝区零))(开启\|关闭)更新推送$` | enableAutoUpdatePush |
| `^((#\|%\|/)?(zzz\|ZZZ\|绝区零))设置检查更新时间(.+)$` | setCheckUpdateCron |
| `^((#\|%\|/)?(zzz\|ZZZ\|绝区零))(重置\|清空)(式舆防卫战\|式舆\|深渊\|防卫战\|防卫)排名$` | resetGroupRank |

### [ZZZ-Plugin]Monthly

- **描述**：zzz monthly
- **事件**：`message`
- **优先级**：70

| 正则表达式 | 处理函数 |
|-----------|---------|
| `^((#\|%\|/)?(zzz\|ZZZ\|绝区零))(monthly\|菲林\|邦布券\|收入\|月报)((\\d\{4\})年)?((\\d\{1,2\}\|上)月)?$` | monthly |
| `^((#\|%\|/)?(zzz\|ZZZ\|绝区零))(monthly\|菲林\|邦布券\|收入\|月报)统计$` | monthlyCollect |

### [ZZZ-Plugin]Note

- **描述**：zzznote
- **事件**：`message`
- **优先级**：70

| 正则表达式 | 处理函数 |
|-----------|---------|
| `^((#\|%\|/)?(zzz\|ZZZ\|绝区零))(note\|每日\|体力\|便笺\|便签)$` | note |

### [ZZZ-Plugin]Panel

- **描述**：zzzpanel
- **事件**：`message`
- **优先级**：70

| 正则表达式 | 处理函数 |
|-----------|---------|
| `^((#\|%\|/)?(zzz\|ZZZ\|绝区零))(.\*)面板(展柜)?(刷新\|更新\|列表)?$` | handleRule |
| `^((#\|%\|/)?(zzz\|ZZZ\|绝区零))练度(统计)?$` | proficiency |
| `^((#\|%\|/)?(zzz\|ZZZ\|绝区零))原图$` | getCharOriImage |

### [ZZZ-Plugin]PoolHistory

- **描述**：查询绝区零全角色/武器卡池记录
- **事件**：`message`
- **优先级**：70

| 正则表达式 | 处理函数 |
|-----------|---------|
| `^((#\|%\|/)?(zzz\|ZZZ\|绝区零)).+(复刻\|卡池)(统计\|记录\|历史)$` | dispatchHandler |
| `^((#\|%\|/)?(zzz\|ZZZ\|绝区零))(当前\|本期\|当期)?卡池$` | queryCurrentPool |
| `^((#\|%\|/)?(zzz\|ZZZ\|绝区零))(复刻\|卡池)(统计\|记录\|历史)$` | queryAllPool |
| `^((#\|%\|/)?(zzz\|ZZZ\|绝区零))v?(\\d+\\.\\d+)(上半\|下半)?卡池$` | queryVersionPool |

### [ZZZ-Plugin]rank

- **描述**：zzz群排名
- **事件**：`message`
- **优先级**：70

| 正则表达式 | 处理函数 |
|-----------|---------|
| `^((#\|%\|/)?(zzz\|ZZZ\|绝区零))(式舆防卫战\|式舆\|深渊\|防卫战\|防卫)排名$` | abyssRank |
| `^((#\|%\|/)?(zzz\|ZZZ\|绝区零))(危局强袭战\|危局\|强袭\|强袭战)排名$` | deadlyRank |
| `^((#\|%\|/)?(zzz\|ZZZ\|绝区零))(临界推演\|临界\|推演)排名$` | voidFrontBattleRank |
| `^((#\|%\|/)?(zzz\|ZZZ\|绝区零))(爬塔\|鏖战)排名$` | climbingTowerHelp |
| `^((#\|%\|/)?(zzz\|ZZZ\|绝区零))(爬塔S1\|爬塔s1\|拟真鏖战试炼)排名$` | climbingTowerS1 |
| `^((#\|%\|/)?(zzz\|ZZZ\|绝区零))(爬塔S2\|爬塔s2\|鏖战试炼末路\|鏖战试炼：末路\|鏖战试炼:末路)排名$` | climbingTowerS2 |
| `^((#\|%\|/)?(zzz\|ZZZ\|绝区零))(爬塔S3\|爬塔s3\|鏖战试炼荣耀\|鏖战试炼：荣耀\|鏖战试炼:荣耀)排名$` | climbingTowerS3 |
| `^((#\|%\|/)?(zzz\|ZZZ\|绝区零))(爬塔S4\|爬塔s4\|鏖战试炼狂澜\|鏖战试炼：狂澜\|鏖战试炼:狂澜)排名$` | climbingTowerS4 |
| `^((#\|%\|/)?(zzz\|ZZZ\|绝区零))(显示\|展示\|开启\|打开\|on\|启用\|启动\|隐藏\|取消显示\|关闭\|关掉\|off\|禁用\|停止)(式舆防卫战\|式舆\|深渊\|防卫战\|防卫\|危局强袭战\|危局\|强袭\|强袭战\|临界推演\|临界\|推演\|爬塔S1\|爬塔S2\|爬塔S3\|爬塔 s1\|爬塔 s2\|爬塔 s3\|爬塔s1\|爬塔s2\|爬塔s3)?(群(内)?)?排名$` | switchRank |

### [ZZZ-Plugin]Remind

- **描述**：式舆防卫战/危局强袭战未完成提醒
- **事件**：`message`
- **优先级**：70

| 正则表达式 | 处理函数 |
|-----------|---------|
| `^((#\|%\|/)?(zzz\|ZZZ\|绝区零))(开启\|关闭)挑战提醒$` | setSubscribeEnable |
| `^((#\|%\|/)?(zzz\|ZZZ\|绝区零))(开启\|启用\|关闭\|禁用)全局挑战提醒$` | setGlobalRemindEnable |
| `^((#\|%\|/)?(zzz\|ZZZ\|绝区零))设置(全局)?式舆阈值\\s\*(\\d+)` | setAbyssThreshold |
| `^((#\|%\|/)?(zzz\|ZZZ\|绝区零))设置(全局)?危局阈值\\s\*(\\d+)` | setDeadlyThreshold |
| `^((#\|%\|/)?(zzz\|ZZZ\|绝区零))查询挑战状态$` | checkNow |
| `^((#\|%\|/)?(zzz\|ZZZ\|绝区零))设置个人提醒时间\\s\*(每日\\d+时(?:(\\d+)分)?\|每周.\\d+时(?:(\\d+)分)?)` | setMyRemindTime |
| `^((#\|%\|/)?(zzz\|ZZZ\|绝区零))个人提醒(状态\|时间)$` | viewMyRemindTime |
| `^((#\|%\|/)?(zzz\|ZZZ\|绝区零))(重置\|删除\|取消)个人提醒时间` | deleteMyRemindTime |
| `^((#\|%\|/)?(zzz\|ZZZ\|绝区零))设置全局提醒时间\\s\*(每日\\d+时(?:(\\d+)分)?\|每周.\\d+时(?:(\\d+)分)?)` | setGlobalRemindTime |
| `^((#\|%\|/)?(zzz\|ZZZ\|绝区零))全局提醒时间$` | viewGlobalRemindTime |

### [ZZZ-Plugin]Update

- **描述**：zzzupdate
- **事件**：`message`
- **优先级**：70

| 正则表达式 | 处理函数 |
|-----------|---------|
| `^^((#\|%\|/)?(zzz\|ZZZ\|绝区零))(插件)?(强制)?更新(插件)?$` | update |

### [ZZZ-Plugin]User

- **描述**：zzzuser
- **事件**：`message`
- **优先级**：70

| 正则表达式 | 处理函数 |
|-----------|---------|
| `^((#\|%\|/)?(zzz\|ZZZ\|绝区零))绑定设备$` | bindDevice |
| `^((#\|%\|/)?(zzz\|ZZZ\|绝区零))解绑设备$` | deleteBind |
| `^((#\|%\|/)?(zzz\|ZZZ\|绝区零))绑定设备帮助$` | bindDeviceHelp |

### [ZZZ-Plugin]voidFrontBattle

- **描述**：zzz临界推演
- **事件**：`message`
- **优先级**：70

| 正则表达式 | 处理函数 |
|-----------|---------|
| `^((#\|%\|/)?(zzz\|ZZZ\|绝区零))(上期\|往期)?(临界推演\|临界\|推演)$` | voidFrontBattle |

### [ZZZ-Plugin]wiki

- **描述**：zzzWiki
- **事件**：`message`
- **优先级**：70

| 正则表达式 | 处理函数 |
|-----------|---------|
| `^((#\|%\|/)?(zzz\|ZZZ\|绝区零))(.\*)(天赋\|技能)(.\*)$` | skills |
| `^((#\|%\|/)?(zzz\|ZZZ\|绝区零))(.\*)(意象影画\|意象\|影画\|命座)$` | cinema |


<!-- cmds-end -->
---

← [返回插件列表](./)
