// webpack 2.x
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// css样式从js文件中分离出来，需要通过命令行安装 extract-text-webpack-plugin 依赖包


module.exports = {
    entry: {
        dist: './index.js'
    },
    output: {
        path: './dist/',
        publicPath: './dist/',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: '/node_modules/',
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallbackLoader: 'style-loader',
                    loader: 'css-loader'
                })
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallbackLoader: 'style-loader',
                    loader: 'css-loader!sass-loader'
                })
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        css: ExtractTextPlugin.extract({
                            fallbackLoader: 'vue-style-loader',
                            loader: 'css-loader'
                        })
                    }
                }
            },
            /*{
                test: /\.(png)|(jpg)$/,
                loader: 'url-loader?limit=50000' // 50k以下的图片base64编码
            },*/
            {
                test: /\.(png|jpe?g|gif)$/,
                use: 'file-loader?[name].[ext]&publicPath=./dist/images/&outputPath=./images/'  // 其他图片处理，这个不做base64位编码
            }
        ]

    },
    plugins: [
        new ExtractTextPlugin('style.css')  // 提取出来的样式放在dist下的style.css文件中
    ],
    resolve: {
        modules: ['node_modules'],
        extensions: ['.js', '.css', '.scss', 'vue'],
        // 让vue识别组件里的template
        alias: {
            'vue$': './node_modules/vue/dist/vue.js'
        }
    }
};