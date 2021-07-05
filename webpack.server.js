const path = require('path');
const webpackNodeExternals = require('webpack-node-externals');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',

    entry: ['./server/index'],

    target: 'node',

    externals: [webpackNodeExternals()],

    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'index.js',
        libraryTarget: 'commonjs',
    },

    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json']
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                loader: 'babel-loader',
                options: {
                    "presets": [
                        "@babel/preset-env",
                        "@babel/preset-react",
                        "@babel/preset-typescript",
                    ]
                }
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({ template: './public/index.html' })
    ],

};
