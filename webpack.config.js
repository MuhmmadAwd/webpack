const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const TerserPlugin = require("terser-webpack-plugin")

module.exports = {
    entry: "./src/js/app.js",
    devServer: {
        static: {
            directory: path.join(__dirname, "dist")
        },
        compress: true,
        port: 9000,
    },
    mode: "production",
    module: {
        rules: [{
            test: /\.css$/,
            use: ["style-loader", "css-loader"]
        }]
    },
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        }),
    ]
}