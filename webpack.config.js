// build webpack with the command:  webpack --config webpack.config.js
var webpack = require('webpack');

module.exports = {
	devtool: 'inline-source-map',
	entry: [
		'webpack-hot-middleware/client',
		'./client/client.js'],
	output: {
		path: require('path').resolve('./dist'),
		filename: 'bundle.js',
		publicPath: '/'
	},
	plugins: [
		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	],
	//Things that happen as webpack bundles like transpile code to browser
	//compatible javascript etc.
	module: {
		loaders: [
			{
				//transpiles stuff to javascript
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {
					//Same as setting up a babel RC file
					//compile jsx and es6 to javascript
					presets: ['react', 'es2015', 'react-hmre']
				}
			},
			{
				test: /\.css$/,
				loaders: [
					'style?sourceMap',
					'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]'
				]
			},
			{
				test: /\.(png|jpg)$/,
				loader: 'url-loader?limit=8192'
			}
		]
	}
}
