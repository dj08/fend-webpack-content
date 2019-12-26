const path = require('path');
const webpack = require('webpack');

module.exports = {
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
	    }
	]
    }
}
