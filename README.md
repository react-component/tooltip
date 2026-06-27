<div align="center">
  <h1>@rc-component/tooltip</h1>
  <p><sub><img alt="Ant Design" height="14" src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" style="vertical-align: -0.125em;" /> Part of the Ant Design ecosystem.</sub></p>
  <p>💡 Positioned React tooltip for hover, focus, click, and controlled popup flows.</p>

  <p>
    <a href="https://www.npmjs.com/package/@rc-component/tooltip"><img src="https://img.shields.io/npm/v/@rc-component/tooltip.svg?style=flat-square" alt="npm version" /></a>
    <a href="https://www.npmjs.com/package/@rc-component/tooltip"><img src="https://img.shields.io/npm/dm/@rc-component/tooltip.svg?style=flat-square" alt="npm downloads" /></a>
    <a href="https://github.com/react-component/tooltip/actions"><img src="https://github.com/react-component/tooltip/actions/workflows/react-component-ci.yml/badge.svg" alt="CI" /></a>
    <a href="https://codecov.io/gh/react-component/tooltip"><img src="https://img.shields.io/codecov/c/github/react-component/tooltip/master.svg?style=flat-square" alt="Codecov" /></a>
    <a href="https://bundlephobia.com/package/@rc-component/tooltip"><img src="https://badgen.net/bundlephobia/minzip/@rc-component/tooltip" alt="bundle size" /></a>
    <a href="https://github.com/umijs/dumi"><img src="https://img.shields.io/badge/docs%20by-dumi-blue?style=flat-square" alt="dumi" /></a>
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

## Release

```bash
npm run prepublishOnly
```

The release flow is handled by `@rc-component/np` through the `rc-np` command after the package build.

## License

@rc-component/tooltip is released under the [MIT](./LICENSE) license.
