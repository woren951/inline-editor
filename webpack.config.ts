import * as path from 'path';
import * as webpack from 'webpack';

const config: webpack.Configuration = {
    entry: './src/index.ts',
    devtool: 'inline-source-map',
    output: {
        library: 'Editor',
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
        libraryTarget: 'umd',
        libraryExport: 'default'
    },
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: ['.ts', '.tsx', '.js']
    },
    module: {
        rules: [
            // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
            { test: /\.tsx?$/, loader: 'ts-loader' }
        ]
    }
};

export default config;
