module.exports = {
  plugins: ['@babel/plugin-transform-modules-commonjs'],
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    '@babel/preset-react'
  ]
};
