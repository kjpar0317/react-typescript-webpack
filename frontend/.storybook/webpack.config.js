const path = require('path');

module.exports = ({ config, mode }) => {
    config.module.rules.push({
      test: /\.(ts|tsx|js|jsx)$/,
      exclude: /(node_modules|dist)/,
      resolve: {
        alias: {
            '@': path.resolve(__dirname, '../src/'),
        },
      },
      use: [
        {
            loader: 'babel-loader',
            options: {
                presets: [['react-app', { flow: false, typescript: true }]],
                include: path.resolve(__dirname, '../')
            }
        },
        {
            loader: 'ts-loader',
            options: {
                transpileOnly: true,
                experimentalWatchApi: true,
            },
        },
        {
            loader: require.resolve("react-docgen-typescript-loader"),
            options: {
              // Provide the path to your tsconfig.json so that your stories can
              // display types from outside each individual story.
              tsconfigPath: path.resolve(__dirname, "./tsconfig.json"),
            },
        }
      ],
    });

    config.resolve.extensions.push('.js', '.jsx', '.ts', '.tsx');
    return config;
};
