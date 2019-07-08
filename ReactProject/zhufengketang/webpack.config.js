const {resolve} = require('path');
// const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode:'development',
    entry:'./src/index.js',
    output:{
        path:resolve('./dist'),
        filename:'bundle.js'
    },
    resolve:{
        alias:{
            '@':resolve('src')
        }
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                use:[
                    {
                        loader:'babel-loader',
                        options:{
                            presets:["@babel/preset-env","@babel/preset-react"]
                        }
                    }
                ],
                exclude: /node_modules/,
                include: resolve('./src')
            },
            {
                test: /\.less$/,
                use:[
                    "style-loader","css-loader","less-loader"
                ],
                include: resolve('./src')
            },
            {
                test: /\.(png|gif|jpg)/,
                use: ["url-loader"]
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html',
            filename:'index.html'
        })
    ]
}