module.exports = {
  entry: {
    EGovReactKit: './src/egov-react-kit.js'
  },
  output: {
    path: `${__dirname}/dist`,
    filename: '[name].js',
    libraryTarget: 'umd',
    library: '[name]',
    sourcePrefix: '\n'
  },
  externals: {
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'React',
      root: 'React'
    },
    'react-dom': {
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      amd: 'ReactDOM',
      root: 'ReactDOM'
    },
    'prop-types': {
      commonjs: 'prop-types',
      commonjs2: 'prop-types',
      amd: 'PropTypes',
      root: 'PropTypes'
    },
    'material-ui': {
      commonjs: 'material-ui',
      commonjs2: 'material-ui',
      amd: 'MaterialUi',
      root: 'MaterialUi'
    },
    'styled-components': {
      commonjs: 'styled-components',
      commonjs2: 'styled-components',
      amd: 'StyledComponents',
      root: 'StyledComponents'
    },
    'react-json-viewer': {
      commonjs: 'react-json-viewer',
      commonjs2: 'react-json-viewer',
      amd: 'ReactJsonViewer',
      root: 'ReactJsonViewer'
    }
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader']
      }
    ]
  }
};
