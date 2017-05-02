var path = require('path');
var webpack = require('webpack');
var htmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	devtool: 'cheap-module-eval-source-map',
	entry: {
		main: './src/index.js'
	},
	output: {
	    path: path.resolve(__dirname, './dist/'),
	    publicPath: 'http://127.0.0.1:9000/',
	    filename: 'js/bundle.js'
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
		new webpack.DefinePlugin({
	        DEV_LOCAL: JSON.stringify(true),
	        DEV_REMOTE: JSON.stringify(false),
	        RELEASE: JSON.stringify(false),
	        VERSION: JSON.stringify("1.0")
	    }),
		new htmlWebpackPlugin({
			title: 'React',
	        template: path.resolve(__dirname, './src/index.html'),
	        filename: 'index.html',
	        hash: true
		}),
		new ExtractTextPlugin("css/[name].css")
	],
	devServer: {
	    contentBase: 'dist',
	    progress: true,
	    color: true,
	    historyApiFallback: true,
	    port: 9000,
	    host: 'localhost',
	    inline:true
    }
}