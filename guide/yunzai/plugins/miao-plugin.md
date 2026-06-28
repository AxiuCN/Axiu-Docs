# miao-plugin

> 源码仓库：<https://github.com/AxiuCN/miao-plugin>

---

`miao-plugin`是一个`Yunzai-Bot`的升级插件，提供包括角色面板、角色查询等角色相关功能。

具体功能可在安装插件后 通过 `#喵喵帮助` 进行查看。如需进行设置则可通过 `#喵喵设置` 命令进行管理。

---

### 安装与更新

#### 使用Git安装（推荐）

请将 miao-plugin 放置在 Yunzai-Bot 的 plugins 目录下，重启 Yunzai-Bot 后即可使用。

请使用 git 进行安装，以方便后续升级。在 Yunzai-Bot 根目录夹打开终端，运行下述指令之一

```
// 使用 GitHub
git clone --depth=1 https://github.com/AxiuCN/miao-plugin.git plugins/miao-plugin
pnpm install -P

// 使用 Gitee
git clone --depth=1 https://gitee.com/AxiuCN/miao-plugin plugins/miao-plugin
pnpm install -P
```

进行安装。安装完毕后，管理员只需发送 `#喵喵更新` 即可自动更新 miao-plugin。

注：目前 Gitcode 源无法使用，需要换源，在云崽目录执行

```
// 使用 GitHub
git -C plugins/miao-plugin remote set-url origin https://github.com/AxiuCN/miao-plugin.git

// 使用 Gitee
git -C plugins/miao-plugin remote set-url origin https://gitee.com/AxiuCN/miao-plugin
```

#### 手工下载安装（不推荐）

手工下载安装包，解压后将`miao-plugin-master`更名为`miao-plugin`，然后放置在Yunzai的plugins目录内

虽然此方式能够使用，但无法使用`#喵喵更新`进行更新，不利于后续升级，故不推荐使用

---

### Yunzai版本与支持

`miao-plugin` 支持V3 / V2 版本的Yunzai-Bot

