module.exports = {
  typescript: {
    reactDocgen: "none",
  },
  stories: [
    "../src/components/**/stories.tsx"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "storybook-addon-next-router",
    "@storybook/addon-a11y"
  ],
  webpackFinal: (config) => {
    config.resolve.modules.push(`${process.cwd()}/src`)
    return config
  }
}
