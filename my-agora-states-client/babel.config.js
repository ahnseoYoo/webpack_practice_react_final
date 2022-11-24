const presets = ['@babel/preset-react','@babel/preset-env']
const plugins = [
    [
        'react-hot-loader/babel',
        {
            loose:true
        }
    ],
    ['@babel/plugin-transform-template-literals'],
];
module.exports = {presets,plugins};