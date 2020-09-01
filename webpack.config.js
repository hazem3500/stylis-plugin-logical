const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        library: 'stylis-plugin-logical',
        libraryTarget: 'umd',
        path: path.resolve(__dirname, 'dist'),
        globalObject: "typeof self !== 'undefined' ? self : this",
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
            },
        ],
    },
};