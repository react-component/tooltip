import { defineConfig } from 'dumi';
import path from 'path';

const basePath = process.env.GH_PAGES ? '/tooltip/' : '/';
const publicPath = basePath;

export default defineConfig({
  alias: {
    '@rc-component/tooltip$': path.resolve('src'),
    '@rc-component/tooltip/assets': path.resolve('assets'),
    '@rc-component/tooltip/es': path.resolve('src'),
  },
  mfsu: false,
  favicons: ['https://avatars0.githubusercontent.com/u/9441414?s=200&v=4'],
  themeConfig: {
    name: 'Tooltip',
    logo: 'https://avatars0.githubusercontent.com/u/9441414?s=200&v=4',
  },
  outputPath: 'docs-dist',
  base: basePath,
  publicPath,
});
