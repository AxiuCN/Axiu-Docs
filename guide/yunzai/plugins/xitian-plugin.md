# xitian-plugin

> 源码仓库：<https://github.com/XiTianGame/xitian-plugin>

---

<div align=center>
 <img src ="https://img.shields.io/github/stars/XiTianGame/xitian-plugin?"/>
 <img src ="https://img.shields.io/github/issues/XiTianGame/xitian-plugin?logo=github"/>
 <img src ="https://img.shields.io/github/license/XiTianGame/xitian-plugin"/>
 <img src ="https://img.shields.io/github/languages/top/XiTianGame/xitian-plugin?logo=github"/>
</div>

## 插件管理器xitian-plugin

仅支持js类插件管理，~~不支持喵喵插件等大型插件管理~~

支持了一点，但不多(bushi)

### 已经实现的功能

- [x] 插件管理
    - [x] 查看全部插件
    - [x] 插件启用停用
    - [x] 插件删除恢复
    - [x] 插件重命名
    - [x] 插件查找
    - [x] 查看插件
- [x] 插件分组管理
    - [x] 创建删除分组
    - [x] 插件设置分组
    - [x] 同步plugins目录下的分组
- [x] 命令
    - [x] 命令总览
    - [x] 测试命令
- [x] 插件智能覆盖安装
- [x] 插件智能重命名
- [x] 更新插件
- [x] 插件管理权限控制
- [x] 插件核验
    - [x] V2插件识别
- [x] plugin插件管理
    - [x] 插件通过网址安装
    - [x] 删除git插件

#### 介绍
Yunzai-Bot V3 的插件
为用户提供插件管理功能
js插件可以从[插件库](https://gitee.com/Hikari666/Yunzai-Bot-plugins-index)或其他渠道获取

### 使用说明

#### 安装

在[yunzai-bot](https://gitee.com/Le-niao/Yunzai-Bot)文件夹根目录打开cmd

使用[github仓库](https://github.com/XiTianGame/xitian-plugin)
```bash
git clone --depth=1 https://github.com/XiTianGame/xitian-plugin.git ./plugins/xitian-plugin/
```

使用[gitee仓库](https://gitee.com/XiTianGame/xitian-plugin)(可能更新不及时)
```bash
git clone --depth=1 https://gitee.com/XiTianGame/xitian-plugin.git ./plugins/xitian-plugin/
```

#### 安装依赖

```bash
pnpm install --filter=xitian-plugin
```
ps：插件管理器会自动进行依赖安装

#### 帮助

插件加载完成后发送#插件帮助可以获取命令图

#### 更新

发送#插件更新进行插件管理器更新

或者在xitian-plugin目录打开cmd手动`git pull`

#### 链接

- [云崽](https://gitee.com/Le-niao/Yunzai-Bot)
- [插件库](https://gitee.com/yhArcadia/Yunzai-Bot-plugins-index)

#### 指令

| 功能 | 指令 | 作用 |
|----|----|----|
| 安装plugin插件 | #安装插件+仓库地址 | 从plugin仓库中克隆插件 |
| (批量)安装插件 | #(批量)安装插件 | 通过QQ发送一个或多个js插件来安装 |
| 停用/启用插件 | #停用/启用插件 | 暂时停用或启用一个插件 |
| 删除/恢复插件 | #删除/恢复插件 | 暂时将一个插件扔到回收站 |
| 删除plugin插件 | #删除插件+插件名(如xitian-plugin) | 删除plugin插件所有文件 |
| 彻底删除插件 | #彻底插件 | 将一个插件彻底删除 |
| 创建/删除分组 | #创建/删除分组 | 创建或删除一个插件分组 |
| (插件)设置分组 | #(插件)设置分组 | 设置一个插件的分组，便于管理 |
| 插件更新 | #插件(管理器)更新 | 更新插件管理器 |
| 插件帮助 | #插件(管理器)帮助 | 查看所有的指令 |

#### 其他

- 素材来源于网络，仅供交流学习使用
- 严禁用于商业和非法用途
- 暂无群号，出现问题可以提交issue（建议github，因为有邮件提醒）
- 最后求个star~

[![Star History Chart](https://api.star-history.com/svg?repos=XiTianGame/xitian-plugin&type=Date)](https://star-history.com/#XiTianGame/xitian-plugin&Date)

---

## 指令列表

<!-- cmds-start -->

### 分组

- **描述**：提供js插件分组管理
- **事件**：`message`
- **优先级**：5

| 正则表达式 | 处理函数 |
|-----------|---------|
| `^#分组列表$` | list |
| `^#创建分组(.\*)$` | new |
| `^#删除分组(.\*)$` | del |
| `^#(.\*)设置分组(.\*)$` | set |
| `^#同步分组$` | sync |

### 插件帮助

- **描述**：发送插件管理器使用帮助
- **事件**：`message`
- **优先级**：5

| 正则表达式 | 处理函数 |
|-----------|---------|
| `^#插件(管理器)?(菜单\|帮助\|help)$` | help |

### 插件安装

- **描述**：进行安装和新增插件操作
- **事件**：`message`
- **优先级**：5

| 正则表达式 | 处理函数 |
|-----------|---------|
| `^#(安装\|新增\|增加)插件(https://(github\|gitee).com/\[a-zA-Z0-9-\]\{1,39\}/\[a-zA-Z0-9\_-\]\{1,100\}(.git)?)?$` | new |
| `^#开始批量安装插件$` | batch |
| `^#清空回收站` | clear |

### 插件管理

- **描述**：各种功能帮助master管理js插件
- **事件**：`message`
- **优先级**：5

| 正则表达式 | 处理函数 |
|-----------|---------|
| `^#查找插件(.\*)$` | find |
| `^#停用插件(.\*)$` | mv\_ty |
| `^#启用插件(.\*)$` | mv\_qy |
| `^#(彻底)?删除插件(.\*)$` | del |
| `^#恢复插件(.\*)$` | rec |
| `^#插件(.\*)重命名(.\*)$` | rename |
| `^#查看插件(.\*)$` | upload |

### 插件测试

- **描述**：测试或查看全部命令
- **事件**：`message`
- **优先级**：500

| 正则表达式 | 处理函数 |
|-----------|---------|
| `^#命令(总览\|列表)$` | getrule |
| `^#测试(执行)?命令(.\*)$` | testrule |

### 更新插件

- **描述**：#更新 #强制更新
- **事件**：`message`
- **优先级**：4000

| 正则表达式 | 处理函数 |
|-----------|---------|
| `^#插件(管理器)?更新日志$` | updateLog |
| `^#插件(管理器)?(强制)\*更新$` | update |
| `^#插件(管理器)?版本$` | version |

### 插件列表

- **描述**：查看js和大型插件
- **事件**：`message`
- **优先级**：5000

| 正则表达式 | 处理函数 |
|-----------|---------|
| `^#插件列表$` | read |
| `^#查看回收站$` | look |


<!-- cmds-end -->
---

← [返回插件列表](./)
