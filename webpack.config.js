const path = require('path');

module.exports = {
    entry: './src/index.ts',
    output: {
        path: path.resolve('dist'),
        filename: 'index.js'
    }
};
