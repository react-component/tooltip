import { defineConfig } from 'dumi';
import path from 'path';

// const isProdSite =
//   // 不是预览模式 同时是生产环境
//   process.env.PREVIEW !== 'true' && process.env.NODE_ENV === 'production';

// const name = 'tooltip';

export default defineConfig({
  alias: {
    'rc-tooltip$': path.resolve('src'),
    'rc-tooltip/es': path.resolve('src'),
  },
  mfsu: false,
  favicons: ['https://avatars0.githubusercontent.com/u/9441414?s=200&v=4'],
  themeConfig: {
    name: 'Tooltip',
    logo: 'https://avatars0.githubusercontent.com/u/9441414?s=200&v=4',
  },
  // base: isProdSite ? `/${name}/` : '/',
  // publicPath: isProdSite ? `/${name}/` : '/',
});
