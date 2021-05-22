const CopyWebpackPlugin = require('copy-webpack-plugin')
const { override, addWebpackPlugin } = require('customize-cra');

module.exports = {
  webpack: override(
    addWebpackPlugin(
        new CopyWebpackPlugin({
            patterns: [
                { from: 'src/assets/images', to: 'assets' }
            ],
        })
    )
  )
}
