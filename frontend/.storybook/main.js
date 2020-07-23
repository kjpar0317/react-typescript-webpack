const path = require("path");

module.exports = {
  stories: ["../src/stories/**/*.stories.(ts|tsx|js|jsx|mdx)"],
  addons: [
    "@storybook/addon-actions/register",
    "@storybook/addon-links/register",
    '@storybook/addon-knobs/register',
    '@storybook/addon-notes/register'
  ],
  presets: [
    {
      name: "@storybook/preset-create-react-app",
      options: {
        tsDocgenLoaderOptions: {
          tsconfigPath: path.resolve(__dirname, "./tsconfig.json")
        }
      }
    },
    {
      name: "@storybook/addon-docs/preset",
      options: {
        configureJSX: true
      }
    }
  ]
};
