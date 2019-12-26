const path = require('path');
const webpack = require('webpack');
const htmlWebPackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/client/index.js',
    module: {
	rules: [
	    {
		// Run all custom JS in project through
		// babel. Otherwise webpack will move advanced ES
		// syntaxes to browser distribution and will create
		// issues there.
		test: /\.js$/,
		exclude: /node_modules/,
		loader: "babel-loader"
	    },
	    {
		enforce: 'pre', // This comes before babel-loader
		test: /.js$/,
		exclude: /node_modules/,
		loader: 'eslint-loader',
		options: {}
	    },
	    {
		test: /\.scss$/,
		use: [ 'style-loader', 'css-loader', 'sass-loader' ]
	    }
	]
    },
    plugins: [
	new htmlWebPackPlugin({
	    template: './src/client/views/index.html',
	    filename: './index.html'
	}),
	new CleanWebpackPlugin({
	    dry: true,
	    verbose: true,
	    cleanStaleWebpackAssets: true,
	    protectWebpackAssets: false
	}),
    ],
};
