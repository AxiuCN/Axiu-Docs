# 部署安装

本文档从零开始，在 Linux 服务器上部署 TRSS-Yunzai。

## 环境准备

### 1. 安装 Node.js

建议使用 nvm 管理 Node.js 版本：

```bash
# 安装 nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.0/install.sh | bash

# 重新加载 shell 配置
source ~/.bashrc

# 安装 Node.js 22 LTS
nvm install 22
nvm use 22

# 验证
node -v
npm -v
```

### 2. 安装 Redis

Ubuntu/Debian：

```bash
sudo apt update
sudo apt install redis-server -y
sudo systemctl enable redis-server
sudo systemctl start redis-server
```

CentOS/RHEL：

```bash
sudo yum install redis -y
sudo systemctl enable redis
sudo systemctl start redis
```

验证 Redis 是否运行：

```bash
redis-cli ping
# 应返回 PONG
```

### 3. 安装 git

```bash
sudo apt install git -y   # Debian/Ubuntu
sudo yum install git -y   # CentOS/RHEL
```

## 克隆与安装

### 克隆仓库

```bash
git clone https://github.com/TimeRainStarSky/Yunzai.git
cd Yunzai
```

### 安装依赖

```bash
npm install
```

如果安装过程中出现网络问题，可以使用国内镜像：

```bash
npm install --registry=https://registry.npmmirror.com
```

## 首次启动

```bash
node app
```

首次启动会：
1. 在项目根目录生成配置文件
2. 提示你选择登录协议
3. 提示你填写 QQ 号和密码（或扫码登录）

## 常见问题

### npm install 失败

- 检查 Node.js 版本是否 >= 18
- 尝试切换 npm 镜像源
- 某些依赖需要编译工具：`sudo apt install build-essential python3`

### Redis 连接失败

- 确认 Redis 服务已启动：`systemctl status redis`
- 检查默认端口 `6379` 是否被防火墙拦截
- 检查配置文件中的 Redis 地址和密码

### 机器人无法登录

- 确保使用**小号**，不要用常用号
- 不同协议对账号风控程度不同，可尝试切换协议
- 扫码登录通常比密码登录更稳定

## 下一步

部署完成后，查看[配置说明](/guide/yunzai/config)了解如何调整设置。
