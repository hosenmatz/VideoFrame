const path = require('path');

module.exports = {
    entry: {
        VideoFrame: path.join(__dirname, 'src/VideoFrame.js')
    },
    output: {
        path: __dirname,
        filename: 'VideoFrame.js',
        library: 'VideoFrame',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    resolve: {
        extensions: ['.js'],
        modules: [__dirname]
    }
};
