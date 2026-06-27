# 插件指南

TRSS-Yunzai 通过插件系统扩展功能。插件位于 `plugins/` 目录下。

## 安装插件

### 方法一：git clone（推荐）

大多数插件可直接克隆到 plugins 目录：

```bash
cd Yunzai/plugins

# 以锅巴面板为例
git clone https://github.com/guoba-yunzai/guoba-plugin.git
npm install --prefix guoba-plugin/
```

### 方法二：插件管理器

部分插件支持通过机器人指令安装：

```
#插件安装 <git地址>
```

## 常用插件推荐

| 插件 | 功能 | 地址 |
|------|------|------|
| guoba-plugin | Web 管理面板 | github.com/guoba-yunzai/guoba-plugin |
| xiaoyao-cvs-plugin | 原神/星铁攻略查询 | github.com/Xiaoyao-io/xiaoyao-cvs-plugin |

## 插件更新

```bash
cd Yunzai/plugins/<插件目录>
git pull
npm install  # 如有依赖变更
```

## 插件编写

插件是一个标准的 npm 包，放置在 `plugins/` 目录下。Yunzai 启动时会自动加载。

最低要求：`index.js` 作为入口文件，导出所需的处理函数。

```js
// plugins/my-plugin/index.js
export class MyPlugin {
  constructor() {
    // 插件初始化
  }
}
```

详细开发指南可参考 [Yunzai 官方文档](https://github.com/TimeRainStarSky/Yunzai)。

## 故障排查

- **插件未加载**：检查 `index.js` 是否存在，查看启动日志中的错误信息
- **插件报错**：常见原因是依赖未安装，在插件目录执行 `npm install`
- **插件冲突**：两个插件监听同一指令时可能冲突，可尝试调整加载顺序或禁用其一
