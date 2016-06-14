import webpack from 'webpack'
import merge from 'webpack-merge'
import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'

const TARGET = process.env.npm_lifecycle_event
process.env.BABEL_ENV = TARGET

const PATHS = {
  src: path.join(__dirname, 'src'),
  dist: path.join(__dirname, 'dist')
}

const common = {
  entry: {
    src: PATHS.src
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.css']
  },
  output: {
    path: PATHS.dist,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.(png|jpg|mp3)$/,
        loader: 'url-loader?limit=8192',
        include: PATHS.src
      },
      {
        test: /\.css?$/,
        loaders: ['style', 'css'],
        include: PATHS.src
      },
      {
        test: /\.jsx?$/,
        loaders: ['babel?cacheDirectory'],
        include: PATHS.src
      },
      {
        test: /\.json?$/,
        loaders: ['json'],
        include: PATHS.src
      }
    ]
  }
}

const startConfig = {
  devtool: 'eval-source-map',
  devServer: {
    contentBase: PATHS.dist,
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'Diabetezy',
      template: path.join(PATHS.src, 'assets/templates/index.ejs')
    })
  ]
}

const buildConfig = {}

const config = (TARGET === 'start' || !TARGET)
  ? merge(common, startConfig)
  : merge(common, buildConfig)

export default config
