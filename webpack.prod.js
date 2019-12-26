const path = require('path');
const webpack = require('webpack');
const htmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'production',
    entry: './src/client/index.js',
/*    optimization: {
	minimizer: [new TerserPlugin(), new OptimizeCssAssetsPlugin()]
    }, */
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
		// We use the loader supplied by plugin instead of
		// style-loader here. This enables putting the styles
		// as a stylesheet in the HTML, as opposed to styles
		// done via JS in case of style-loader.
		test: /\.scss$/,
		use: [ MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader' ]
	    }
	]
    },
    plugins: [
	new htmlWebPackPlugin({
	    template: './src/client/views/index.html',
	    filename: './index.html'
	}),
	new MiniCssExtractPlugin({filename: '[name].css'}),
    ]
}
