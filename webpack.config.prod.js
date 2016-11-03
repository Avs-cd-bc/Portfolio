import webpack from 'webpack';
import path from 'path';//from npm
import ExtractTextPlugin from "extract-text-webpack-plugin";

const GLOBALS = {
  "process.env.NODE_ENV": JSON.stringify("production")
};

//using node version 5.11.1
//webpack is configured by defining an object literal with a number of different properties
export default {
  debug: true, //enables displaying debug info
  devtool: 'source-map',//one of many options for the devtool
  noInfo: false,//webpack will display a list of all the files that it is bundling
  entry: './src/index',//the app's actual entry point - this is the index.js file, not the index.html
  target: 'web',//we could also set this to node, this states that webpack will bundle the code in a way the broswer will understand
  output: {//Note: Webpack won't generate any actual physical files for our development, it will serve files from memory. -It create bundles in memory that it serves to the browser
    path: __dirname + '/dist', // Note: Physical files are only output by the production build task `npm run build`. - //we will use node's _dirname variable to get the current directory
    //and specify that the app will ultimately run from the dist folder
    publicPath: '/',//we need to provide a path and name to simulate the files existence
    filename: 'bundle.js'
  },
  devServer: {//we are telling webpack's devServer where the code is (in ./src directory)
    contentBase: './dist'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin(GLOBALS),
    new ExtractTextPlugin("styles.css"),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin()
  ],
  module: {
    loaders: [//we want to tell webpack the types of files we want it to handle
      {test: /\.js$/, include: path.join(__dirname, 'src'), loaders: ['babel']},//we want to use js, and use babel to transpile the code
      {test: /(\.css)$/, loader: ExtractTextPlugin.extract("css?sourceMap")},//handling css
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file"},//these last 4 lines are necessary for the filetypes that bootstrap utilizes for fonts - for bootstrap styling
      {test: /\.(woff|woff2)$/, loader: "url?prefix=font/&limit=5000"},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream"},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml"}
    ]
  }
};
