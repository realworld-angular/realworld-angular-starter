/**
 * Configuration for `esbuild-loader` used in the build process.
 * Utilizes `EsbuildPlugin` to minimize the code.
 * @type {EsbuildPlugin}
 */
const EsbuildPlugin = require('esbuild-loader').EsbuildPlugin;
console.log("ESBuild is being used for the build process");
module.exports = {
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'esbuild-loader',
        options: {
          loader: 'ts',
          target: 'es2022'
        }
      }
    ]
  },
  optimization: {
    minimizer: [
      new EsbuildPlugin({
        target: 'es2022 '
      })
    ]
  }
};
