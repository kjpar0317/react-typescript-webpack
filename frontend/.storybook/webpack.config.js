const path = require('path');

module.exports = ({ config, mode }) => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      resolve: {
        alias: {
          '@components': path.resolve(__dirname, '../src/components/'),
          '@constants': path.resolve(__dirname, '../src/constants/'),
          '@features': path.resolve(__dirname, '../src/features/'),
          '@images': path.resolve(__dirname, '../src/images/'),
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
