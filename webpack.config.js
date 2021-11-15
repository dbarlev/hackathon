const path = require('path');

module.exports = {
    entry: {
        hackathon: './src/index.js',
        domhandler: './domhandler.js',
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    devtool: 'eval-source-map',
};