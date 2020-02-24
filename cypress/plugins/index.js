
module.exports = (on, config) => {
	// `on` is used to hook into various events Cypress emits
	// `config` is the resolved Cypress config
};
const webpack = require('@cypress/webpack-preprocessor');
const webpackOptions = {
	resolve: {
		extensions: ['.jsx', '.js', '.json']
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx|mjs)$/,
				loader: 'babel-loader',
				options: {
					presets: ['@babel/preset-env', '@babel/preset-react'],
					plugins: ['@babel/plugin-proposal-class-properties']
				}
			},
			{
				test: /\.s[ac]ss$/i,
				use: [
					'style-loader',
					'css-loader',
					{
						loader: 'sass-loader'
					}
				]
			},
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(png|jpe?g|gif)$/i,
				use: [
					{
						loader: 'file-loader',
						options: {
							esModule: false
						}
					}
				]
			},
			{
				test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]',
							outputPath: 'fonts/',
							esModule: false
						}
					}
				]
			}
		]
	}
};

const options = {
	// send in the options from your webpack.config.js, so it works the same
	// as your app's code
	webpackOptions,
	watchOptions: {}
};

module.exports = on => {
	on('file:preprocessor', webpack(options));
};