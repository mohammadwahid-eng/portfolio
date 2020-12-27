const path = require("path")
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
	entry: "./src/js/scripts.js",
	mode: "development",
	output: {
		filename: "scripts.js",
		path: path.resolve(__dirname, "public")
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: "style.css"
		})
	],
	module: {
		rules: [
			{
				test: /\.s[ac]ss$/i,
				use: [
					MiniCssExtractPlugin.loader, // 3. Create CSS file
					'css-loader', // 2. Compile CSS into CommonJS
					'sass-loader', // 1. Compile SASS into CSS
				]
			}
		],
	},
}