# Git-Plugin

> 源码仓库：<https://github.com/yoimiya-kokomi/Git-Plugin>

### Git-Plugin-更新

- **描述**：无
- **事件**：`message`
- **优先级**：50

| 正则表达式 | 处理函数 |
|-----------|---------|
| `^\[#/!！\]?(?:gt\|git)(?:插件)?(?:安?静)?(?:强制)?更新$` | update |
| `^\[#/!！\]?(?:gt\|git)update$` | update |

### Git-Plugin-链接卡片

- **描述**：无
- **事件**：`message`
- **优先级**：500

| 正则表达式 | 处理函数 |
|-----------|---------|
| `/https?:\\/\\/(?:github\\.com\|gitee\\.com\|gitcode\\.com)\\/\[^\\s\\/#?\]+\\/\[^\\s\\/#?\]+(?:\[\\/?#\]\[^\\s\]\*)?/i` | resolveLink |

### Git-Plugin-帮助

- **描述**：无
- **事件**：`message`
- **优先级**：500

| 正则表达式 | 处理函数 |
|-----------|---------|
| `^\[#/!！\]?(gt帮助\|gthelp\|git帮助\|githelp)$` | help |

### Git-Plugin-查询

- **描述**：无
- **事件**：`message`
- **优先级**：500

| 正则表达式 | 处理函数 |
|-----------|---------|
| `^\[#/!！\]?(githubrepo\|gitcoderepo\|giteerepo\|gitearepo\|gitrepo)\\b` | repo |
| `^\[#/!！\]?(githubissue\|gitcodeissue\|giteeissue\|giteaissue\|gitissue)\\b` | issue |
| `^\[#/!！\]?(githubpr\|gitcodepr\|giteepr\|giteapr\|gitpr)\\b` | pull |
| `^\[#/!！\]?(githubreadme\|gitcodereadme\|giteereadme\|giteareadme\|gitreadme)\\b` | readme |
| `^\[#/!！\]?(githublimit\|gitcodelimit\|giteelimit\|gitealimit\|gitlimit)$` | rateLimit |

### Git-Plugin-设置

- **描述**：无
- **事件**：`message`
- **优先级**：500

| 正则表达式 | 处理函数 |
|-----------|---------|
| `^\[#/!！\]?(githubdefault\|gitcodedefault\|giteedefault\|giteadefault\|gitdefault)\\b` | setDefault |
| `^\[#/!！\]?gitlink\\b` | setLink |

### Git-Plugin-订阅

- **描述**：无
- **事件**：`message`
- **优先级**：500

| 正则表达式 | 处理函数 |
|-----------|---------|
| `^\[#/!！\]?(githubsub\|gitcodesub\|giteesub\|giteasub\|gitsub)\\b` | subscribe |
| `^\[#/!！\]?(githubunsub\|gitcodeunsub\|giteeunsub\|giteaunsub\|gitunsub)\\b` | unsubscribe |
| `^\[#/!！\]?gitlist(?:\\s+(github\|gitee\|gitcode\|gitea))?$` | list |

### Git-Plugin-订阅轮询

- **描述**：无
- **事件**：`message`
- **优先级**：1000

---

← [返回插件列表](./)
