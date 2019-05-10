const path = require('path');
const CompressionPlugin = require('compression-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const resolve = dir => path.join(__dirname, dir);
const isDevelopment = process.env.NODE_ENV === 'development';
const isProduction = process.env.NODE_ENV === 'production';
process.env.VUE_APP_VERSION = require('./package.json').version;

console.log(process.env.VUE_APP_VERSION);
module.exports = {
	publicPath: '/',
	outputDir: 'dist',
	assetsDir: 'static',
	lintOnSave: isDevelopment ? 'error' : false,
	css: {
		extract: !isDevelopment,
		loaderOptions: {
			less: {
				javascriptEnabled: true,
			},
		},
	},
	chainWebpack: (config) => {
		/**
		 * 删除懒加载模块的 prefetch preload，降低带宽压力
		 * https://cli.vuejs.org/zh/guide/html-and-static-assets.html#prefetch
		 * https://cli.vuejs.org/zh/guide/html-and-static-assets.html#preload
		 * 而且预渲染时生成的 prefetch 标签是 modern 版本的，低版本浏览器是不需要的
		 */
		config.plugins
			.delete('prefetch')
			.delete('preload');
		config.resolve.alias
			.set('@', resolve('src'));
		// 解决 cli3 热更新失效 https://github.com/vuejs/vue-cli/issues/1559
		config.resolve
			.symlinks(true);
		config // 开发环境 // sourcemap不包含列信息
			.when(isDevelopment, config => config.devtool('cheap-eval-source-map'))
			.when(isProduction, config => {
				config.optimization
					.minimizer([
						new UglifyJsPlugin({
							uglifyOptions: {
								// 移除 console
								// 其它优化选项 https://segmentfault.com/a/1190000010874406
								compress: {
									warnings: false,
									drop_console: true,
									drop_debugger: true,
									pure_funcs: ['console.log'],
								},
							},
						}),
					]);
			});
	},
	configureWebpack: () => isProduction && {
		plugins: [
			new CompressionPlugin({
				test: /\.js$|\.html$|\.css$/,
				threshold: 10240,
				deleteOriginalAssets: false,
			}),
		],
	},
	devServer: {
		proxy: {
			'/api': {
				target: 'http://69.171.69.13:3004',
				changeOrigin: true,
				pathRewrite: {
					'^/api': '',
				},
			},
		},
	},
	productionSourceMap: false,
};
