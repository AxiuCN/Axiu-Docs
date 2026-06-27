# TRSS-Yunzai

TRSS-Yunzai 是一个基于 Node.js 的 QQ 群聊机器人框架，基于 [Yunzai-Bot](https://github.com/Le-niao/Yunzai-Bot) 衍生。

本系列文档涵盖从零开始部署到日常使用的完整流程。

## 前置条件

- 一台有公网 IP 的服务器（或本地机器 + 内网穿透）
- Node.js 18+（推荐 22 LTS）
- Redis（用于缓存和状态存储）
- 一个 QQ 小号（用于机器人登录）

## 文档导航

| 文档 | 内容 |
|------|------|
| [部署安装](/guide/yunzai/install) | 环境准备、源码克隆、依赖安装、首次启动 |
| [配置说明](/guide/yunzai/config) | 基础配置、Redis 连接、登录协议选择 |
| [插件指南](/guide/yunzai/plugins) | 插件安装方法、常用插件推荐、锅巴面板接入 |

## 快速启动

如果你已有 Node.js 和 Redis 环境：

```bash
git clone https://github.com/TimeRainStarSky/Yunzai.git
cd Yunzai
npm install
node app
```

首次启动会生成配置文件，按提示填写后再次启动即可。
