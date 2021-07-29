var path = require('path')
var externalReact = require('webpack-external-react')
var webpack = require('webpack')
var NODE_ENV = 'development'

module.exports = {
    mode: NODE_ENV,
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        library: 'math3d-component',
        libraryTarget: 'umd'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: [/node_modules/],
                loader: 'babel-loader',
                options: require('./babel.config.json')
            },
            {
              test: /\.css$/i,
              use: ['style-loader', 'css-loader']
            }
        ]
    },
    resolve: {
        alias: {
            'process': 'process/browser',
            'utils': path.resolve(__dirname, 'src/utils/'),
            'services': path.resolve(__dirname, 'src/services/'),
            'containers': path.resolve(__dirname, 'src/containers/'),
            'components': path.resolve(__dirname, 'src/components/'),
            'constants': path.resolve(__dirname, 'src/constants/'),
            'store': path.resolve(__dirname, 'src/store/'),
            
        }
    },
    externals: {
        'react': 'react',
        'react-dom': 'react-dom'
    }
}
