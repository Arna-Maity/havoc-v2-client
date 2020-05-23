const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname, '/build'),
        publicPath: '/',
        filename: "index_bundle.js"
    },
    devServer: {
        contentBase: './build',
      },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: path.resolve('./index.html')
        })
    ]
};