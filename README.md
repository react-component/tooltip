<div align="center">
  <h1>@rc-component/tooltip</h1>
  <p><sub><a href="https://ant.design"><img alt="Ant Design" height="14" src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" style="vertical-align: -0.125em;" /></a> Part of the Ant Design ecosystem.</sub></p>
  <p>💡 Positioned React tooltip for hover, focus, click, and controlled popup flows.</p>

  <p>
    <a href="https://npmjs.org/package/@rc-component/tooltip"><img alt="NPM version" src="https://img.shields.io/npm/v/@rc-component/tooltip.svg?style=flat-square"></a>
    <a href="https://npmjs.org/package/@rc-component/tooltip"><img alt="npm downloads" src="https://img.shields.io/npm/dm/@rc-component/tooltip.svg?style=flat-square"></a>
    <a href="https://github.com/react-component/tooltip/actions/workflows/react-component-ci.yml"><img alt="build status" src="https://github.com/react-component/tooltip/actions/workflows/react-component-ci.yml/badge.svg"></a>
    <a href="https://app.codecov.io/gh/react-component/tooltip"><img alt="Codecov" src="https://img.shields.io/codecov/c/github/react-component/tooltip/master.svg?style=flat-square"></a>
    <a href="https://bundlephobia.com/package/@rc-component/tooltip"><img alt="bundle size" src="https://img.shields.io/bundlephobia/minzip/@rc-component/tooltip?style=flat-square"></a>
    <a href="https://github.com/umijs/dumi"><img alt="dumi" src="https://img.shields.io/badge/docs%20by-dumi-blue?style=flat-square"></a>
  </p>
</div>

<p align="center">English | <a href="./README.zh-CN.md">简体中文</a></p>


## Highlights

- Supports hover, focus, click, and controlled visibility through one trigger layer.
- Provides built-in placements, custom alignment, delays, arrows, and popup motion.
- Exposes semantic `classNames` and `styles` slots for root, arrow, and container nodes.
- Keeps accessibility wiring through generated tooltip ids and `aria-describedby`.

## Install

```bash
npm install @rc-component/tooltip
```

## Usage

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

## Examples

Run the local dumi site:

```bash
npm install
npm start
```

Then open `http://localhost:8000`.

## API

### Tooltip

| Name                  | Type                                                 | Default             | Description                                                |
| --------------------- | ---------------------------------------------------- | ------------------- | ---------------------------------------------------------- |
| `afterVisibleChange`  | `(visible: boolean) => void`                         | -                   | Called after popup visibility changes.                     |
| `align`               | AlignType                                            | `{}`                | Extra popup alignment config.                              |
| `arrowContent`        | React.ReactNode                                      | -                   | Custom arrow content.                                      |
| `builtinPlacements`   | TriggerProps['builtinPlacements']                    | built-in placements | Placement map passed to trigger.                           |
| `children`            | React.ReactElement                                   | -                   | Required trigger element.                                  |
| `classNames`          | `Partial<Record<SemanticName, string>>`              | -                   | Semantic class names for root, arrow, and container nodes. |
| `defaultVisible`      | boolean                                              | -                   | Initial uncontrolled visible state.                        |
| `destroyOnHidden`     | boolean                                              | false               | Destroy popup DOM when hidden.                             |
| `disabled`            | boolean                                              | false               | Temporarily hide tooltip while preserving visible state.   |
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

## Development

```bash
npm install
npm start
npm test
npm run tsc
npm run compile
npm run build
```

The dumi site runs at `http://localhost:8000` by default.

## Release

```bash
npm run prepublishOnly
```

The release flow is handled by `@rc-component/np` through the `rc-np` command after the package build.

## License

@rc-component/tooltip is released under the [MIT](./LICENSE) license.
