# 配置说明

TRSS-Yunzai 的配置文件位于项目根目录，首次启动后自动生成。

## 配置目录结构

```
Yunzai/
├── config/
│   ├── default_config/    # 默认配置（初始化时复制到用户配置）
│   ├── config/            # 用户配置（修改此处的文件）
│   └── other_config/      # 其他配置
```

## 核心配置项

### Redis 连接

需与本地 Redis 服务配置一致：

```yaml
# config/config/redis.yaml
redis:
  host: 127.0.0.1
  port: 6379
  password: ''      # 如果设置了密码才填
  db: 0
```

### QQ 登录

首次启动时会引导选择协议和登录方式。后续可在配置文件或通过命令修改。

支持的登录协议：

| 协议 | 说明 |
|------|------|
| icqq | 推荐，较稳定 |
| qsign | 需要签名服务 |

### 主人账号

设置主人 QQ 号，用于接收管理消息和最高权限控制：

```yaml
# config/config/user.yaml
master_qq:
  - '你的QQ号'
```

## 启动参数

```bash
# 前台运行（调试用）
node app

# 使用 pm2 后台运行
npm install -g pm2
pm2 start app.js --name yunzai
pm2 save
pm2 startup
```

## 锅巴面板接入

[锅巴面板（Guoba）](https://github.com/guoba-yunzai/guoba-plugin) 是云崽的 Web 管理面板。

安装后通过 `yunzai.axiu.uno/guoba` 访问。

```bash
# 在 Yunzai 根目录
git clone https://github.com/guoba-yunzai/guoba-plugin.git ./plugins/guoba-plugin/
npm install --prefix ./plugins/guoba-plugin/

# 重启机器人后访问 http://<服务器IP>:50831
```

## 下一步

配置完成后，查看[插件指南](/guide/yunzai/plugins)安装更多功能。
