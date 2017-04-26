var path = require('path');
var webpack = require('webpack');
var htmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	devtool: false,
	entry: {
		main: './src/index.js',
		// 第三方库
	    vender: [
	      'redux',
	      'react-redux',
	      'react',
	      'react-dom',
	      'jquery'
	    ] 
	},
	output: {
	    path: path.resolve(__dirname, './dist/'),
	    publicPath: '/',
	    filename: 'js/[name].min.js'
	},
	module: {
		loaders: [
			{
				test: /[\.jsx|\.js]$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {
					presets: ['env', 'react']
				}
			},
			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract('style', 'css')
			}
		]
	},
	plugins: [
		new webpack.optimize.UglifyJsPlugin({	//代码压缩
			output: {
				comments: false,  // remove all comments
			},
			compress: {
				warnings: false,
			}
	    }),
	    // 将 main 的 react jquery 等代码提取出来打包
		new webpack.optimize.CommonsChunkPlugin({
			name: 'common',
			chunks: ['main'],
			filename: 'js/common.min.js',
			minChunks: 1,
		}),
		// 将 react 从 common 中提取出来分别打包
		new webpack.optimize.CommonsChunkPlugin({
			name: ['vender'],
			chunks: ['common'],
			filename: 'lib/vender.min.js',
			minChunks: Infinity,
		}),

		new htmlWebpackPlugin({
			title: 'React',
	        template: path.resolve(__dirname, './src/index.html'),
	        filename: 'index.html',
	        hash: true
		}),
		new ExtractTextPlugin("css/[name].min.css")
	]
}