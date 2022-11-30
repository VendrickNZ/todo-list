const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                { from: "src/static", to: "static" },
                { from: "src/index.html", to: "" },
                { from: "src/styles.css", to: ""},
            ],
        }),
    ],
};