<div align="center">
  <h1>@rc-component/tooltip</h1>
  <p><sub>Ant Design 生态的一部分。</sub></p>
  <img alt="Ant Design" height="32" src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" />
  <p>💡 React 文字提示组件，基于 trigger 定位和弹层能力构建。</p>

  <p>
    <a href="https://www.npmjs.com/package/@rc-component/tooltip"><img src="https://img.shields.io/npm/v/@rc-component/tooltip.svg?style=flat-square" alt="npm version" /></a>
    <a href="https://www.npmjs.com/package/@rc-component/tooltip"><img src="https://img.shields.io/npm/dm/@rc-component/tooltip.svg?style=flat-square" alt="npm downloads" /></a>
    <a href="https://github.com/react-component/tooltip/actions"><img src="https://github.com/react-component/tooltip/actions/workflows/react-component-ci.yml/badge.svg" alt="CI" /></a>
    <a href="https://codecov.io/gh/react-component/tooltip"><img src="https://img.shields.io/codecov/c/github/react-component/tooltip/master.svg?style=flat-square" alt="Codecov" /></a>
    <a href="https://bundlephobia.com/package/@rc-component/tooltip"><img src="https://badgen.net/bundlephobia/minzip/@rc-component/tooltip" alt="bundle size" /></a>
    <a href="https://github.com/umijs/dumi"><img src="https://img.shields.io/badge/docs%20by-dumi-blue?style=flat-square" alt="dumi" /></a>
  </p>
</div>

<p align="center"><a href="./README.md">English</a> | 简体中文</p>


## 特性

- 支持 hover, focus, click, and controlled visibility through one trigger layer.
- 提供 built-in placements, custom alignment, delays, arrows, and popup motion.
- 暴露 semantic `classNames` and `styles` slots for root, arrow, and container nodes.
- 保留 accessibility wiring through generated tooltip ids and `aria-describedby`.

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

Online preview: https://tooltip.react-component.vercel.app/

## API

### Tooltip

| 名称                  | 类型                                                 | 默认值             | 说明                                                |
| --------------------- | ---------------------------------------------------- | ------------------- | ---------------------------------------------------------- |
| `afterVisibleChange`  | `(visible: boolean) => void`                         | -                   | Called after popup visibility changes.                     |
| `align`               | AlignType                                            | `{}`                | Extra popup alignment config.                              |
| `arrowContent`        | React.ReactNode                                      | -                   | Custom arrow content.                                      |
| `builtinPlacements`   | TriggerProps['builtinPlacements']                    | built in placements | Placement map passed to trigger.                           |
| `children`            | React.ReactElement                                   | -                   | Required trigger element.                                  |
| `classNames`          | `Partial<Record<SemanticName, string>>`              | -                   | Semantic class names for root, arrow, and container nodes. |
| `defaultVisible`      | boolean                                              | -                   | Initial uncontrolled visible state.                        |
| `destroyOnHidden`     | boolean                                              | false               | Destroy popup DOM when hidden.                             |
| `fresh`               | boolean                                              | -                   | Keep popup content fresh when closed.                      |
| `getTooltipContainer` | `(node: HTMLElement) => HTMLElement`                 | -                   | Resolve popup container.                                   |
| `id`                  | string                                               | generated id        | Tooltip id used for accessibility.                         |
| `motion`              | TriggerProps['popupMotion']                          | -                   | Popup motion config.                                       |
| `mouseEnterDelay`     | number                                               | 0                   | Delay in seconds before showing on mouse enter.            |
| `mouseLeaveDelay`     | number                                               | 0.1                 | Delay in seconds before hiding on mouse leave.             |
| `onPopupAlign`        | TriggerProps['onPopupAlign']                         | -                   | Called after popup alignment.                              |
| `onVisibleChange`     | `(visible: boolean) => void`                         | -                   | Called when visibility changes.                            |
| `overlay`             | React.ReactNode \| `() => React.ReactNode`           | -                   | Tooltip content.                                           |
| `placement`           | string                                               | `'right'`           | Popup placement.                                           |
| `prefixCls`           | string                                               | `'rc-tooltip'`      | Prefix class name.                                         |
| `showArrow`           | boolean \| ArrowType                                 | true                | Whether to show arrow or provide arrow config.             |
| `styles`              | `Partial<Record<SemanticName, React.CSSProperties>>` | -                   | Semantic styles for root, arrow, and container nodes.      |
| `trigger`             | ActionType \| ActionType[]                           | `['hover']`         | Actions that show the tooltip.                             |
| `unique`              | TriggerProps['unique']                               | -                   | Experimental unique container reuse config.                |
| `visible`             | boolean                                              | -                   | Controlled visible state.                                  |
| `zIndex`              | number                                               | -                   | Popup z-index.                                             |

## 本地开发

```bash
npm install
npm start
npm test
npm run tsc
npm run compile
npm run build
```

## 发布

```bash
npm run prepublishOnly
```

The release flow is handled by `@rc-component/np` through the `rc-np` command after the package build.

## 许可证

@rc-component/tooltip is released under the [MIT](./LICENSE) license.