* [Miao-Yunzai](https://github.com/yoimiya-kokomi/Miao-Yunzai) : 喵版Yunzai [Gitee](https://gitee.com/yoimiya-kokomi/Miao-Yunzai)
  / [Github](https://github.com/yoimiya-kokomi/Miao-Yunzai) ，本体不含签到功能，功能迭代较多，与miao-plugin打通，只建议新部署/迁移
* [Yunzai-V3](https://github.com/yoimiya-kokomi/Yunzai-Bot) ：Yunzai V3 - 喵喵维护版，icqq版本，与原版Yunza功能基本一致，会保持卡池更新，功能相对稳定，可从原版Yunzai换源直接升级
* [Yunzai-V3](https://gitee.com/Le-niao/Yunzai-Bot) ：Yunzai V3 - 乐神原版，oicq版本，可能会遇到登录问题

---

### 功能说明

#### #雷神面板

使用指令 `#面板帮助` 即可了解如何使用此功能。

##### #更新面板

`#更新面板` 依赖于面板查询API，面板服务由 http://enka.network/ 提供。

> 查询功能经Enka官方授权([issue#63](https://github.com/yoimiya-kokomi/miao-plugin/issues/63#issuecomment-1199348789))，感谢Enka提供的面板查询服务
>
> 如果可以的话，也请在Patreon上支持Enka，或提供闲置的原神账户，具体可在[Enka官网](http://enka.network/) Discord联系
>
> [issue#63](https://github.com/yoimiya-kokomi/miao-plugin/issues/63#issuecomment-1199734496)

> 可尝试使用`MiniGG-Api`面板服务 [@MiniGrayGay](https://github.com/MiniGrayGay)<br>
> 发送 `#喵喵设置面板服务332` 修改国服&B服的面板查询由 `MiniGG-Api` 处理

##### #雷神伤害

喵喵面板附带的伤害计算功能由喵喵本地计算。如计算有偏差 #雷神伤害 查看伤害加成信息，如确认伤害计算有误可提供伤害录屏截图及uid进行反馈

##### #雷神圣遗物

圣遗物评分为喵喵版评分规则

---

**在有一定阅读理解能力基础下，建议阅读 [CHANGELOG.md](https://github.com/AxiuCN/miao-plugin/blob/main/CHANGELOG.md) 以了解更多内容。**

其余文档咕咕咕中

---

## 免责声明

1. `miao-plugin`自身的UI与代码均开放，无需征得特殊同意，可任意使用。能备注来源最好，但不强求
2. 以上声明但仅代表`miao-plugin`自身的范畴，请尊重Yunzai本体及其他插件作者的努力，勿将Yunzai及其他插件用于以盈利为目的的场景
3. miao-plugin的图片与其他素材均来自于网络，仅供交流学习使用，如有侵权请联系，会立即删除

## 资源

* [Miao-Yunzai](https://github.com/yoimiya-kokomi/Miao-Yunzai) : 喵版Yunzai [Gitee](https://gitee.com/yoimiya-kokomi/Miao-Yunzai)
  / [Github](https://github.com/yoimiya-kokomi/Miao-Yunzai)
* [Yunzai-V3](https://github.com/yoimiya-kokomi/Yunzai-Bot) ：Yunzai V3 - 喵喵维护版（使用 icqq）
* [Yunzai-V3](https://gitee.com/Le-niao/Yunzai-Bot) ：Yunzai V3 - 乐神原版（使用 oicq）
* [miao-plugin](https://github.com/yoimiya-kokomi/miao-plugin) : 喵喵插件 [Gitee](https://gitee.com/yoimiya-kokomi/miao-plugin)
  / [Github](https://github.com/yoimiya-kokomi/miao-plugin)

## 其他&感谢

* [Enka.Network](https://enka.network/): 感谢Enka提供的面板服务
* [Snap.Hutao](https://hut.ao/) : 感谢 DGP Studio 开发的 [胡桃 API](https://github.com/DGP-Studio/Snap.Hutao.Server)

<!-- cmds-start -->

### 喵喵:角色查询

- **描述**：角色查询
- **事件**：`message`
- **优先级**：50

| 正则表达式 | 处理函数 |
|-----------|---------|
| `/^#喵喵角色卡片$/` | character |
| `/^#\*(喵喵)?(上传\|添加)(.+)(照片\|写真\|图片\|图像)\\s\*$/` | uploadImg |
| `/^#\\s\*(老婆\|媳妇\|妻子\|娘子\|宝贝\|老公\|丈夫\|夫君\|郎君\|死鬼\|女朋友\|女友\|女神\|女王\|女票\|男朋友\|男友\|男神\|男票\|女儿\|闺女\|小宝贝\|儿子\|犬子)\\s\*(设置\|选择\|指定\|添加\|列表\|查询\|列表\|是\|是谁\|照片\|相片\|图片\|写真\|图像)?\\s\*(\[^\\d\]\*)\\s\*(\\d\*)$/` | wife |
| `/^#?(获取\|给我\|我要\|求\|发\|发下\|发个\|发一下)?原图(吧\|呗)?$/` | originalPic |

### 喵喵:戳一戳

- **描述**：戳一戳
- **事件**：`notice.*.poke`
- **优先级**：50

| 正则表达式 | 处理函数 |
|-----------|---------|
| `/.\*/` | pockWife |

### 喵喵:角色面板

- **描述**：角色面板
- **事件**：`message`
- **优先级**：50

| 正则表达式 | 处理函数 |
|-----------|---------|
| `/^#(星铁\|原神)?(面板角色\|角色面板\|面板)(列表)?\\s\*(\\d\{9,10\})?$/` | profileList |
| `/^#(?:星铁\|原神)?我的(.+?)(?:最高分\|最强)面板(\\d\*)\\s\*(.\*)$/` | profileMax |
| `/^#\*(\[^#\]+)\\s\*(详细\|详情\|面板\|面版\|圣遗物\|遗器\|武器\[1-7\]?\|伤害(\[1-9\]+\\d\*)?)\\s\*(\\d\{9,10\})\*(.\*\[换变改\].\*)?$/` | profileDetail |
| `/^#.+\[换补\]/` | profileChange |
| `/^#(星铁\|原神)?(群\|群内)?(排名\|排行)?(最强\|最高\|最高分\|最牛\|第一\|极限)+.+/` | groupProfile |
| `/^#(星铁\|原神)?(重置\|重设)(.\*)(排名\|排行)$/` | resetRank |
| `/^#(星铁\|原神)?(刷新\|更新\|重新加载)(群内\|群\|全部)\*(排名\|排行)$/` | refreshRank |
| `/^#(开启\|打开\|启用\|关闭\|禁用)(群内\|群\|全部)\*(排名\|排行)$/` | manageRank |
| `/^#(星铁\|原神)?(群\|群内)?.+(排名\|排行)(榜)?$/` | rankList |
| `/^#(星铁\|原神)?(.\*?)(圣遗物\|遗器)(全局)?(列表\|统计)\\s\*(.\*)$/` | artisList |
| `/^#(星铁\|原神)?(面板\|喵喵)?练度统计$/` | profileStat |
| `/^#\*(我的)\*(风\|岩\|雷\|草\|水\|火\|冰)\*(武器\|角色\|练度\|五\|四\|5\|4\|星)+(汇总\|统计\|列表)(force\|五\|四\|5\|4\|星)\*\[ \|0-9\]\*$/` | YzprofileStat |
| `/^#202\\d\{3\}(幻想\|真境\|剧诗\|幻想真境剧诗)练度统计$/` | profileRoleStat |
| `/^#202\\d\{3\}(幻想\|真境\|剧诗\|幻想真境剧诗)(角色\|练度)(汇总\|统计\|列表)\[ \|0-9\]\*$/` | YzprofileRoleStat |
| `/^#\*(我的)?(今日\|今天\|明日\|明天\|周.\*)?(\[五四54\]星)?(技能\|天赋)+(汇总\|统计\|列表)?\[ \|0-9\]\*$/` | talentStat |
| `/^#喵喵(角色\|查询)\[ \|0-9\]\*$/` | avatarList |
| `/^(#(五\|四\|5\|4\|星)\*(角色\|查询\|查询角色\|角色查询\|人物)\[ \|0-9\]\*$)\|(^(#\*uid\|#\*UID)\\+\*(18\|\[1-9\])\[0-9\]\{8\}$)\|(^#\[\\+\|＋\]\*(18\|\[1-9\])\[0-9\]\{8\})/` | YzavatarList |
| `/^#(星铁\|原神)?(强制)?(刷新\|更新)(所有\|角色)\*(天赋\|技能\|行迹)$/` | refreshTalent |
| `/^#(角色\|换\|更换)?面\[板版\]帮助$/` | profileHelp |
| `/^#(敌人\|怪物)等级\\s\*\\d\{1,3\}\\s\*$/` | enemyLv |
| `/^#(星铁\|原神)?(全部面板更新\|更新全部面板\|获取游戏角色详情\|更新面板\|面板更新)\\s\*(\\d\{9,10\})?$/` | profileRefresh |
| `/^#(星铁\|原神)?(米游社\|mys)(全部面板更新\|更新全部面板\|获取游戏角色详情\|更新面板\|面板更新)(\\d\{9,10\})?$/` | profileRefreshMys |
| `/^#?\\s\*(?:上传\|添加)(.+)(?:面板图)\\s\*$/` | uploadImg |
| `/^#?\\s\*(?:移除\|清除\|删除)(.+)(?:面板图)(\\d)\{1,\}\\s\*$/` | delProfile |
| `/^#?\\s\*(.+)(?:面板图列表)\\s\*$/` | profileImgList |
| `/^#(星铁\|原神)?(删除全部面板\|删除面板\|删除面板数据)\\s\*(\\d\{9,10\})?$/` | profileDel |
| `/^#(星铁\|原神)?(加载\|重新加载\|重载)面板\\s\*(\\d\{9,10\})?$/` | profileReload |

### 喵喵:深渊统计

- **描述**：深渊统计
- **事件**：`message`
- **优先级**：50

| 正则表达式 | 处理函数 |
|-----------|---------|
| `/^#(喵喵)?角色(持有\|持有率\|命座\|命之座\|.命)(分布\|统计\|持有\|持有率)?$/` | consStat |
| `/^#(喵喵)?(深渊\|幽境\|危战\|幽境危战)(第?.\{1,2\}层)?(角色)?(出场\|使用)(率\|统计)\*$/` | abyssPct |
| `/^#深渊(组队\|配队\|配对)$/` | abyssTeam |
| `/^#\*(喵喵\|上传\|本期)\*(深渊\|深境\|深境螺旋)\[ \|0-9\]\*(数据)?$/` | abyssSummary |
| `/^#\*(喵喵)\*(本期\|上期)?(幻想\|幻境\|剧诗\|幻想真境剧诗)\[ \|0-9\]\*(数据)?$/` | roleCombatSummary |
| `/^#\*(喵喵)\*(月谕\|越狱\|幻想\|幻境\|剧诗\|幻想真境剧诗)(圣牌\|卡片\|卡牌\|塔罗牌\|card\|tarot)(收藏\|收集)?\[ \|0-9\]\*(数据)?$/` | roleCard |
| `/^#\*(喵喵)\*(本期\|上期)?(幽境\|危战\|幽境危战)(单人\|单挑\|组队\|多人\|合作\|最佳)?\[ \|0-9\]\*(数据)?$/` | hardChallengeSummary |

### 喵喵:角色资料

- **描述**：角色资料
- **事件**：`message`
- **优先级**：50

| 正则表达式 | 处理函数 |
|-----------|---------|
| `/^#喵喵WIKI$/` | wiki |
| `/^(#\|喵喵)+(日历\|日历列表)$/` | calendar |
| `/^#(星铁)+(日历\|日历列表)$/` | calendarSr |
| `/^#(绝区零)+(日历\|日历列表)$/` | calendarZzz |
| `/^#(今日\|今天\|每日\|我的\|明天\|明日\|周(\[1-7\]\|一\|二\|三\|四\|五\|六\|日))\*(素材\|材料\|天赋)\[ \|0-9\]\*$/` | today |

### 喵喵:抽卡统计

- **描述**：抽卡统计
- **事件**：`message`
- **优先级**：50

| 正则表达式 | 处理函数 |
|-----------|---------|
| `/^#\*(星铁)?喵喵(抽卡\|抽奖\|角色\|武器\|光锥\|常驻\|集录\|up)+池?(记录\|祈愿\|分析)$/` | detail |
| `/^#\*(星铁)?(抽卡\|抽奖\|角色\|武器\|光锥\|常驻\|集录\|up)+池?(记录\|祈愿\|分析)$/` | Yzdetail |
| `/^#\*(星铁)?喵喵(全部\|抽卡\|抽奖\|角色\|武器\|光锥\|常驻\|集录\|up\|版本)+池?统计$/` | stat |
| `/^#\*(星铁)?(全部\|抽卡\|抽奖\|角色\|武器\|光锥\|常驻\|集录\|up\|版本)+池?统计$/` | Yzstat |

### 喵喵:喵喵设置

- **描述**：喵喵设置
- **事件**：`message`
- **优先级**：50

| 正则表达式 | 处理函数 |
|-----------|---------|
| `/^#喵喵(强制)?(更新图像\|图像更新)$/` | updateRes |
| `/^#喵喵(强制)?更新$/` | update |
| `/^#?喵喵更新日志$/` | updatelog |
| `/^#喵喵设置\\s\*(角色列表\|角色卡片\|深渊\|幻想真境剧诗\|月谕圣牌收藏\|幽境危战\|练度统计\|帮助\|抽卡\|戳一戳\|面板查询\|面板替换\|排名\|限制\|排行人数\|面板服务\|星铁面板服务\|面板图\|组队\|圣遗物数量\|图鉴\|天赋\|幻想数据库\|未实装\|图片\|卡通头像\|小清新\|渲染\|原图\|逗号)?\\s\*(.\*)$/` | sysCfg |
| `/^#喵喵api$/` | miaoApiInfo |

### 喵喵:喵喵帮助

- **描述**：喵喵帮助
- **事件**：`message`
- **优先级**：50

| 正则表达式 | 处理函数 |
|-----------|---------|
| `/^(\\/\|#)?(喵喵)?(命令\|帮助\|菜单\|help\|说明\|功能\|指令\|使用说明)$/` | help |
| `/^(\\/\|#)?喵喵版本$/` | version |


<!-- cmds-end -->
---

← [返回插件列表](./)
