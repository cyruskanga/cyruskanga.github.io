const path = require('path');

module.exports = {
    entry: './src/index.js', // Main entry point of the library
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'react-live.umd.js',
        library: 'ReactLive', // This will make it available as window.ReactLive
        libraryTarget: 'umd',
        globalObject: 'this',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            }
        ]
    },
    externals: {
        react: 'React',
        'react-dom': 'ReactDOM',
    },
    mode: 'production'
};
