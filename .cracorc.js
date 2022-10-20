const CracoAntDesignPlugin = require('craco-antd');
const CracoLessPlugin = require('craco-less');
const { loaderByName, whenProd, whenDev } = require('@craco/craco');
const path = require('path');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const SimpleProgressWebpackPlugin = require('simple-progress-webpack-plugin');

module.exports = {
  webpack: {
    plugins: [
      ...whenDev(() => [new SimpleProgressWebpackPlugin()], []),
      ...whenProd(
        () => [
          new BundleAnalyzerPlugin({
            analyzerMode: 'static',
            openAnalyzer: false,
          }),
        ],
        [],
      ),
    ],
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  devServer: {
    port: 3001,
    proxy: {
      '/direct-mock': {
        target: 'https://anymock.alipay.com',
        changeOrigin: true,
        pathRewrite: {
          '^/direct-mock': '/direct-mock',
        },
      },
    },
  },
  plugins: [
    {
      plugin: CracoAntDesignPlugin,
      options: {
        customizeTheme: {
          '@primary-color': '#1DA57A',
        },
      },
    },
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            /*
                如果项目中有使用TDesign或AntDesign组件库需要自定义主题，可以在modifyVars中添加对应less变量
            */
            modifyVars: {
              '@primary-color': '#2378ff',
            },
            javascriptEnabled: true,
          },
        },
        modifyLessRule(lessRule, context) {
          // You have to exclude these file suffixes first,
          // if you want to modify the less module's suffix
          lessRule.exclude = path.join(__dirname, 'node-module');
          return lessRule;
        },
        modifyLessModuleRule(lessModuleRule, context) {
          // Configure the file suffix
          lessModuleRule.test = /\.m\.less$/;

          // Configure the generated local ident name.
          const cssLoader = lessModuleRule.use.find(loaderByName('css-loader'));
          cssLoader.options.modules = {
            localIdentName: '[local]_[hash:base64:5]',
          };
          return lessModuleRule;
        },
      },
    },
  ],
};
