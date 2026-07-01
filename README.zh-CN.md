<div align="center">
  <h1>@rc-component/tooltip</h1>
  <p><sub><a href="https://ant.design"><img alt="Ant Design" height="14" src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" style="vertical-align: -0.125em;" /></a> Ant Design 生态的一部分。</sub></p>
  <p>💡 React 文字提示组件，基于 trigger 定位和弹层能力构建。</p>

  <p>
    <a href="https://npmjs.org/package/@rc-component/tooltip"><img alt="NPM version" src="https://img.shields.io/npm/v/@rc-component/tooltip.svg?style=flat-square"></a>
    <a href="https://npmjs.org/package/@rc-component/tooltip"><img alt="npm downloads" src="https://img.shields.io/npm/dm/@rc-component/tooltip.svg?style=flat-square"></a>
    <a href="https://github.com/react-component/tooltip/actions/workflows/react-component-ci.yml"><img alt="build status" src="https://github.com/react-component/tooltip/actions/workflows/react-component-ci.yml/badge.svg"></a>
    <a href="https://app.codecov.io/gh/react-component/tooltip"><img alt="Codecov" src="https://img.shields.io/codecov/c/github/react-component/tooltip/master.svg?style=flat-square"></a>
    <a href="https://bundlephobia.com/package/@rc-component/tooltip"><img alt="bundle size" src="https://img.shields.io/bundlephobia/minzip/@rc-component/tooltip?style=flat-square"></a>
    <a href="https://github.com/umijs/dumi"><img alt="dumi" src="https://img.shields.io/badge/docs%20by-dumi-blue?style=flat-square"></a>
  </p>
</div>

<p align="center"><a href="./README.md">English</a> | 简体中文</p>


## 特性

- 支持悬停、聚焦、单击以及通过一个触发层控制可见性。
- 提供内置放置、自定义对齐、延迟、箭头和弹层动作。
- 为根节点、箭头节点和容器节点引入语义 `classNames` 和 `styles` 槽。
- 通过生成的工具提示 id 和 `aria-describedby` 保留可访问性连接。

## 安装

```bash
npm install @rc-component/tooltip
```

## 使用

```tsx pure
import Tooltip from '@rc-component/tooltip';
import '@rc-component/tooltip/assets/bootstrap_white.css';

export default () => (
  <Tooltip placement="top" overlay={<span>Tooltip content</span>}>
    <button type="button">Hover me</button>
  </Tooltip>
);
```

在线预览：https://tooltip.react-component.vercel.app/

## 示例

运行本地 dumi 站点：

```bash
npm install
npm start
```

然后打开 `http://localhost:8000`。

## API

### Tooltip

| 名称                  | 类型                                                 | 默认值             | 说明                                                |
| --------------------- | ---------------------------------------------------- | ------------------- | ---------------------------------------------------------- |
| `afterVisibleChange`  | `(visible: boolean) => void`                         | -                   | 弹层窗口可见性更改后调用。                     |
| `align`               | AlignType                                            | `{}`                | 额外弹层对齐配置。                              |
| `arrowContent`        | React.ReactNode                                      | -                   | 自定义箭头内容。                                      |
| `builtinPlacements`   | TriggerProps['builtinPlacements']                    | built-in placements | 传递给触发器的放置映射。                           |
| `children`            | React.ReactElement                                   | -                   | 所需的触发元素。                                  |
| `classNames`          | `Partial<Record<SemanticName, string>>`              | -                   | 根节点、箭头节点和容器节点的语义化类名。 |
| `defaultVisible`      | boolean                                              | -                   | 初始不受控制的可见状态。                        |
| `destroyOnHidden`     | boolean                                              | false               | 隐藏时销毁弹层 DOM。                             |
| `fresh`               | boolean                                              | -                   | 关闭时保持弹层内容新鲜。                      |
| `getTooltipContainer` | `(node: HTMLElement) => HTMLElement`                 | -                   | 指定弹层容器。                                   |
| `id`                  | string                                               | generated id        | 用于辅助功能的工具提示 ID。                         |
| `motion`              | TriggerProps['popupMotion']                          | -                   | 弹层运动配置。                                       |
| `mouseEnterDelay`     | number                                               | 0                   | 鼠标移入后显示的延迟（秒）。            |
| `mouseLeaveDelay`     | number                                               | 0.1                 | 鼠标移出后隐藏的延迟（秒）。             |
| `onPopupAlign`        | TriggerProps['onPopupAlign']                         | -                   | 弹层对齐后调用。                              |
| `onVisibleChange`     | `(visible: boolean) => void`                         | -                   | 当可见性发生变化时调用。                            |
| `overlay`             | React.ReactNode \| `() => React.ReactNode`           | -                   | 提示内容。                                           |
| `placement`           | string                                               | `'right'`           | 弹层放置。                                           |
| `prefixCls`           | string                                               | `'rc-tooltip'`      | 前缀 className。                                         |
| `showArrow`           | boolean \| ArrowType                                 | true                | 是否显示箭头，或提供箭头配置。             |
| `styles`              | `Partial<Record<SemanticName, React.CSSProperties>>` | -                   | 根节点、箭头节点和容器节点的语义样式。      |
| `trigger`             | ActionType \| ActionType[]                           | `['hover']`         | 显示提示的触发行为。                             |
| `unique`              | TriggerProps['unique']                               | -                   | 实验性独特的容器重用配置。                |
| `visible`             | boolean                                              | -                   | 受控可见状态。                                  |
| `zIndex`              | number                                               | -                   | 弹层 z 索引。                                             |

## 本地开发

```bash
npm install
npm start
npm test
npm run tsc
npm run compile
npm run build
```

dumi 站点默认运行在 `http://localhost:8000`。

## 发布

```bash
npm run prepublishOnly
```

包构建完成后，发布流程由 `@rc-component/np` 通过 `rc-np` 命令处理。

## 许可证

@rc-component/tooltip 基于 [MIT](./LICENSE) 许可证发布。
