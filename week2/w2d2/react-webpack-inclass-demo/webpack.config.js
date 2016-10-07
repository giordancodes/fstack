module.exports = {
	entry: "./entry.js",
	output: {
		filename: "bundle.js"
	},
	module: {
		loaders: [
			{
				test: /.jsx?$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {
					presets: ['react']
				}
     }
    ]
	}
};