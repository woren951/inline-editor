import * as path from 'path';
import * as webpack from 'webpack';

const config: webpack.Configuration = {
    devtool: 'inline-source-map',

    entry: './src/index.ts',

    output: {
        library: 'WIEditor',

        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
        libraryTarget: 'umd',
        libraryExport: 'default'
    },

    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },

    module: {
        rules: [
            { test: /\.tsx?$/, loader: 'ts-loader' }
        ]
    }
};

export default config;
