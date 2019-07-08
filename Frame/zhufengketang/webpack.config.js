const {resolve} = require('path');
module.exports = {
    entry:'./src/index.js',
    output:{
        path:resolve(__dirname,'dist'),
        filename:'bundle.js'
    },
    module:{
        reules:[
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
                include: reslove('./src')
            },
        ]
    }
}