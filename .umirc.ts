import { defineConfig } from 'umi';
import theme from '@/theme';

export default defineConfig({
  theme,
  title: '用户中心',
  qiankun: {
    slave: {},
  },
  fastRefresh: {},
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: '/',
      component: '@/layouts/',
      routes: [
        { path: '/', redirect: '/profile/' },
        { path: '/profile/', component: 'profile' },
        { path: '/login/', component: 'login' },
        { path: '/mgt/', component: 'mgt' },
        // { redirect: '/profile/' },
      ],
    },
  ],

  helmet: false,
  dva: false,
  model: false,
  initialState: false,
  layout: false,
  locale: false,
  preact: false,
  request: false,
  sass: false,
  hash: true,
  base: '/micro/user-center',
  publicPath: '/micro/user-center/',
  runtimePublicPath: true,
  devServer: {
    port: 80,
    proxy: {
      '/api/user-center': {
        // target: 'http://user-center-go-dev',
        target: 'http://localhost:80',
        changeOrigin: true,
        pathRewrite: {
          '/api/user-center': '',
        },
      },
    },
  },
  externals: {
    moment: 'moment',
  },
  scripts: ['https://lib.baomitu.com/moment.js/latest/moment.min.js'],
  extraBabelPlugins: [
    [
      'babel-plugin-styled-components',
      {
        namespace: 'user-center',
      },
    ],
  ],
});
