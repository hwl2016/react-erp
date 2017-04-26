var path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
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