var path = require('path');
module.exports = {
	entry: ['webpack/hot/dev-server',path.resolve(__dirname, 'src/index.js')],
	output: {
		path: path.resolve(__dirname, ''),
		publicPath: '/',
		filename: 'bundle.js'
	},
	module: {
		loaders: [{
			exclude: /node_modules/,
			loader: 'babel'
		}]
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	devServer: {
		contentBase: './'
	}
};