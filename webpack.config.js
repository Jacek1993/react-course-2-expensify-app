//entry point  for us app.js
//define output
const path = require('path');
const ExtractTextPlugin=require('extract-text-webpack-plugin');

//funkcja moze miec dostep do zmiennej env podanej jako argument i to jest zaleta tego podejscia

module.exports = (env) => {

    const isProduction=env==='production';
    const CSSExtract=new ExtractTextPlugin('styles.css');

    return {
        entry: './src/app.js',
        output: {
            path: path.join(__dirname, 'public'),
            filename: 'bundle.js'
        },
        module: {
            rules: [{
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            }, {
                test: /\.s?css$/,
                use: CSSExtract.extract({
                    use:[
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options:{
                                sourceMap: true
                            }
                        }
                    ]
                })
            }]
        },
        plugins: [
            CSSExtract
        ],
        devtool: isProduction? 'source-map':'inline-source-map',
        devServer: {
            contentBase: path.join(__dirname, 'public'),
            historyApiFallback: true
        }
    }
};

//source maps zajmuja glowna czesc miejsca to jest ten modul z devtool cheap-module-eval-source-map
//source-map npm


//
// module.exports = {
//     entry: './src/app.js',
//     output: {
//         path: path.join(__dirname, 'public'),
//         filename: 'bundle.js'
//     },
//     module: {
//         rules: [{
//             loader: 'babel-loader',
//             test: /\.js$/,
//             exclude: /node_modules/
//         }, {
//             test: /\.s?css$/,
//             use: [
//                 'style-loader',
//                 'css-loader',
//                 'sass-loader'
//             ]
//         }]
//     },
//     devtool: 'cheap-module-eval-source-map',
//     devServer: {
//         contentBase: path.join(__dirname, 'public'),
//         historyApiFallback: true
//     }
// };