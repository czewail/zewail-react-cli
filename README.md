# zewail-react开发环境的的脚手架工具
`zewail-react-cli` 提供交互式的命令来简化项目操作 
## 安装
```bash
npm install -g zewail-react-cli
```
## 新建项目
```bash
zr init
```
项目新建后会自动执行 `npm install` 命令安装依赖包，如果你使用cnpm来管理依赖，可以执行：
```js
zr init --no-install
```
然后自行执行 `cnpm install` 安装依赖

## 创建模板文件
```bash
zr new
```

### Component
选择 `component` 来创建独立组件模板，可创建三种不同的模板：
- `normal`：普通的React组件模板，只包含基础的 `render` 方法
- `full`：完整的React组件模板，包含组件所有生命周期方法
- `stateless`：函数式组件模板

### Container
选择 `container` 来创建页面容器模板，可创建两种不同的模板：
- `normal`：普通的React组件模板，只包含基础的 `render` 方法
- `full`：完整的React组件模板，包含组件所有生命周期方法

### Reducer
选择 `reducer` 来创建 `redux` 的 `reducer` 模板

### Saga
选择 `saga` 来创建 `redux` 中间件 `redux-saga` 的流程模板

## 完整命令列表


| 命令                  | 别名               | 说明          |
| ------------------- | ---------------- | ----------- |
| zr init             | zr i             | 创建包含完整依赖的项目 |
| zr init —no-install | zr i —no-install | 创建不包含依赖的项目  |
| zr new              | zr n             | 新建项目文件模板    |

